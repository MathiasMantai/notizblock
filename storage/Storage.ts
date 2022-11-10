import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

let STORAGE_KEY = '@user_input';

const setData = async (input: string) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, input);
    }
    catch(e: any) {
        Alert.alert(e);
    }
};

const getData = async (setInput: CallableFunction) => {
    try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);

        if(value !== null) {
            setInput(value);
        }
    }
    catch(e: any) {
        Alert.alert(e);
    }
};



export { setData, getData };