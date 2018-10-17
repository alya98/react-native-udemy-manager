import React from 'react';
import { Text, View } from 'react-native';

export const CardItem = ({ children }) => {
	return (
    <View style={styles.container}> 
      {children}
    </View>
  );
};

const styles = {
	container: {
		borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',  		
	}
};
