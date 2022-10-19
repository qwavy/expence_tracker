import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({navigation}) => {

    const [name,setName] = useState('')

    const getData = async () => {
        try{
            AsyncStorage.getItem('UserName')
            .then(value => {
              if( value !== null){
                navigation.navigate('Home')
              }
            })
        } catch(error){
          console.log(error)
        }
      }

      useEffect(() => {
        getData()
      }, [])

    const login = async () => {
        // navigation.navigate('Home')
        if(name == ''){
            alert('Введите что то')
        }else{
            try{
                await AsyncStorage.setItem('UserName', name)
                navigation.navigate('Home')
            } catch(error){
                console.log(error)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                Login
            </Text>
            <TextInput onChangeText={value => setName(value)} style={styles.inp}/>
            <Button title='click' onPress={login}/>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inp:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})