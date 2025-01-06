import { Text, View, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Homepage!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomePage;
