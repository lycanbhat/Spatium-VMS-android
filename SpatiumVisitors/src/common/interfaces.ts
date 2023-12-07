import { DispatchSignInType, DispatchWelcomeType, FieldType, KeyboardType } from "./enums";
import { PropsSignInState } from "./types";

//Custom Button
export interface PropsCustomButton {
  text: string;
  backgroundColor?: string;
  width?: number;
  onPress: () => void;
}

//Custom Field
export interface PropsCustomField {
  value: string;
  onChangeText: any;
  text: string;
  secureText?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardType;
  fieldType?: FieldType;
  maxLength?: number
}

//Sign-in
export interface PropsSignInForm {
    state: PropsSignInState;
    dispatch: (action: PropsSignInAction) => void;
  }
  
export interface PropsSignInAction {
    type: DispatchSignInType;
    payload: string;
  }

//Home
export interface PropsHomeTile {
    title: string;
    subtitle: string;
    isDropdown?: boolean;
  }

//Welcome
export interface PropsWelcomeState {
    fullName: string;
    email: string;
    mobile: string;
  }
  
export interface PropsWelcomeAction {
    type: DispatchWelcomeType;
    payload: string;
  }

