import { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, View, Text, StatusBar } from "react-native";

import Header from "./components/Header";
import Menu from "./components/Menu";
import TextArea from "./components/TextArea";
import NewNoteDialog from "./components/NewNoteDialog";

const App = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [loadedContent, setLoadedContent] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [newNoteCreated, setNewNoteCreated] = useState(false);

    useEffect( () => {

    }, [newNoteCreated]);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#002984" />
            <NewNoteDialog visible={dialogVisible} setVisible={setDialogVisible} setLoadedContent={setNewNoteCreated} />
            <Header menuActive={menuActive} setMenuActive={setMenuActive} setDialogVisible={setDialogVisible} />
            <Menu isActive={menuActive} />
            <View style={styles.container}>
                <TextArea loadedContent={loadedContent} setLoadedContent={setLoadedContent} />
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