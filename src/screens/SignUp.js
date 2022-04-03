import React, { useState } from "react";
import { StyleSheet, Text, View,  Button,TextInput,ImageBackground,Image,TouchableOpacity,Alert} from "react-native";


const SignUp = (props) => {
    const { navigation } = props;
    const [phoneNumber, addPhoneNumber] = useState('+84');
    const [username, setUsername] = useState();

    const onLogin = () => {
      navigation.navigate("SignIn");
    };
    // console.log("as",navigation);

    const onOTP = () => {
      if(phoneNumber && phoneNumber.length > 9){
        navigation.navigate('OtpScreen', {phoneNumber});
        }
        else
        alert("Please enter 10 digit phone number");
    };
    
  //   const GetOTP = () => {
  //     if(phoneNumber && phoneNumber.length > 9){
  //     navigation.navigate('OTP Screen', {phoneNumber});
  //     }
  //     else
  //     alert("Please enter 10 digit phone number");
  // }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover" style={styles.image}>        
        <View style={styles.top}>
          <Text style={styles.fontWhite}>Hey, mừng bạn đến với</Text>
          <Text style={styles.fontWhite2}>Pepsi Tết</Text>  
        </View>

        <View style={styles.middle}>          
          <Text style={styles.fontWhite2}>ĐĂNG KÝ</Text>
          <TextInput 
          keyboardType={'phone-pad'} 
          style={styles.input}   
          placeholder="+84 123456879"  
          placeholderTextColor="black"
          value={phoneNumber}
          onChangeText={(text) => addPhoneNumber(text)}

          />
          
          <TextInput 
          style={styles.input}  
          placeholder="Tên người dùng"  
          placeholderTextColor="black"
          value={username}
          onChangeText={setUsername}
          />           
          {/* checkbox */}
          <View style={styles.section}>
            {/* <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}/>             */}
            <Text style={styles.paragraph}> Tôi đã đọc và đồng ý với <Text style={{color:'yellow',fontWeight:'bold'}}> thể lệ chương trình</Text> Pepsi Tết.</Text>
          </View>
        </View>

        <View style={styles.bottom}>   
          <TouchableOpacity style={styles.touchable}
            onPress={onOTP}
          >
            <ImageBackground
              source={require("../../assets/button1.png")} resizeMode="cover" style={styles.imageButton}>              
              <Text style={styles.title}>Lấy mã OTP</Text>  
            </ImageBackground>
          </TouchableOpacity>  

          <Text style={{textAlign: "center", color: "white",}}>Hoặc</Text>
          
          <TouchableOpacity style={styles.touchable} 
          onPress={onLogin}
          >
            <ImageBackground source={require("../../assets/button2.png")} resizeMode="cover" style={styles.imageButton}>              
              <Text style={styles.title2}>Đăng Nhập</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    
  },
  top: {
    flex: 0.1,
    justifyContent: "center",
    // borderWidth: 3,
    
    color: "white",
  },

  middle: {
    flex: 0.45,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
    color: "white",
  },

  bottom: {
    flex: 0.2,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },

  touchable: {
    alignItems: "center",
    justifyContent: "center",
    
    // borderWidth: 2,
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
  title2: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "darkblue",
  },
  imageButton: {
    justifyContent: "center",
    width: 230,
    height: 50,
    // borderWidth: 5,
  },
  fontWhite: {
    color: "white",
    textAlign: "center",
    fontSize:17,
  },
  fontWhite2: {
    color: "white",
    textAlign: "center",
    fontSize:30,
    fontWeight:'bold',
    marginTop:5,
  },
  // checkbox
  section: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 2,
  },
  paragraph: {
    fontSize: 14,
    // borderWidth: 2,
    color: "white",
    
  },
  checkbox: {
      
   
    marginLeft: 10,
  },
})