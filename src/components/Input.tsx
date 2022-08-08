import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface InputProps {
  value: string;
  label: string;
  placeholder: string;
  onChangeText: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  placeholder,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
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
  },
  input: {
    marginTop: 5,
    width: '100%',
    borderBottomWidth: 1,
  },
});

export default Input;
