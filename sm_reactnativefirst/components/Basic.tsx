import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import TextInputComponent from "./TextInput";

export default function Basic() {
  const [count, setCount] = useState<number>(0)
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      {/* View Component */}
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
        </View>
        {/* View Component */}
        {/* Text Component */}
      <View>
        <Image style={styles.image} source={{uri:'https://picsum.photos/seed/picsum/200/300'}} />
          {/* Image Component */}
          <Image style={styles.image} source={require('../assets/images/chess.png')}/>
          {/* Image Component */}
        
        <Text style={styles.myFirstText}> My first react native course</Text>
        <Text style={styles.nestedText}>{"\n"}Text components can be <Text style={styles.bold}>nested</Text></Text>
      </View>
      <Text>Hello from React Native Frontend</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)}/>
      <Text>Count is {count}</Text>
      <TextInputComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  myFirstText: {
    fontSize: 30,
  },
  nestedText: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    margin: 10,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
})
