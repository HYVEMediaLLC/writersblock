import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default function Compose() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>PROMPT: a man walks into a gas station</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Start your block"
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Submit Block pressed')}>
        <Text style={styles.submitButtonText}>Submit Block</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 15,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    height: '30%',
    marginTop: 15,
    textAlignVertical: 'top',
  },
});
