import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from '../theme';
import { formatCurrency } from '../utils/helper';

interface ListProps {
  nama: string;
  satuan: string;
  harga: number;
  deskripsi: string;
}

const List: React.FC<ListProps> = ({ nama, satuan, harga, deskripsi }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.name}>{nama}</Text>
      <Text style={styles.description}>{deskripsi}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>{formatCurrency(harga)}</Text>
        <Text style={styles.unit}>{`/${satuan}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    ...Platform.select({
      android: {
        elevation: 3,
        padding: 16,
        marginVertical: 10,
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      },
      ios: {
        padding: 16,
        borderRadius: 12,
        marginVertical: 10,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      },
    }),
  },
  name: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.monserratDemi,
  },
  description: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.monserrat,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  price: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.monserratDemi,
  },
  unit: {
    fontSize: 13,
    fontFamily: Fonts.type.monserrat,
  },
});

export default List;
