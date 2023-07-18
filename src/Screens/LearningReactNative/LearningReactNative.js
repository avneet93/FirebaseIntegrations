//learning new concepts of React Native

import React from 'react';
import {SectionList, View, Text} from 'react-native';
import WrapperContainer from '../../Components/WrapperContainer';
import styles from './styles';

const LearningReactNative = ({navigation}) => {
  const DATA = [
    {
      title: 'Luxury',
      data: ['the Plaza', 'Four Seasons', 'Burj Al Arab'],
    },
    {
      title: 'Mid-range',
      data: ['Hampton Inn', 'Fairfiel Inn', 'Hyatt Place'],
    },
    {
      title: 'Budget',
      data: ['Days Inn', 'Super 8', 'Motel 6'],
    },
  ];

  const MainView = item => {
    console.log(item, 'ijdcjdsbcjsjc');
    return (
      <View style={{backgroundColor: 'coral', flex: 1}}>
        {/* <Text style={{color: 'red'}}>{item.data}</Text> */}
      </View>
    );
  };
  const HeaderView = item => {
    return (
      <View>{/* <Text style={{color: 'Black'}}>{item.title}</Text> */}</View>
    );
  };

  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.mainHeading}>Hotels</Text>
        </View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          // renderSectionHeader={<HeaderView item={item} />}
          // renderItem={<MainView item={item} />} />
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </WrapperContainer>
  );
};
export default LearningReactNative;
