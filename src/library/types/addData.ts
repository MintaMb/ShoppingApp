import { ImageOrVideo } from "react-native-image-crop-picker";

export type fieldState = {
    transactionId?: string,
    treatmentDate?: Date,
    practiceName?: string,
    approvedFor?: string,
    receipts?: Array<ImageOrVideo>,
    record?: string
}