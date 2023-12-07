import { DispatchSignInType, DispatchWelcomeType } from "./enums";
import { PropsSignInState } from "./types";

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

