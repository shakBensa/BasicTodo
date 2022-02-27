import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import React ,{useState,Alert}from 'react'
import Tasks from './components/Tasks';
import { Keyboard } from 'react-native';

export default function App() {
const [task,setTask] = useState();
const [taskItems,setTaskItems]= useState([]);
const handleAddTask = () => {
  if (!task) {
    console.log('no input');
  }
  else{
 Keyboard.dismiss();
 setTaskItems([...taskItems,task]);
 setTask(null);
  }
}
const completeTask = (index) => {
  let itemsCopy=[...taskItems];
  itemsCopy.splice(index,1);
  setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View>
          <Text style={styles.title}>Tasks</Text>

          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Tasks  text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write A Task'}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  items: {
    marginTop: 30
  },
  writeWrapper: {
    position: 'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor: '#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    
  },
  addWrapper:{
    width:50,
    height:50,
    backgroundColor: '#fff',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth:1,
    marginBottom:10,

  },
  addText:{

  },

});
