import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from '../theme/';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, onPress }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
    >
      <Text style={disabled ? styles.labelDisabled : styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blue,
  },
  buttonDisabled: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ebony,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.type.monserratDemi,
  },
  labelDisabled: {
    fontSize: 12,
    color: Colors.ebony1,
    fontFamily: Fonts.type.monserratDemi,
  },
});

export default Button;
