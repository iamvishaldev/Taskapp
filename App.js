import React,{useState} from 'react';
import { StyleSheet, Text, View ,Platform,TouchableOpacity} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import Task from './components/Task'



export default function App() {

  const [task,setTask] = useState("")

  const [taskItem,setTaskItem] = useState([])

  const handleAddText = ()=>{
    setTaskItem([...taskItem,task])
    setTask("")
  }

  const deleteTask=(index)=>{
    const itemCopy = [...taskItem]
    itemCopy.splice(index,1)
    setTaskItem(itemCopy)
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput style={styles.textStyleInput} value={task} onChangeText={(text)=>setTask(text)} label="Enter some Task" />
      <TouchableOpacity onPress={()=>handleAddText()}>
      <View style={styles.buttonWrapper}>
        <Button style={styles.styleButton} mode="contained">Add</Button>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.items}>
        {
          taskItem.map((item,index)=>{
            return(
              <TouchableOpacity key={index} onPress={(index)=>deleteTask(index)}>
                <Task  text={item} />
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Platform.OS === "android" ? 30 : 0
  },
  taskWrapper:{
    marginTop:10,
    paddingHorizontal:10,
    alignItems:"center",
  },
  sectionTitle:{
    fontSize:30,
    fontWeight:'bold',
  },
  textInputWrapper:{
    margin:10,
    flexDirection:"row",
  },
  textStyleInput:{
    width:'80%',
    height:60,
  },
  styleButton:{
    width:60,
    height:60,
    alignItems:"center",
    justifyContent:"center"
}});
