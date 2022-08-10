import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import { AppDispatch, RootState } from '../../store';
import { getProduct } from '../../store/ProductStore';
import styles from './style';

const Product = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productReducer);
  const addProductState = useSelector((state: RootState) => state.addProductReducer);

  useEffect(() => {
    dispatch(getProduct(addProductState?.data?.sellerId));
  }, [addProductState]);

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

  const onFocus = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Cari Produk"
        value={productState.search}
        onFocus={onFocus}
      />
      <FlatList
        style={styles.list}
        data={productState.data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  );
};

export default Product;
