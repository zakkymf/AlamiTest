import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, TextInput, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import { AppDispatch, RootState } from '../../store';
import { getProduct } from '../../store/ProductStore';
import { setData, setSearch } from '../../store/SearchStore';
import Toast from 'react-native-toast-message';
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
    dispatch(setSearch(''));
    dispatch(setData(null));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
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
        <Toast />
      </View>
    </SafeAreaView>
  );
};

export default Product;
