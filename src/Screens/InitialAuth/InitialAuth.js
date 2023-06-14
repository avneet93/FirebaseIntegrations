//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonComp from '../../Components/ButtonComp';

// create a component
const InitialAuth = () => {
  return (
    <View style={styles.container}>
      <Text>InitialAuth</Text>
      <ButtonComp />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default InitialAuth;
