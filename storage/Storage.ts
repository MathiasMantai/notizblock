import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const setData = async (input: string, key: string) => {
    try {
        await AsyncStorage.setItem(key, input);
    }
    catch(e: any) {
        Alert.alert(e);
    }
};

const getData = async (setInput: CallableFunction, key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if(value !== null) {
            setInput(value);
        }
    }
    catch(e: any) {
        Alert.alert(e);
    }
};

const getCurrentNote = async () => {
    return await AsyncStorage.getItem('currentNote');
}

const setCurrentNote = async(value: string) => {
    try {
        await AsyncStorage.setItem('currentNote', value);
    }
    catch(e: any) {
        Alert.alert(e);
    }
}

const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
}

const getAllNoteKeys = async () => {
    return await AsyncStorage.getAllKeys();
}

export { setData, getData, getCurrentNote, getAllNoteKeys, clearAsyncStorage, setCurrentNote };