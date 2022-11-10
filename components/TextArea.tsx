import { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native"

import { setData, getData } from "../storage/Storage";

const TextArea = () => {

    const [input, setInput] = useState('');
    
    const onChangeText = (value: string) => {
        setInput(value);
        setData(value);
    }

    useEffect( () => {
        getData(setInput);
    }, []);
    return (
        <TextInput 
            value={input}
            multiline={true} 
            numberOfLines={10} 
            spellCheck={false} 
            style={styles.textarea}
            onChangeText={onChangeText}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    textarea: {
        height: "100%",
        textAlignVertical: "top",
        backgroundColor: "#e8eaf6",
        color: "#000",
        fontSize: 18
    }
})

export default TextArea