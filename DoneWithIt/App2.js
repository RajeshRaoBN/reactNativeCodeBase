import { View, SafeAreaView  } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation())
  return (
    <SafeAreaView style={{height: '100%' , flexDirection: 'column'}}>
        <View style={{
          backgroundColor: 'dodgerblue',
          flex: 1,
        }} />
        <View style={{
          backgroundColor: 'gold',
          flex: 1,
          width: 100
        }} />
        <View style={{
          backgroundColor: 'tomato',
          flex: 1,
        }} />
        <View style={{
          backgroundColor: 'grey',
          flex: 1,
        }} />
        <View style={{
          backgroundColor: 'greenyellow',
          flex: 1,
        }} />
    </SafeAreaView>
    
  );
}
