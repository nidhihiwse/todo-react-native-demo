import React from "react";
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

const Task = (props) => {
  const deleteHandler = () => {
    props.onDelete();
  }

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemLeft}> 
        <View style={styles.circle}></View> 
    
        <Text style={styles.itemText}>{props.text}</Text>
   
      </View>

      {/* Remove button */}
      <TouchableOpacity onPress={() => deleteHandler()} style={styles.itemRight}>
        <Image
          style={styles.deleteIcon}
          source={require('../assets/delete.png')}
          placeholder='delete'
          contentFit="cover"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLeft: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', 
  },
  itemText: {
    maxWidth: '80%',
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: 'yellow',
    borderRadius: 50,
    marginRight: 10,
  },
  itemRight: {},
  deleteIcon: {
    width: 20,
    height: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
  }
});

export default Task;