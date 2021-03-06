import {useState,} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity, tokenResponse, } from "react-native";

  // using fetch do a POST to https://dev.stedi.me/twofactorlogin/(insert Phone Number Here)
  const sendText = async (phoneNumber) => {
  await fetch ('https://dev.stedi.me/twofactorlogin/'+phoneNumber, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text'
    }
  });
  console.log("PhoneNumber: ",phoneNumber);
};

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

const getToken = async ({phoneNumber, oneTimePassword, setUserLoggedIn}) => {
  const tokenResponse = await fetch('https://dev.stedi.me/twofactorlogin',{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'content-type':'application/json'
    }
  });
};

//const responseCode = tokenResponse.status;
//console.log("Response Status Code", responseCode);
  //if(responseCode==200){
    //setUserLoggedIn(true);

//const tokenResponseString = await tokenResponse.text;
//}

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Email Address"
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          sendText(phoneNumber);
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="801-555-1212"
        keyboardType="numeric"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
         //getToken (phoneNumber, oneTimePassword, {setUserLoggedInprops.setUserLoggedIn}) 
         >
          
        <Text>Send Text</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default Login;