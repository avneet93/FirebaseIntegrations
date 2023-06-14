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
  },
  mainView: {
    flex: 0.5,
    marginTop: 24,
    alignSelf: 'center',
  },
  heading: {
    ...commonStyles.fontBold24,
    color: colors.white,
  },
  buttonView: {
    flex: 0.5,
    backgroundColor: 'red',
  },
  socialLoginView: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(8),
  },
  continueWith: {
    ...commonStyles.fontSize15,
    lineHeight: moderateScaleVertical(21),
    color: colors.white,
    textAlign: 'center',
    flex: 1,
  },
  signInWith: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(14),
    width: '100%',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    backgroundColor: colors.FFFFFF,
    borderColor: colors.E9E9E9,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(24),
  },
  // container: {
  //     flex: 1,
  //     justifyContent: 'space-between'
  // },
  // oldKaiText: {
  //     ...commonStyles.fontSize18,
  //     color: colors.whiteColor,
  //     fontFamily: fontFamily.medium,
  //     textAlign: 'center',
  // },
  // btnStyle: {
  //     width: moderateScale(160),
  //     height: moderateScale(160),
  //     borderRadius: moderateScale(80),
  //     alignItems: 'center',
  //     justifyContent: 'center'
  // },
  // loaderStyle: {
  //     backgroundColor: colors.whiteColor,
  //     borderWidth: 1,
  //     height: moderateScale(68),
  //     justifyContent: 'center',
  //     borderColor: colors.grayColor,
  //     width: '100%',
  //     marginVertical: moderateScaleVertical(36)
  // },
  // colorLoader: {
  //     backgroundColor: colors.loaderColor,
  //     height: moderateScale(50),
  //     borderRadius: 4,
  //     borderColor: colors.grayColor,
  //     borderWidth: 1
  // }
});

export default styles;
