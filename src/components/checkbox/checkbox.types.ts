import { TouchableOpacityProps } from "react-native";

/**
 * Props for the CustomCheckbox component.
 * 
 * @typedef {Object} CheckBoxProps
 * @property {boolean} isChecked - Determines whether the checkbox is checked.
 */
export interface CheckBoxProps extends TouchableOpacityProps {
    isChecked: boolean
}