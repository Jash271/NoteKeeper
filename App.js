import React ,{useState}from 'react';
import { StyleSheet, Text, View,FlatList ,ScrollView,TouchableWithoutFeedback,Alert,Keyboard,TouchableOpacity} from 'react-native';
import Header from './components/header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import call from 'react-native-phone-call'
export default function App() {
  const[count,setCount]=useState(0)
  const[Todos,SetTodos]=useState([

    
    



  ])

  const makeCall = (number)=>{
    const args = {
      number: number, // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
  }
 call(args).catch(console.error)
}
  


  const addTodo=(text)=>{
    if(text.length>3){
    setCount(count+1)
    SetTodos((prevTodo)=>{
      
      return[
        

        {text:text,key: count.toString() },
        ...prevTodo
      ]
    }
    )

  }
  else{
    Alert.alert('Invalid','Characters Should be more than 3',[

      {text:'UnderStood',onPress:()=>{
        console.log('AlertClosed')
      }}
    ])
  }
}

  const pressHandler=(key)=>{
    SetTodos((prevTodo)=>{
      return prevTodo.filter(todo=>todo.key!=key)
    }
    )
  };
  return (
    

  <TouchableWithoutFeedback onPress = { ()=>{
     Keyboard.dismiss()
   }}>

        <View style={styles.container}>
          {/* Header */}
          <Header/>

        <View style={styles.content}>
          {/* Form */}
          <AddTodo addTodo={addTodo}/>
        
        <View style={styles.list}>
          {/* List */}
          
          <FlatList
          
          data={Todos}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>(

            <TodoItem item={item}  pressHandler={pressHandler} makeCall={makeCall} />


          )}

          
          
          />
          

        </View>

        </View>


        </View>
  
  </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  
  
  content: {
    flex:1,
   
  },
  list: {
    flex:1,
    
  },


});
