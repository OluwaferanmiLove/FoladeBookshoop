import React, { useContext, useState, useEffect } from 'react';
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

function About({ navigation }) {
  const { state } = useContext(AppContext);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <HeaderLite onPress={() => navigation.goBack()} title={'About the developer'} />
      <View style={{ marginTop: hp(10), alignItems: 'center' }}>
        <View style={[styles.imageContainer]}>
          <Image
            source={require('../../assets/dev.jpg')}
            style={[styles.image]}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>Alabi Adebayo Ridwan</Text>
          <Text style={[styles.name, {marginTop: hp(3)}]}>HC20190105620</Text>
          <Text style={[styles.name, {marginTop: hp(3)}]}>(HND 2 Computer Science)</Text>
          <Text
            style={[
              styles.name,
              {
                marginTop: hp(45),
                textAlign: 'center',
                // fontWeight: 'normal',
            }]}>
              Design and implementation of an online bookstore using React JS
            </Text>
          <Text
            style={[
              styles.name,
              {
                marginTop: hp(6),
                textAlign: 'center',
                fontWeight: 'normal',
                fontSize: wp(15)
            }]}>
              (A case study of Jasper Books Nigeria Limited, 2,State Hospital Road, Asubairo, Osogbo)
            </Text>
          <Text style={[styles.name, {marginTop: hp(60)}]}>Supervised By:</Text>
          <Text style={[styles.name, {marginTop: hp(3)}]}>MR. NWAEKPE O.C</Text>
        </View>
      </View>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginHorizontal: wp(20),
  },
  header: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: hp(20),
    width: wp(180),
    height: wp(180),
    borderRadius: 99999,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: wp(180),
    height: wp(180),
  },
  name: {
    fontSize: wp(20),
    fontWeight: 'bold',
    marginTop: hp(15),
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
    width: wp(35),
    height: wp(35),
    borderRadius: 7,
    backgroundColor: colors.secondaryLighter + '30',
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
    marginTop: hp(25),
    paddingHorizontal: wp(20),
    alignItems: 'center',
    paddingBottom: hp(20)
  },
})

export default About;