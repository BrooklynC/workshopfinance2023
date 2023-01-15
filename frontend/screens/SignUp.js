import React, {useState} from 'react';
import { StyleSheet, Image, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import InputTextField from '../components/InputTextField';


const SignUp = ({ navigation }) => {
  const [FirstName, setFirstName]=useState("")
  const [LastName, setLastName]=useState("")
  const [Email, setEmail]=useState("")
  const [Password, setPassword]=useState("")

  const addUsers= () => {
    fetch('http://192.168.1.158:5000/users',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              FirstName:FirstName, 
              LastName:LastName, 
              Email:Email, 
              Password:Password})}
        )
        .then(resp=>resp.text())
        .then(resp=>console.log(resp))
        
      
  }

  return (
    <SafeAreaView style={styles.container}>
          <Image style={styles.wfLogo} resizeMode="contain" source={require('./logo_dark.png')}/>
            <View style={{ marginTop: 10}}>
              <Text style={styles.inputTitle}>First Name</Text>
              <TextInput
                //placeholder={this.placeholder}
                //secureTextEntry={this.isSecure}
                style={styles.input}
                value={FirstName}
                onChangeText = {text=>setFirstName(text)} 
                keyboardType="default"
                ></TextInput>
              <View style={{ width: 250, borderBottomWidth: 1, borderBottomColor: "#FFF"}}></View>
            </View>

            <View style={{ marginTop: 1, marginBottom: 1}} >
              <Text style={styles.inputTitle}>Last Name</Text>
              <TextInput
                //placeholder={this.placeholder}
                //secureTextEntry={this.isSecure}
                style={styles.input}
                value={LastName}
                onChangeText = {text=>setLastName(text)} 
                keyboardType="default"
                ></TextInput>
              <View style={{ width: 250, borderBottomWidth: 1, borderBottomColor: "#FFF"}}></View>
            </View>

            <View style={{ marginTop: 1, marginBottom: 1}} >
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
                //placeholder={this.placeholder}
                //secureTextEntry={this.isSecure}
                style={styles.input}
                value={Email}
                onChangeText = {text=>setEmail(text)} 
                keyboardType="default"
                ></TextInput>
              <View style={{ width: 250, borderBottomWidth: 1, borderBottomColor: "#FFF"}}></View>
            </View>

            <View style={{ marginTop: 1, marginBottom: 1}} >
              <Text style={styles.inputTitle}>Enter password</Text>
              <TextInput
                //placeholder={this.placeholder}
                //secureTextEntry={this.isSecure}
                style={styles.input}
                //value={Password}
                //onChangeText = {text=>this.setPassword()} 
                keyboardType="default"
                ></TextInput>
              <View style={{ width: 250, borderBottomWidth: 1, borderBottomColor: "#FFF"}}></View>
            </View>

            <View style={{ marginTop: 1, marginBottom: 1}} >
              <Text style={styles.inputTitle}>Confirm password</Text>
              <TextInput
                //placeholder={this.placeholder}
                //secureTextEntry={this.isSecure}
                style={styles.input}
                value={Password}
                onChangeText = {text=>setPassword(text)} 
                keyboardType="default"
                ></TextInput>
              <View style={{ width: 250, borderBottomWidth: 1, borderBottomColor: "#FFF"}}></View>
            </View>

          <TouchableOpacity style={styles.buttons} onPress={() => addUsers()}>
              <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
}
console.log()
export default SignUp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: "center"
    },
    buttons: {
        fontSize: 16,
        borderRadius: 4, 
        marginTop: 30, 
        paddingVertical: 7,
        paddingHorizontal: 20,
        alignItems: "center", 
        backgroundColor:'#68a0cf',
        justifyContent: "center",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5
    },
    wfLogo: {
      top: 55,
      height: 100,
      width: 350
    },
    logo: {
      height: 18,
      width: 20,
      marginRight: 8
    },
    buttonText: {
        fontFamily: "Avenir Next", 
        color: "#FFF"
    },

    inputTitle: {
      color: "#FFF", 
      fontSize: 14
    },
    input: {
      paddingVertical: 12,
      color: "#FFF", 
      fontSize: 14, 
      fontFamily: "Avenir Next"
    }
});


