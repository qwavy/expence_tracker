// 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react'

export default function App() {
  const [value, setValue] = useState(null)
  const [budget, setBudget] = useState(2000)
  const [all, setAll] = useState(0)
  const [remain, setRemain] = useState(0)

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const [array, setArray] = useState([{ id: 1, expence: 'buy book', expence_price: 20 },])
  const [search, setSearch] = useState('')


  // const [filtered,setFiltered] = useState([])

  const handlePress = () => {
    const obj = {
      id: array.length + 1,
      expence: name,
      expence_price: amount
    }
    setArray(current => [...current, obj])
  }
  const editBudget = () => {
    setBudget(budget)
  }
  const handleRemove = (id) => {
    const newArr = array.filter((item) => item.id !== id)
    setArray(newArr)
  }

  useEffect(() => {
    if (search === '') {
      return array
    }
    // const res = array.filter(word => word => 'buy')
    // console.log(search)
    // const res = array.filter(item => {
    //   return item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // })

    // setArray(res)
  }, [search])
  useEffect(() => {
    const newTotal = array.reduce((accumulator, current) => accumulator += current.expence_price * 1, 0)
    setAll(newTotal)
  }, [array])
  useEffect(() => {
    const newRemain = budget - all
    setRemain(newRemain)
  }, [all, budget])
  // // const handleClick = () => {
  // //   if (value == null || value == '') {
  // //     alert('Введите что то')
  // //   } else {
  // //     alert('Were gonna build a wall Wr gnn bld  wll! I have never seen a thin person drinking Diet Coke. hv nvr sn  thn prsn drnkng Dt Ck')
  // //   }

  // //   alert(( typeof newTotal))
  // //   for(let i = 0; i < newTotal.length;i++){
  // //     alert(newTotal[i])
  // //     alert(value)
  // //   const array = value.split('')
  //   // const array = value.split(',').map(function(item) {
  //   //   return parseInt(item, 10);
  //   // });

  //   const max = (Math.max(...array))
  //   const filtered = array.filter(q => q < max)
  //   // alert(Math.max(filtered))
  //   // alert(filtered)
  //   alert(array)
  //   // alert(typeof array[0])
  //   // }
  //   // alert('domoi')
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>budget</Text>
      <Text>full budget - ${budget}</Text>
      <TextInput placeholder="change budget" style={styles.inp} onChangeText={setBudget} />
      <Button title='change' />
      <Text style={styles.remain}>remain - ${remain}</Text>
      <Text style={styles.spent}>spent - ${all}</Text>

      <Text style={styles.header}>Expence Tracker</Text>
      {/* <StatusBar style="auto" /> */}
      <TextInput value={name} style={styles.inp} placeholder="name" onChangeText={setName} />
      <TextInput value={amount} style={styles.inp} placeholder="amount" onChangeText={setAmount} />
      <Button title="add" style={{ fontSize: 20, color: 'green' }} styleDisabled={{ color: 'red' }} onPress={handlePress} />

      <Text style={styles.header}>Expenses</Text>
      <TextInput value={search} style={styles.inp} placeholder="search" onChangeText={setSearch} />
      <Text>
        {search}
      </Text>
      {array.map((data) => {
        return (
          <View>
            <Text key={data.id}>{data.expence} - $ {data.expence_price}</Text><Button title='remove' style={styles.remove} onPress={() => handleRemove(data.id)} />
          </View>
        )
      })}




    </View>
    // <View style={styles.container}>
    //   {/* <TextInput style={styles.inp} onChangeText={setValue} />
    //   <Button onPress={handleClick} title="click"/> */}
    //   <Text>a</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp: {
    height: 40,
    width: 200,
    margin: 1,
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    margin: 20
  },
  remain: {
    marginTop: 50
  },
  remove: {
    height: 40,
    width: 40
  }
});
