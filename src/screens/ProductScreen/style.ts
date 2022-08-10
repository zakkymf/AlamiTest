import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.lightblue,
  },
  card: {
    ...Platform.select({
      android: {
        elevation: 3,
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      },
      ios: {
        padding: 16,
        borderRadius: 12,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      },
    }),
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: Fonts.type.monserratBold,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    width: '70%',
    marginRight: 20,
  },
  inputSatuan: {
    flex: 1,
  },
  search: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    borderRadius: 12,
    backgroundColor: Colors.white,
  },
  list: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default styles;
