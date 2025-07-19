import { StyleSheet, Text, View } from 'react-native'
import Basic from '../components/Basic'
const index = () => {
  return (
    <View style={styles.container}>
      <Basic />
    </View>
    
  )
}
export default index
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
})