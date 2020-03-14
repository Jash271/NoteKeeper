import React ,{useState}from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,makeCall } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item,pressHandler,makeCall}){
    return(
    <TouchableOpacity >
        <View style={styles.Todo}>
            <MaterialIcons  name='delete' size={18} onPress={()=>{pressHandler(item.key)}}/>
        <Text style={styles.TodoText}>
            {item.text}
        </Text>
        </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    Todo:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection:'row',
    },
    TodoText:{
        marginLeft:15,

        paddingLeft:10,
    }
    
});