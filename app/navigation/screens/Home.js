import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
  const [balance, setBalance] = useState(2000)
  // const [check,setCheck] = useState(0)
  const [number, setNumber] = useState(0)
  const [number1, setNumber1] = useState(7)
  const [number2, setNumber2] = useState(7)
  const [number3, setNumber3] = useState(7)

  const [name, setName] = useState('')





  useEffect(() => {



    if (number == number1 && number == number2 && number == number3) {
      alert('you won 100000000$')
      setBalance(balance + 100000000)
    }
    else if (number == number1 && number == number2) {
      alert('you won 1000$')
      setBalance(balance + 1000)
    } else if (number == number3 && number == number2) {
      alert('you won 1000$')
      setBalance(balance + 1000)
    } else if (number == number1 && number == number3) {
      alert('you won 1000$')
      setBalance(balance + 1000)
    }
    else if (number1 == number || number == number2 || number == number3) {
      alert('you won 200$')
      setBalance(balance + 200)
    }
    else if (number !== number1 && number !== number2 && number !== number3) {
      setBalance(balance - 100)
    }
  }, [number1, number2, number3])
  const onLuck = () => {
    // setCheck(check + 1)

    setNumber3(Math.floor(Math.random() * 8))


    setNumber2(Math.floor(Math.random() * 8))


    setNumber1(Math.floor(Math.random() * 8))


  }
  const handleChange = (event) => {
    setNumber(event.target.value)
  }
  return (
    <View style={styles.container}>
      <Text>Your balance: {balance}$</Text>
      <Text>Hello {name}</Text>
      <TextInput onChange={e => setNumber(e.target.value)} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={number} />
      <Text>1st number: {number1}</Text>
      <Text>2nd number: {number2}</Text>
      <Text>3rd number: {number3}</Text>
      <Button title='click' onPress={onLuck} />
    </View>
  );
}

// export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});