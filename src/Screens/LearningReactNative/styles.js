import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerView: {
    flex: 0.2,
    backgroundColor: 'salmon',
  },
  mainHeading: {
    ...commonStyles.fontBold24,
    color: 'cyan',
    textAlign: 'center',
    marginVertical: 12,
  },
  mainView: {
    flex: 0.5,
    marginTop: 24,
    alignSelf: 'center',
  },
  header: {
    ...commonStyles.fontBold24,
    color: colors.black,
  },
  title: {
    ...commonStyles.fontSize14,
    color: colors.lighPink,
  },
  buttonView: {
    flex: 0.5,
    backgroundColor: 'red',
  },
});

export default styles;
