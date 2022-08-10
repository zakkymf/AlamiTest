import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import { AppDispatch, RootState } from '../../store';
import { getProduct, search, setSearch } from '../../store/ProductStore';
import { debounce } from 'lodash';
import styles from './style';

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.productReducer);
  const addProductState = useSelector((state: RootState) => state.addProductReducer);

  useEffect(() => {
    dispatch(getProduct(addProductState?.data?.sellerId));
  }, [addProductState]);

  const searchProduct = (query: string) => {
    dispatch(search(query));
  };

  const debSearch = useCallback(
    debounce((query: string) => {
      if (query.length > 2) {
        searchProduct(query);
      }
    }, 400),
    []
  );

  const onChangeText = (value: string) => {
    debSearch(value);
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
        style={styles.list}
        data={productState.data}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  );
};

export default Product;
