import React from 'react';
import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Fonts } from '../theme';

interface InputProps {
  value: string;
  label: string;
  placeholder: string;
  keyboardType?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  onChangeText: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  keyboardType,
  placeholder,
  onChangeText,
  textInputStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        style={[styles.input, textInputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'column',
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.type.monserrat,
  },
  input: {
    marginTop: 5,
    width: '100%',
    borderBottomWidth: 0.5,
    fontFamily: Fonts.type.monserrat,
  },
});

export default Input;
