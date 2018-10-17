import React from 'react';
import { Text, SafeAreaView } from 'react-native';

export const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;
  return (
      <SafeAreaView style={viewStyle}>
          <Text style={textStyle}>{headerText}</Text>
      </SafeAreaView>
  );
};
const styles = {
  viewStyle: {
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  }
};

