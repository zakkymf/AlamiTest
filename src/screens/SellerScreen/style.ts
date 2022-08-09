import { Platform, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
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
});

export default styles;
