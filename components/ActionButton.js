import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomComponent = ({ isUpdate }) => {
  const styles = StyleSheet.create({
    updateButtonWrapper: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
      },
      addButtonWrapper: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',//#528AAE
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
      },
      text: {
        color: '#FFF',
        fontSize: 20,
      }
  });

  return (
    <View style={isUpdate ? styles.updateButtonWrapper: styles.addButtonWrapper }>
      {isUpdate ? <Text style={styles.text}>&#10004;</Text>: <Text style={styles.text}>+</Text>}
    </View>
  );
};

export default CustomComponent;