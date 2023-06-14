// import React from 'react';
// import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { moderateScale } from '../styles/responsiveSize';
// import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';
// import commonStyles, { hitSlopProp } from '../styles/commonStyles';

// const ButtonComp = ({
//   onPress = () => { },
//   btnText = '',
//   btnTextStyle = {},
//   btnStyle = {},
// }) => {
//   return (
//     <TouchableOpacity
//       style={{ ...styles.btnStyle, ...btnStyle }}
//       hitSlop={hitSlopProp}
//       activeOpacity={0.8}
//       onPress={onPress}
//     >
//       <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}
//       >{btnText}</Text>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   btnStyle: {
//     backgroundColor: colors.whiteColor,
//     height: moderateScale(48),
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1.5,
//     paddingHorizontal: moderateScale(8)
//   },
//   btnTextStyle: {
//     ...commonStyles.fontSize26,
//     fontFamily: fontFamily.medium,
//     textTransform:'uppercase'
//   },
// });
// export default ButtonComp;
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';

const ButtonComp = ({
  onPress = () => {},
  btnText,
  btnTextStyle = {},
  btnStyle = {},
  active = {},
  btnStyleActive = {},
}) => {
  return (
    <TouchableOpacity
      style={
        active
          ? {...styles.btnStyleActive, ...btnStyleActive}
          : {...styles.btnStyleActive, backgroundColor: colors.inActiveButton}
      }
      hitSlop={hitSlopProp}
      activeOpacity={0.8}
      //onPress={onPress}
      onPress={active ? onPress : null}>
      <Text
        style={
          active
            ? {...styles.btnTextStyle, ...btnTextStyle}
            : {...styles.btnTextStyle, color: colors.inActiveText}
        }>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnTextStyle: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.medium,
    color: colors.lightBlack,
  },
  btnStyleActive: {
    backgroundColor: colors.ButtonColor,
    height: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(16),
    width: '100%',
    zIndex: 5000,
  },
});
export default ButtonComp;
