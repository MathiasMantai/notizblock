import { View, Alert } from "react-native";
import Dialog  from "react-native-dialog";
import { useState } from "react";
import { setCurrentNote, setData } from "../storage/Storage";

const NewNoteDialog = (props: NewNoteDialogProps) => {
    const [input, setInput] = useState("");

    const confirm = () => {
        setData("", input);
        setCurrentNote(input);
        setInput("");
        props.setLoadedContent(true);
        props.setVisible(false);
    }

    const cancel = () => {
        props.setVisible(false);
    }

    const onChangeText = (value: string) => {
        setInput(value);
    }

    return (
        <View>
            <Dialog.Container visible={props.visible}>
                <Dialog.Title>
                    Neuer Notizblock
                </Dialog.Title>
                <Dialog.Description>
                    Wie soll der neue Notizblock heißen?
                </Dialog.Description>
                <Dialog.Input onChangeText={onChangeText} value={input}></Dialog.Input>
                <Dialog.Button label="Bestätigen" onPress={confirm} />
                <Dialog.Button label="Abbrechen" onPress={cancel} />
            </Dialog.Container>
        </View>
      ); 
}

export default NewNoteDialog;

type NewNoteDialogProps = {
    visible: boolean,
    setVisible: CallableFunction,
    setLoadedContent: CallableFunction
}