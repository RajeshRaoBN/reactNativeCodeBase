import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert  } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  }
  const containerStyle = { backgroundColor: "orange"}
  return (
    <View style={[styles.container, containerStyle]}>
      <Text onPress={handlePress}>Hello from React Native!</Text>
      <TouchableOpacity onPress={() => console.log("Image pressed")}>
        <Image 
          source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300" }} />
      </TouchableOpacity>
      <Button 
      color="black" 
      title='Click Me' 
      onPress={() => Alert.alert("Button Tapped", "My message", [
        { text: "Yes", onPress: () => console.log("Yes")},
        { text: "No", onPress: () => console.log("No")}
      ])} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
