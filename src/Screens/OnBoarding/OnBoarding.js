//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../Components/WrapperContainer';
import commonStyles from '../../styles/commonStyles';
import ButtonComp from '../../Components/ButtonComp';
import strings from '../../constants/lang';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import styles from './styles';

// create a component
const OnBoarding = () => {
  const SocialLoginButton = ({image = imagePath.fb, string, onPress}) => {
    return (
      <View style={styles.socialLoginView}>
        <TouchableOpacity style={styles.signInWith} onPress={onPress}>
          <Image source={image} />
          <Text style={styles.continueWith}>{string}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <WrapperContainer>
      <ImageBackground
        source={imagePath.backgroundImage}
        style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.heading}>Social SignIn</Text>
        </View>

        <View style={{}}>
          <SocialLoginButton
            // onPress={() => googleSignIn()}
            image={imagePath.google}
            string={strings.google}
          />
          <SocialLoginButton
            string={strings.fb}
            // onPress={() => onFbSignIn(callBackFunctionFacebook)}
          />
          {/* {Platform.OS === 'ios' ? ( */}

          <SocialLoginButton
            // onPress={appleLogin}
            image={imagePath.apple}
            string={strings.apple}
          />

          {/* //   ) : null} */}
        </View>
      </ImageBackground>
    </WrapperContainer>
  );
};

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   mainView: {
//     flex: 0.5,
//     marginTop: 24,
//     alignSelf: 'center',
//   },
//   buttonView: {
//     flex: 0.5,
//     backgroundColor: 'red',
//   },
//   socialLoginView: {
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: moderateScale(8),
//   },
//   continueWith: {
//     ...commonStyles.fontSize15,
//     // lineHeight: moderateScaleVertical(21),
//     color: colors.white,
//     textAlign: 'center',
//     flex: 1,
//   },
//   signInWith: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: moderateScale(14),
//     width: '100%',
//     borderWidth: moderateScale(1),
//     borderRadius: moderateScale(12),
//     backgroundColor: colors.FFFFFF,
//     borderColor: colors.E9E9E9,
//     justifyContent: 'center',
//     paddingHorizontal: moderateScale(24),
//   },
// });

//make this component available to the app
export default OnBoarding;
