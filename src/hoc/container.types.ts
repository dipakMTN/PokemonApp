import {KeyboardAvoidingViewProps, ViewProps} from 'react-native';

export interface ContainerProps extends ViewProps {
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}
