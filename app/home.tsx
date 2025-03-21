import { StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Colors from '@/constants/Colors';

const HomeScreen = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[isDarkMode ? 'light' : 'dark'].text  }]}>
       <StatusBar
      barStyle={isDarkMode ? "light-content" : "dark-content"}
      backgroundColor={Colors[isDarkMode ? 'light' : 'dark'].background}
    />
      <Header></Header>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});