import {KeyboardAvoidingView, Platform, View} from 'react-native';

import {memo} from 'react';
import { ContainerProps } from './container.types';

const Container: React.FC<ContainerProps> = ({
  style,
  children,
  keyboardAvoidingViewProps,
  ...props
}) => {
  return (
    <View style={[{flex: 1}, style]} {...props}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        {...keyboardAvoidingViewProps}
        style={[{flex: 1}, keyboardAvoidingViewProps?.style]}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

export default memo(Container);
