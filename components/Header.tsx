import { View, Text, StyleSheet, StatusBar, Image, TouchableHighlight } from "react-native";

const Header = (props: HeaderTypes) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>
                {props.title}
            </Text>
            <TouchableHighlight onPress={() => props.setMenuActive(!props.menuActive)}>
                <Image source={require('../assets/burger.png')} style={{width: 40, height: 40}} />
            </TouchableHighlight>
        </View>
    )
};

type HeaderTypes = {
    title: string,
    menuActive: boolean,
    setMenuActive: CallableFunction
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