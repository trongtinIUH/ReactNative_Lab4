import CheckBox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,StyleSheet } from 'react-native';



// Character sets for password generation
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

export default function App() {
  const [length, setLength] = useState(12); // Default password length
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const getRandomElement = (str) => {
    return str[Math.floor(Math.random() * str.length)];
  };

  const generatePassword = () => {
    let possibleChars = '';
    let generatedPassword = '';

    if (includeLowercase) possibleChars += lowerLetters;
    if (includeUppercase) possibleChars += upperLetters;
    if (includeNumbers) possibleChars += numbers;
    if (includeSymbols) possibleChars += symbols;

    if (possibleChars.length === 0) {
      alert('Please select at least one character set!');
      return;
    }

    for (let i = 0; i < length; i++) {
      generatedPassword += getRandomElement(possibleChars);
    }

    setPassword(generatedPassword);
  };

  return (
    <View style={styles.trangChinh}>
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD {'\n'} GENERATOR</Text>
      <TextInput
        style={styles.passwordDisplay}
        value={password}
        editable={false}
        placeholder="Generated password"
      />
      
      <View style={styles.setting}>
        <Text style={styles.textedit}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(length)}
          onChangeText={(text) => setLength(Number(text))}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.textedit}>Include lower case letters</Text>
        <CheckBox style={styles.textedit1}
          value={includeLowercase}
          onValueChange={(value) => setIncludeLowercase(value)}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.textedit}>Include upcase letters</Text>
        <CheckBox style={styles.textedit1}
          value={includeUppercase}
          onValueChange={(value) => setIncludeUppercase(value)}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.textedit}>Include numbers</Text>
        <CheckBox style={styles.textedit1}
          value={includeNumbers}
          onValueChange={(value) => setIncludeNumbers(value)}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.textedit}>Include special symbols</Text>
        <CheckBox style={styles.textedit1}
          value={includeSymbols}
          onValueChange={(value) => setIncludeSymbols(value)}
          
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>Generate Password</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trangChinh: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6868a8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2a2a6e',
    width: '95%',
    height: '95%',
    margin : 14,
    borderWidth: 5, // Độ dày của viền
    borderColor: '#6868a8', // Màu của viền
    borderRadius: 30, // Tùy chọn: Bo góc viền
    
  },
  title: {
    position: 'relative',
    bottom: 100,
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
    fontWeight : 'bold',
    marginBottom: 20,
  },
  passwordDisplay: {
    position: 'relative',
    bottom: 70,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#131340',
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',
    height: 80,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    position: 'relative',
    bottom: 20,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 2,
    width: 150,
    height: 45,
    textAlign: 'center',
  },
  textedit: {
    position: 'relative',
    bottom: 20,
    color: 'white',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom : 10,
  },
  textedit1: {
    position: 'relative',
    bottom: 20,
    width: 30,
    height: 30,
    marginBottom : 10, 
    backgroundColor: '#fff',
  },
  button: {
    position: 'relative',
    top: 20,
    backgroundColor: '#5c5ca8', // Màu nền của nút
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 60,
  },
  buttonText: {
    color: 'white', // Màu chữ của nút
    fontSize: 30,
    fontWeight: 'bold',
    
  },
});
