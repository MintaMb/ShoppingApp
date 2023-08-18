import { ImageSourcePropType } from "react-native";

export type DefaultThemes = 'dark' | 'light' | 'red' | 'green'

export declare type Cache = 'immutable' | 'web' | 'cacheOnly';

export declare type Priority = 'low' | 'normal' | 'high';

export type Roles = 'customer' | 'admin'

export type Theme = {
    type?: string,
    BG_PRIMARY: string,
    BG_SECONDRY: string,
    TXT_PRIMARY: string,
    TXT_SECONDARY: string,
}
export declare type FastImageSource = {
    uri?: string;
    headers?: {
        [key: string]: string;
    };
    priority?: Priority;
    cache?: Cache;
};


export type CustomAlert = {
    showCancelButtonAlert: (message: string, onOk: () => void, onText: string, showCancel?: boolean, cancelButtonText?: string) => void,
    showSomeThingWentWrongAlert: () => void,
    showAlertMessageWithImage: (message: string, image: string | ImageSourcePropType, cancelButtonText: string, okButtonText: string, onOk: () => void) => void,
    showAlertMessage: (message: string, httpStatus?: string | number) => void,
}


export type CustomAlertPropTypes = {
    show: boolean,
    message?: string,
    onCancel?: () => void,
    showCancel?: boolean,
    onOk?: () => void,
    leftButtonTitle?: string,
    rightButtonTitle?: string,
    image?: ImageSourcePropType,
    okButtontext?: string,
    cancelButtonText?: string
}

export type AlertType = {
    Alert: CustomAlert
}
