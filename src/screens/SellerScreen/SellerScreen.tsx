import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {RootState} from '../../store';
import {setCity, setName} from '../../store/SellerStore';
import styles from './style';

const SellerScreen = () => {
  const dispatch = useDispatch();
  const sellerState = useSelector((state: RootState) => state.sellerReducer);

  const onChangeName = (name: string) => {
    dispatch(setName(name));
  };

  const onChangeCity = (city: string) => {
    dispatch(setCity(city));
  };

  return (
    <View style={styles.container}>
      <Input
        label="Nama"
        value={sellerState.name}
        placeholder="Masukkan Nama Penjual"
        onChangeText={onChangeName}
      />
      <Input
        label="Kota"
        value={sellerState.city}
        placeholder="Masukkan Kota Penjual"
        onChangeText={onChangeCity}
      />

      <Button label="Tambah Penjual" onPress={() => null} />
    </View>
  );
};

export default SellerScreen;
