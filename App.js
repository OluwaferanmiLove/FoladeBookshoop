import { StyleSheet, Text, View } from 'react-native';
import AppContextProvider from './src/context/AppContext';
import FoladeBookShop from './src/navigation';
import { initializeApp } from "firebase/app";
import { ToastProvider } from 'react-native-toast-notifications';
import { colors } from './src/constants/colors';
import { hp } from './src/util/dimension';

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCmSskxXau2w5_frsSKd1zks90AeXde0LA",
    authDomain: "foladebookshop.firebaseapp.com",
    projectId: "foladebookshop",
    storageBucket: "foladebookshop.appspot.com",
    messagingSenderId: "197736614445",
    appId: "1:197736614445:web:7cd03c0717737afcc186a4"
  };

  initializeApp(firebaseConfig);

  return (
    <AppContextProvider>
      <ToastProvider
        placement="top"
        duration={2500}
        // successColor="green"
        // dangerColor="red"
        // warningColor="orange"
        // normalColor="#6610F2"
        normalColor={colors.primary}
        offsetTop={hp(40)}
        // renderType={{
        //   normal: (toast) => (
        //     <Toast text={toast.message} bgColor="#6610F2" />
        //   ),
        //   danger: (toast) => (
        //     <Toast text={toast.message} bgColor="#F83C33" />
        //   ),
        //   success: (toast) => (
        //     <Toast text={toast.message} bgColor="#45D988" />
        //   ),
        // }}
        swipeEnabled={true}>
        <FoladeBookShop />
      </ToastProvider>
    </AppContextProvider>
  );
}
