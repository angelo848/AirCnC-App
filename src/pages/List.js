import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Image, AsyncStorage } from "react-native";

import Spotlist from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List() {
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(' ').map(tech => tech.trim())

            setTechs(techsArray)
        })
    }, [])

    // console.log(techs)

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            {techs.map(tech => <Spotlist key={tech} tech={tech} />)}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 35,
    },
})