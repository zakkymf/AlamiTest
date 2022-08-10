import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AppDispatch, RootState } from '../../store';
import { addProduct, setState } from '../../store/AddProductStore';
import Toast from 'react-native-toast-message';
import styles from './style';

const AddProduct = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const addProductState = useSelector((state: RootState) => state.addProductReducer);
  const sellerState = useSelector((state: RootState) => state.sellerReducer);

  const onChangeText = (key: string, value: string) => {
    const params = {
      key,
      value,
    };
    dispatch(setState(params));
  };

  const onAddProduct = () => {
    const params = {
      id: sellerState?.data?.data?.id,
      nama: addProductState.nama,
      deskripsi: addProductState.deskripsi,
      harga: addProductState.harga,
      satuan: addProductState.satuan,
      navigation,
    };
    dispatch(addProduct(params));
  };

  const disabled =
    addProductState.nama == '' ||
    addProductState.harga == '' ||
    addProductState.satuan == '' ||
    addProductState.deskripsi == ''
      ? true
      : false;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Tambah Product</Text>
          <Input
            editable={false}
            label="ID Penjual"
            keyboardType="numeric"
            value={sellerState?.data?.data?.id.toString()}
          />
          <Input
            label="Nama"
            value={addProductState.nama}
            placeholder="Masukkan Nama Produk"
            onChangeText={(value) => onChangeText('nama', value)}
          />
          <View style={styles.row}>
            <Input
              label="Harga Satuan"
              value={addProductState.harga}
              placeholder="Masukkan Harga"
              keyboardType="numeric"
              containerStyle={styles.input}
              onChangeText={(value) => onChangeText('harga', value)}
            />
            <Input
              label="Satuan"
              value={addProductState.satuan}
              placeholder="kg"
              containerStyle={styles.inputSatuan}
              onChangeText={(value) => onChangeText('satuan', value)}
            />
          </View>
          <Input
            label="Deskripsi"
            value={addProductState.deskripsi}
            placeholder="Masukkan Deskripsi Produk"
            onChangeText={(value) => onChangeText('deskripsi', value)}
          />

          <Button disabled={disabled} label="Tambah Product" onPress={onAddProduct} />
        </View>
      </View>
      <Toast />
    </>
  );
};

export default AddProduct;
