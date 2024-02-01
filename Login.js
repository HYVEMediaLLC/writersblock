import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default function Login({ navigation }) {

  const handleLogin = () => {
    navigation.navigate('MainTabs')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        WRITERS BLOCK
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Username'
          keyboardType='default'
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, 
  },
  button: {
    width: '48%',
    height: 45,
    backgroundColor: '#d3d3d3',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
