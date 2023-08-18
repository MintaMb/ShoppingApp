
// export interface LoginData {
//     token: string;
//     userInfo: UserInfo;
//     studentInfo: StudentInfo;
//     subscriptionInfo: SubscriptionInfo;
//     schoolInfo?: null;
// }
// export interface UserInfo {
//     id: number;
//     role_id: number;
//     name: string;
//     phone_number: string;
//     email: string;
//     file: string;
//     connection: boolean;
//     role: Role;
// }
// export interface Role {
//     id: number;
//     role: string;
// }
// export interface StudentInfo {
//     id: number;
//     class_id: number;
//     user_id: number;
//     roll_number: number;
//     file: string;
//     class: Class;
//     school: School;
// }
// export interface Class {
//     id: number;
//     name: string;
//     is_active: number;
// }
// export interface School {
//     id: number;
//     student_id: number;
//     school_id: number;
//     school_detail: SchoolDetail;
// }
// export interface SchoolDetail {
//     id: number;
//     name: string;
//     email: string;
// }
// export interface SubscriptionInfo {
//     id: number;
//     user_id: number;
//     payment_id: number;
//     subscription_plan_id: number;
//     start_date: string;
//     end_date: string;
//     payment: Payment;
// }
// export interface Payment {
//     id: number;
//     user_id: number;
//     payment_method_id: number;
//     payment_method_transaction_id: string;
//     amount: number;
//     type: string;
//     status: string;
//     created_at: string;
//     updated_at: string;
// }

import { Roles } from "."


/**
 * SignInScreen
 */

export type SignInFormType = {
    email?: string
    password?: string
    fcmToken?: string
}

export type SignInFormKeys = 'email' | 'password'

export type SignInFormTypeValidation = {
    email?: VALIDATION
    password?: VALIDATION
}

/**
 * Create Password Screen
 */

export type CreatePwFormTypeValidation = {
    newPassword?: VALIDATION,
    confirmPassword?: VALIDATION
}

/**
 * Change Password Screen
 */
export type ChangePwFormTypeValidation = {
    oldPassword?: VALIDATION,
    newPassword?:VALIDATION,
    confirmPassword?: VALIDATION
}

/**
 * Forgot Password Screen
 */


export type ForgotPwFormTypeValidation = {
    email?: VALIDATION
}

export type VerificationFormTypeValidation = {
    otp?: VALIDATION
}


/**
 * Create New Account Screen
 */

export type AccountFormType = {
    userProfile?: string
    patientId?: string
    firstName?: string
    lastName?: string
    date?: Date
    month?: string
    year?: string
    email?: string
    phone?: string
    zipCode?: string
    password?: string
    fcmToken?: string
}

export type VALIDATION = {
    message?: string,
    valid?: boolean
}

export type AccountFormKeys = 'patientId' | 'firstName' | 'lastName' | 'month' | 'year' | 'email' | 'phone' | 'zipCode' | 'password'

export type AccountFormTypeValidation = {
    patientId?: VALIDATION
    firstName?: VALIDATION
    lastName?: VALIDATION
    date?: VALIDATION
    month?: VALIDATION
    year?: VALIDATION
    email?: VALIDATION
    phone?: VALIDATION
    zipCode?: VALIDATION
    password?: VALIDATION
}

/**
 * Share History Screen
 */

export type ShareHistoryTypeValidation = {
    email?: VALIDATION
}


export type UserInfoType = {
    id?: string,
    name?: string,
    email?: string,
    role: Roles
}
