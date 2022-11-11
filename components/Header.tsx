import { Alert, View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";
import { useEffect, useState } from "react";
import { getCurrentNote, setCurrentNote } from "../storage/Storage";

const Header = (props: HeaderTypes) => {

    const [title, setTitle] = useState("");

    useEffect( () => {
        let tmp = getCurrentNote();
        tmp.then( (value) => {
            if(value != null) {
                setTitle(value);
            }
            else {
                setTitle("Notizblock");
                setCurrentNote("Notizblock");
            }
        });
    }, []);

    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>
                {title}
            </Text>
            <TouchableHighlight onPress={() => props.setDialogVisible(true)}>
                <Image source={require('../assets/plus.png')} style={{width: 40, height: 40}} />
            </TouchableHighlight>            
            <TouchableHighlight onPress={() => props.setMenuActive(!props.menuActive)}>
                <Image source={require('../assets/burger.png')} style={{width: 40, height: 40}} />
            </TouchableHighlight>
        </View>
    )
};

type HeaderTypes = {
    menuActive: boolean,
    setMenuActive: CallableFunction,
    setDialogVisible: CallableFunction
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3f51b5",
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headertext: {
        color: "#fff",
        fontSize: 25,
    }
});

export default Header;