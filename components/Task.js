import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper'


const Task = (props)=>{
    const [checked,setChecked] = useState(true)
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Checkbox style={styles.itemCheckBox}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                    setChecked(!checked);
                    }}
                />
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
item:{
    backgroundColor:'#E8EAED',
    padding:8,
    borderRadius:10,
    marginTop:5,
    flexDirection:"row",
    alignItems:"center",
     justifyContent:"space-between"
},
itemLeft:{
    flexDirection:"row",
    alignItems:"center",
    flexWrap:'wrap',

},
circular:{
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5
}
})

export default Task