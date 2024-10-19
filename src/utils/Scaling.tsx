import { Dimensions, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const screenWidth: number = Dimensions.get('window').width
export const screenHeight: number = Dimensions.get('window').height

export const fontR = (fontSize: number) => {
    return Platform.OS === 'android' ? RFValue(fontSize + 2) : RFValue(fontSize)
}