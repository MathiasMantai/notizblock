import { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import { getAllNoteKeys, clearAsyncStorage } from "../storage/Storage";

const Menu = (props: MenuProps) => {

    const [keys, setKeys] = useState<Array<string>>([]);

    useEffect( () => {
        let tmp = getAllNoteKeys();
        Alert.alert(JSON.stringify(tmp));
        tmp.then( (value) => {
            if(value.length == 0) {
                setKeys(["Notizblock"]);
            }
            else {
                let tmp = value.concat();
                setKeys(tmp);
            }
        })

    }, []);
    if(props.isActive) {
        return (
            <View style={[styles.menu_default, styles.menu_active]}>
                {Object.entries(keys).map( (keys) => (
                    <Text style={styles.menu_entries}>{keys[1]}</Text>
                ))}
            </View>
        )
    }
    else {
        return (
            <View style={[styles.menu_default, styles.menu_inactive]}>
                <Text>MENU</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menu_active: {
        flex: 0
    },
    menu_inactive: {
        flex: 1
    },
    menu_default: {
        backgroundColor: "#002984",
        color: "#fff",  
    },
    menu_entries: {
        color: "#fff",
        padding: 10,
        fontSize: 20
    }
});

type MenuProps = {
    isActive: boolean
}

export default Menu;