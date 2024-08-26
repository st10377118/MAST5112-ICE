import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [answer, setAnswer] = useState('');

  const handleDivision = () => {
    if (number1 !== '' && number2 !== '') {
      if (Number(number2) !== 0) {
        let result = Number(number1) / Number(number2);
        setAnswer(result.toString());
      } else {
        setAnswer('Division by zero is not allowed!');
      }
    } else {
      setAnswer('Input both digits');
    }
  };

  const handleMultiplication = () => {
    let ans = Number(number1) * Number(number2);
    setAnswer(ans.toString());
  };

  const handleSubtraction = () => {
    if (number1 !== '' && number2 !== '') {
      let ans = Number(number1) - Number(number2);
      setAnswer(ans.toString());
    } else {
      setAnswer('Input both digits');
    }
  };

  const handleAddition = () => {
    let ans = Number(number1) + Number(number2);
    setAnswer(ans.toString());
  };

   const handleSquareRoot = () => {
    if (number1 !== '') {
      let ans = Math.sqrt(Number(number1));
      setAnswer(ans.toString());
    } else {
      setAnswer('Input a number in the first field');
    }
  };

  const handlePowerOf = () => {
    if (number1 !== '' && number2 !== '') {
      let ans = Math.pow(Number(number1), Number(number2));
      setAnswer(ans.toString());
    } else {
      setAnswer('Input both digits');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CALCULATOR</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Input number"
          value={number1}
          onChangeText={(number1) => setNumber1(number1)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Input number"
          value={number2}
          onChangeText={(number2) => setNumber2(number2)}
        />
      </View>

      <View style={styles.operatorContainer}>
        <TouchableOpacity style={styles.divisionButton} onPress={handleDivision}>
          <Text style={styles.divisionButtonText}>÷</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.multiplicationButton} onPress={handleMultiplication}>
          <Text style={styles.multiplicationButtonText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={handleAddition}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.subtractionButton} onPress={handleSubtraction}>
          <Text style={styles.subtractionButtonText}>-</Text>
        </TouchableOpacity>
    
      <TouchableOpacity style={styles.squareRootButton} onPress={handleSquareRoot}>
          <Text style={styles.squareRootButtonText}>√</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.powerButton} onPress={handlePowerOf}>
          <Text style={styles.powerButtonText}>x²</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>{answer}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d5bdaf',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  operatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  divisionButton: {
    backgroundColor: '#8b8c89',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  multiplicationButton: {
    backgroundColor: '#8b8c89',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#8b8c89',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  subtractionButton: {
    backgroundColor: '#8b8c89',
     marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  divisionButtonText: {
    color: 'black',
    fontSize: 18,
  },
  multiplicationButtonText: {
    color: 'black',
    fontSize: 18,
  },
  addButtonText: {
    color: 'black',
    fontSize: 18,
  },
  subtractionButtonText: {
    color: 'black',
    fontSize: 18,
  },
  squareRootButtonText: {
    color: 'black',
    fontSize: 18,
  },
  powerButtonText: {
    color: 'black',
    fontSize: 18,
  },
  squareRootButton: {
    backgroundColor: '#8b8c89',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  powerButton: {
    backgroundColor: '#8b8c89',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  answerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
