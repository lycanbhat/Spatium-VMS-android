import { emailRegEx } from "../../regex"

export const validation = (type: string, value: string) => {
    switch(type) {
        case "email": {
            return emailRegEx.test(value)
        }
    }
}