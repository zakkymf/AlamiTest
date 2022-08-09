import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AppDispatch, RootState } from '../../store';
import { addSeller, setCity, setName } from '../../store/SellerStore';
import styles from './style';

const SellerScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const sellerState = useSelector((state: RootState) => state.sellerReducer);

  const onChangeName = (name: string) => {
    dispatch(setName(name));
  };

  const onChangeCity = (city: string) => {
    dispatch(setCity(city));
  };

  const onAddSeller = () => {
    dispatch(addSeller({ nama: sellerState.nama, kota: sellerState.kota, navigation }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tambah Penjual</Text>
        <Input
          label="Nama"
          value={sellerState.nama}
          placeholder="Masukkan Nama Penjual"
          onChangeText={onChangeName}
        />
        <Input
          label="Kota"
          value={sellerState.kota}
          placeholder="Masukkan Kota Penjual"
          onChangeText={onChangeCity}
        />

        <Button label="Tambah Penjual" onPress={onAddSeller} />
      </View>
    </View>
  );
};

export default SellerScreen;
