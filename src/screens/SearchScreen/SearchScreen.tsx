import React, { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';
import { View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/List';
import { AppDispatch, RootState } from '../../store';
import { search, setSearch } from '../../store/SearchStore';
import styles from './style';
import { Colors } from '../../theme';

const SearchScreen = ({ navigation }: any) => {
  const inputRef = React.createRef<TextInput>();
  const dispatch = useDispatch<AppDispatch>();
  const searchState = useSelector((state: RootState) => state.searchReducer);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 200);
    });
    return unsubscribe;
  }, []);

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

  const renderFooter = () => {
    if (searchState.loading) {
      return <ActivityIndicator size="large" color={Colors.blue} style={styles.loading} />;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.search}
        placeholder="Cari Produk"
        value={searchState.search}
        onChangeText={onChangeText}
      />
      <FlatList
        style={styles.list}
        data={searchState.data}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  );
};

export default SearchScreen;
