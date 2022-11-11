import { useEffect, useState } from "react";
import { StyleSheet, TextInput, Alert } from "react-native"

import { setData, getData, getCurrentNote } from "../storage/Storage";

const TextArea = (props: TextAreaProps) => {
    const [content, setContent] = useState("");
    const [currentNote, setCurrentNote] = useState("");


    const onChangeText = async (value: string) => {
        setContent(value);
        setData(value, currentNote);
    }

    useEffect(() => {
        if(!props.loadedContent) {
            let noteTmp = getCurrentNote();
            noteTmp.then((value) => {
                if(value != null) {
                    setCurrentNote(value);
                    let currentContent = getData(setContent, value);
                    currentContent.then((value) => {
                        if(value != null) {
                            setContent(value);
                        }
                    });
                }
                else {
                    setCurrentNote("Notizblock");
                }
            });
            props.setLoadedContent(true);
        }
    }, [props.loadedContent]);

    return (
        <TextInput 
            value={content}
            multiline={true} 
            numberOfLines={10} 
            spellCheck={false} 
            style={styles.textarea}
            autoCorrect={false}
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
        fontSize: 18,
        padding: 10
    }
})

type TextAreaProps = {
    loadedContent: boolean,
    setLoadedContent: CallableFunction
}

export default TextArea