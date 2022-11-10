import { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";

import Header from "./components/Header";
import Menu from "./components/Menu";
import TextArea from "./components/TextArea";

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#002984" />
            <Header title="Notizblock" menuActive={menuActive} setMenuActive={setMenuActive} />
            <Menu isActive={menuActive} />
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