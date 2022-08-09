import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AppDispatch, RootState } from '../../store';
import { addProduct, setState } from '../../store/AddProductStore';
import styles from './style';

const AddProduct = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const addProductState = useSelector((state: RootState) => state.addProductReducer);

  const onChangeText = (key: string, value: string) => {
    const params = {
      key,
      value,
    };
    dispatch(setState(params));
  };

  const onAddProduct = () => {
    const params = {
      id: addProductState.id,
      nama: addProductState.nama,
      deskripsi: addProductState.deskripsi,
      harga: addProductState.harga,
      satuan: addProductState.satuan,
      navigation,
    };
    dispatch(addProduct(params));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tambah Product</Text>
        <Input
          label="ID Penjual"
          keyboardType="numeric"
          value={addProductState.id}
          placeholder="Masukkan ID Penjual"
          onChangeText={(value) => onChangeText('id', value)}
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

        <Button label="Tambah Product" onPress={onAddProduct} />
      </View>
    </View>
  );
};

export default AddProduct;
