import React ,{useState}from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button } from 'react-native';

export default function AddTodo({addTodo}){

    const[text,SetText]=useState('')
    const changeHandler = (val)=>{
        SetText(val)

    }


    return(

        <View>
            <TextInput
            style={styles.input}
            placeholder='New Todo ...'
            onChangeText={changeHandler}

            
            />
            <Button title='Submit' onPress={()=>{
                
                addTodo(text)}}/>

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

        
    }
    
    
  
  
  });