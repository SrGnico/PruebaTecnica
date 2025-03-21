import { StyleSheet, Image, Switch } from "react-native";
import { Text, View } from "./Themed";
import IconButton from "./iconButton";
const swarWarsLogoNegro = require('../data/images/Star_Wars_Logo_Negro.png');
const swarWarsLogoBlanco = require('../data/images/Star_Wars_Logo_Blanco.png');

import { useColorScheme } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { toggleTheme } from "../redux/slices/themeSlice";
import Colors from "@/constants/Colors";

const Header = () =>{
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const dispatch = useDispatch<AppDispatch>();

    return <View style={[styles.container, {backgroundColor: Colors[isDarkMode ? 'light' : 'dark'].text }]}>
        <IconButton onPress={()=>{}} name="menu"></IconButton>
        <Image style={styles.image} source={isDarkMode ? swarWarsLogoBlanco : swarWarsLogoNegro } />
        <IconButton onPress={()=>{
            dispatch(toggleTheme())
        }} name={isDarkMode ? "sunny-sharp" : "moon"}></IconButton>
    </View>
};

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image:{
        height: 100,
        width: 120,
        objectFit: 'contain'
    }
});