import { View, Text, StyleSheet, StatusBar } from "react-native";

const Header = (props: HeaderTypes) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>
                {props.title}
            </Text>
        </View>
    )
}

type HeaderTypes = {
    title: string
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#3f51b5",
        padding: 20,
    },
    headertext: {
        color: "#fff",
        fontSize: 25,
    }
})

export default Header;