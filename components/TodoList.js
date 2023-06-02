import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard, 
  KeyboardAvoidingView, 
  Platform,  
  TextInput, 
  ScrollView, 
  Alert
} from 'react-native';

import Task from './Task';

import React, {useState} from 'react';

export default function TodoList({setIsAuthenticated}) {
  
  const [task, setTask] = useState();
  const [todoItems, setTodoItems] = useState([]);
  const [selected, setSelected] = useState();

  // Add task handler function
  const addTaskHandler = () => {

    Keyboard.dismiss();

    if(task == null || task === "") {
      Alert.alert('Task can not be empty.');
    } else {
      if(isUpdateFunctionality()) {
        todoItems[selected] = task;
      } else {
        setTodoItems([...todoItems, task]);
      }
    }
    
    setSelected(null);
    setTask("");
  }

  {/* Delete a task */}
  const deleteTaskHandler = (index) => {
    const todoItemsCopy = [...todoItems];
    todoItemsCopy.splice(index, 1);
    setTodoItems(todoItemsCopy);
  }

  {/* Edit a task */}
  const editTaskHandler = (index) => {
    setSelected(index);
    setTask(todoItems[index]);
  }

  function isUpdateFunctionality() {
    return selected != null && selected >= 0;
  }

  return ( 
    <View style={styles.container}>
      {/* Logout Button */}
      <TouchableOpacity onPress={() => setIsAuthenticated(false)} style={styles.btnLogout}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.todoWrapper}>
        {/* Header */}
        <Text style={styles.titleText}>Todo List</Text>
        
        {/* scrollable videw */}
        <ScrollView style={styles.scrollContainer}>
          {/* Todo List items */}
          <View style={styles.todoList}>
            {
              todoItems.map((item, index) => {
                return <TouchableOpacity testID="delete-task-button" key={index} onPress={() => editTaskHandler(index)}>
                  <Task text={item} key={index}
                    onDelete={() => deleteTaskHandler(index)}
                  />
                </TouchableOpacity>
              })
            }
          </View>
        </ScrollView>

      </View>
      

      {/* Footer */}
      <KeyboardAvoidingView style={styles.addTaskWrapper}
        behaviour={Platform.OS === "ios" ? "padding" : "height"}>

        <TextInput style={styles.inputText} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)} required/>

        <TouchableOpacity onPress={() => addTaskHandler()}>
          {/* <ActionButton isUpdate={isUpdateFunctionality()}/> */}
            <View style={isUpdateFunctionality() ? [styles.buttonWrapper, styles.updateButtonWrapper] : styles.buttonWrapper }>
            {isUpdateFunctionality() ? <Text style={styles.text}>&#10004;</Text>: <Text style={styles.text}>+</Text>}
            </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  btnLogout: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fEFEFE',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    float: 'right',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    marginTop: 95,
    marginRight: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  todoWrapper: {
   paddingTop: 100,
   paddingHorizontal: 20,
   paddingBottom: 110,
  },
  todoList: {
    marginTop: 20,
  },
  titleText: {
    color: '#528AAE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  addTaskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  inputText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: 'darkgrey',
    borderWidth: 1,
  },
  updateButtonWrapper: {
    backgroundColor: '#007f00',
  },
  buttonWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#528AAE',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
  },
  scrollContainer: { 
    marginTop: 30,
  },
  btn: {
    color: '#FFF',
    fontSize: 20,
  }
});