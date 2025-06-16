import { View, SafeAreaView, ImageBackground, StyleSheet, Image, Button, Text  } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    <SafeAreaView style={{height: '100%' , flexDirection: 'column'}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
          <Image source={{
            uri: 'https://picsum.photos/200/300',
            height: 100,
            width: 100,
            
          }} style={{position:"absolute", 
            top: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}/>
          <Text style={{position:"absolute", 
            top: 210,
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>Sell what you dont need</Text>
        <View style={{
          backgroundColor: 'tomato',
          height: 70,
          width: '100%'
        }} />
        <Button title="login" style={{
          backgroundColor: 'cyan',
          height: 70,
          width: '100%'
        }} />
    </SafeAreaView>
    
  );
}
