import React from 'react';
import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Colors, Fonts } from '../theme';

interface InputProps {
  editable?: boolean;
  value: string;
  label: string;
  placeholder?: string;
  keyboardType?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  onChangeText?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  editable,
  keyboardType,
  placeholder,
  onChangeText,
  textInputStyle,
  containerStyle,
}) => {
  const isEmpty = value === '' || value === null || value === undefined;
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        editable={editable}
        style={[
          styles.input,
          textInputStyle,
          {
            fontSize: 14,
            color: isEmpty ? '#333333' : Colors.black,
            fontWeight: isEmpty ? '500' : '800',
            fontFamily: isEmpty ? Fonts.type.monserrat : Fonts.type.monserratDemi,
          },
        ]}
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
    height: 40,
    marginTop: 5,
    width: '100%',
    borderBottomWidth: 0.5,
  },
});

export default Input;
