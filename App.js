import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [NIS, setSheqel] = useState();
  const [USD, setDollar] = useState(3.074);
  const [EUR, setEuro] = useState(3.49);
  const [RUB, setRuble] = useState(23.58);
  const[result, setResult] = useState(0);

  const CurExchCalc = () => {

    const CurEx = USD
    let result = NIS * USD;
          result = result.toFixed(2);
    setResult(result);
  }

  const CurExchCalc1 = () => {
    const CurEx = EUR
    let result = EUR * NIS;
          result = result.toFixed(2);
    setResult(result);

   
  }

  const CurExchCalc2 = () => {

    const CurEx = RUB
    let result = RUB * NIS;
          result = result.toFixed(2);
    setResult(result);

  }


  return (
    <View style={styles.container}>
      
      
      <TextInput   
        style={styles.inputStyle} 
        value={NIS}
        onChangeText={text => setSheqel(text)}
        // style={styles.inputStyle}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold'}} >Enter sum in NIS</Text>

      <Text style ={{fontSize: 40, fontWeight: 'bold',marginVertical:20}}>{result}</Text>
      
      

      <TouchableOpacity  onPress={ CurExchCalc}  style= {styles.TouchableOpacity}>
         <Text style={{fontSize: 30, fontWeight: 'bold'}}>$ USD</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={CurExchCalc1}  style= {styles.TouchableOpacity}>
         <Text style={{fontSize: 30, fontWeight: 'bold'}}> € EUR</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={CurExchCalc2}  style= {styles.TouchableOpacity}>
         <Text style={{fontSize: 30, fontWeight: 'bold'}}>₽ RUB</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:
  {
    backgroundColor: '#ffffff',
    width: '55%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:14,
    marginTop: 6,
    fontSize:16,
    textAlign: 'center'
  },
  container: 
  {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  TouchableOpacity:
  {
    backgroundColor: '#faaf00',
    width: '55%',
    height: '15%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical:35,
    marginTop: 6,
    fontSize:24,
    textAlign: 'center'

  }


});
