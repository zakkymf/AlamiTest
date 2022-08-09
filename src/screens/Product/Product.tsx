import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import { AppDispatch, RootState } from '../../store';
import { getProduct, setSearch } from '../../store/ProductStore';
import styles from './style';

const Product = ({ route }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productReducer);
  const addProductState = useSelector((state: RootState) => state.addProductReducer);
  console.log(addProductState);

  useEffect(() => {
    dispatch(getProduct({ id: route?.params?.sellerId }));
  }, []);

  const onChangeText = (value: string) => {
    dispatch(setSearch(value));
  };

  const renderItem = ({ item }: any) => {
    return (
      <List
        nama={item?.nama}
        satuan={item?.satuan}
        harga={item?.hargaSatuan}
        deskripsi={item?.deskripsi}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Cari Produk"
        value={productState.search}
        onChangeText={onChangeText}
      />
      <FlatList
        data={productState.data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  );
};

export default Product;
