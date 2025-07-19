import { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
function TextInputComponent() {
    const [value, setValue] = useState('')
    console.log(value)
  return (
    <View style={styles.container}>
      <TextInput value={value} placeholder='Type Something here' style={styles.input} onChangeText={setValue} />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
      },
      input: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
})

export default TextInputComponent