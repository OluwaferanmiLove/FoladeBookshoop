import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import { hp, wp } from '../../util/dimension';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AppContext } from '../../context/AppContext';
import HeaderLite from '../../components/HeaderLite';
import ImageView from '../../components/ImageView';
import BookCard from '../../components/BookCard';
import Input from '../../components/Input';
import { colors } from '../../constants/colors';
import { books } from '../../constants/mockData';
import { collection, getFirestore, onSnapshot, query } from 'firebase/firestore';

function Home({ navigation }) {
  const { state } = useContext(AppContext);
  const [data, setData] = useState([]);

  const db = getFirestore();

  const dbRef = collection(db, 'books');

  useEffect(() => {
    const q = query(dbRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setData(data);
    },
      (error) => {
        console.log(error.message);
      });

    return () => unsubscribe();
  }, []);

  const navigateToBook = (detail) => {
    navigation.navigate('BookDetails', { detail: detail })
  }

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <View style={styles.header}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.name}>Hi, {state.user.firstName} 👋 </Text>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <View style={[styles.iconContainer]}>
              <Ionicons name={'information-circle-outline'} size={wp(25)} color={colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: hp(10) }}>
        <Input
          placeholder={'Search'}
          iconName={'search'}
          backgroundColor={colors.primary + '09'}
          iconColor={colors.primary}
        />
      </View>
      <ScrollView style={{ marginHorizontal: -wp(20) }}>
        <View style={styles.content}>
          {data.map((item, index) => (
            <BookCard
              key={item.title}
              title={item.title}
              image={{ uri: item.image }}
              price={item.price}
              onPress={() => navigateToBook(item)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: wp(20),
  },
  header: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flex: 1,
    marginLeft: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: wp(30),
    fontWeight: '500',
    color: colors.primary
  },
  description: {
    fontSize: wp(16),
    textTransform: 'capitalize',
    fontWeight: '300',
    color: colors.secondaryDarker
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(40),
    height: wp(40),
    borderRadius: 12,
    backgroundColor: colors.primary + '15',
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: hp(20),
    paddingVertical: hp(22),
    borderRadius: wp(10),
    backgroundColor: colors.primary,
  },
  infoTitle: {
    fontSize: wp(16),
    fontWeight: '300',
    color: '#ffffff90',
  },
  infoValue: {
    fontSize: wp(35),
    fontWeight: '700',
    marginTop: hp(10),
    color: '#ffffff'
  },
  sectionTitleContainer: {
    marginTop: hp(25),
  },
  sectionTitle: {
    fontSize: wp(22),
    fontWeight: '700',
    color: colors.primary
  },
  content: {
    // marginTop: hp(25),
    paddingHorizontal: wp(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: hp(20)
  }
})

export default Home;