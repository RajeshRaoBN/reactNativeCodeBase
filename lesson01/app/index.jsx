import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import icedCoffeeImg from "@/assets/images/iced-coffee.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedCoffeeImg} 
      resizeMode='cover' 
      style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        
        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact us</Text>
        </Pressable>
        </Link>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})