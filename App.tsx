import { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";

import Header from "./components/Header";
import TextArea from "./components/TextArea";

import {setData, getData } from './storage/Storage';



const App = () => {

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#002984" />
            <Header title="Notizblock" />
            <View style={styles.container}>
                <TextArea />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        statusbar: {
            backgroundColor: "#3f51b5"
        },
        container: {
            padding: 0,
            margin: 0
        },
        title: {

        }
    }
)

export default App;