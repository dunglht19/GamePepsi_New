import React, { useState,useRef,useEffect } from "react";
import { 
  StyleSheet, 
  Text, View,  
  Button,TextInput,
  ImageBackground,Image,
  TouchableOpacity} from "react-native";
import auth from "@react-native-firebase/auth";

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OtpScreen = (props) => {
  // {route:{params:{phoneNumber}}}=props;
  const { navigation,route } = props;
  const {phoneNumber}=route.params
  // const phones=route.params.phoneNumber
  // console.log("as",navigation,phoneNumber);

  const [confirm, setConfirm] = useState(null);
  // const [otpArray, setOtpArray] = useState(['', '', '', '']);
  // const [submittingOtp, setSubmittingOtp] = useState(true);
  // const [errorMessage, setErrorMessage] = useState('');

  const [pin1, setPin1] = useState("")
  const [pin2, setPin2] = useState("")
  const [pin3, setPin3] = useState("")
  const [pin4, setPin4] = useState("")
  const [pin5, setPin5] = useState("")
  const [pin6, setPin6] = useState("")

  const [code, setCode] = useState('');

  // console.log("code nè",code);

  const pin1Ref=useRef(null);
  const pin2Ref=useRef(null);
  const pin3Ref=useRef(null);
  const pin4Ref=useRef(null);
  const pin5Ref=useRef(null);
  const pin6Ref=useRef(null);

  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  // async function signInWithPhoneNumber() {
  //   try{
  // console.log(phoneNumber);

  //      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //      setConfirm(confirmation);
  //    }catch(e){
  //     alert("sai rồi",e);
  //   }
  //  }
  async function signInWithPhoneNumber() {
    console.log(phoneNumber);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log("conf",confirmation)
    setConfirm(confirmation);
  }

  // async function confCode(){
  //   try{
  //     const code =otpArray.join("");
  //     const response = await confirm.comfirm(code);
  //     // alert(JSON.stringify(response))
  //     if (response)
  //     {
  //       navigation.navigate("SignIn");
  //     }
  //   }
  //   catch (e){
  //     alert(JSON.stringify(e))
  //   }

  // }
  async function confirmCode() {
    console.log("pin",pin1,pin2,pin3,pin4,pin5,pin6);
    const codePin=`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`
    console.log(typeof codePin)
    try {
      // const code = otpArray.join("");
      const reponse= await confirm.confirm(codePin);
      // const reponse= await confirm.confirm(code);

      if (reponse)
      {
        navigation.navigate('PageMain')
      }
    } catch (error) {
      // alert(JSON.stringify(error));
      // console.log("dsadas",error)
    }
    
  }
  
  

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/bg.png")} resizeMode="cover" style={styles.image}>        
        <View style={styles.top}>
          <Text style={styles.fontWhite}>Hey, mừng bạn đến với</Text>
          <Text style={styles.fontWhite2}>Pepsi Tết</Text>  
        </View>

        <View style={styles.middle}>          
          <Text style={styles.fontWhite3}>Xác minh OTP</Text>
          <Text style={styles.fontWhite4}>Nhập mã OTP vừa nhận được gửi về điện thoại của bạn</Text>
            <View style={styles.otpContainer}>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin1Ref}
                value={pin1}
                onChangeText={(pin1)=>{
                  setPin1(pin1);
                  if(pin1 !== "")
                  {
                    pin2Ref.current.focus();
                  }
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin2Ref}
                onChangeText={(pin2)=>{
                  setPin2(pin2);
                  if(pin2 !== "")
                  {
                    pin3Ref.current.focus();
                  }
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin3Ref}
                onChangeText={(pin3)=>{
                  setPin3(pin3);
                  if(pin3 !== "")
                  {
                    pin4Ref.current.focus();
                  }
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin4Ref}
                onChangeText={(pin4)=>{
                  setPin4(pin4);
                  if(pin4 !== "")
                  {
                    pin5Ref.current.focus();
                  }                  
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin5Ref}
                onChangeText={(pin5)=>{
                  setPin5(pin5);
                  if(pin5 !== "")
                  {
                    pin6Ref.current.focus();
                  }
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
              <View style={styles.otpView}>
                <TextInput 
                ref={pin6Ref}
                onChangeText={(pin6)=>{
                  setPin6(pin6);                  
                }}                
                keyboardType="numeric"
                // placeholder="Phone Number you want to change."
                maxLength={1}
                style={styles.otpText}
                />
              </View>
            </View>
              
        </View>
        {/* <TextInput style={{backgroundColor:'white'}} value={code} onChangeText={setCode} 
          
        /> */}

        <View style={styles.bottom}>   
        <TouchableOpacity style={styles.touchable}
            // onPress={onOTP}
            onPress={() => confirmCode()}
          >
            <ImageBackground
              source={require("../../assets/button1.png")} resizeMode="cover" style={styles.imageButton}>              
              <Text style={styles.title}>Xác nhận</Text>  
            </ImageBackground>
          </TouchableOpacity>
          <Text style={styles.fontWhite5}>Bạn chưa nhận được mã? <Text style={{color:'yellow'}}>Gửi lại mã</Text> </Text>

        </View>
      </ImageBackground>
    </View>
  )
}

export default OtpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    
  },
  top: {
    // flex: 0.1,
    // justifyContent: "center",
    // borderWidth: 3,
    marginTop:windowWidth/3,
    marginBottom:windowWidth/3.5,
    color: "white",
  },

  middle: {
    // flex: 0.45,
    justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 3,
    // textAlign: "center",
    // borderWidth: 3,
    marginBottom:windowWidth/10,

    // color: "white",
  },

  bottom: {
    // flex: 0.2,
    // justifyContent: "center",
    // borderWidth: 3,
    // textAlign: "center",
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
  fontWhite3: {
    color: "white",
    textAlign: "center",
    fontSize:20,
    fontWeight:'bold',

  },
  fontWhite4: {
    color: "white",
    textAlign: "center",
    fontSize:13,
    // fontWeight:'bold',
    marginTop:5,
    marginBottom:10,
  },
  fontWhite5:{
    color: "white",
    textAlign: "center",
    fontSize:13,
    // fontWeight:'bold',
    marginTop:5,
    // marginBottom:10,
  },
  otpContainer:{
    flexDirection:'row',
    // borderWidth:1,
    // alignItems:'center',
    justifyContent:'space-around',
  },
  otpView:{
    // borderWidth:1,
    
    width:50,
    // height:40,
    // borderColor:'red',
    // marginHorizontal:10,
    // marginVertical:10,
    borderRadius:10,
    backgroundColor:'#fff',
    // textAlign:'center'
    // alignItems:'center',
    // justifyContent:'center',
  },
  otpText:{
    fontSize:20,
    textAlign:'center',
  },
  touchable: {
    alignItems: "center",
    justifyContent: "center",
    
    // borderWidth: 2,
  },
  imageButton: {
    justifyContent: "center",
    width: 230,
    height: 50,
    // borderWidth: 5,
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
})