import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignUp from './SignUp';
import SignIn from './SignIn';
// import PageMain from './PageMain';


const HomeScreen = (props) => {
    const { navigation } = props;

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        // <SignUp navigation={navigation}/>
        <SignIn navigation={navigation}/>
        
        
      );
    }
  
    return (
        // <SignIn navigation={navigation}/>
        <SignUp navigation={navigation}/>
        
        // <PageMain navigation={navigation}/>

      
    );
}

export default HomeScreen

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
        flex: 0.4,
        justifyContent: "center",
        // borderWidth: 3,
        textAlign: "center",
        color: "white",
      },
    
      bottom: {
        flex: 0.35,
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
        // borderWidth: 5,
      },
      title: {
        fontSize: 17,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
      },
      intitle: {
        fontSize: 9,
        textAlign: "center",
        color: "lightgray",
        marginRight: 10,
        marginTop: 4,
      },
      title2: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 8,
        color: "#0063A7",
        fontWeight: "bold",
      },
      imageButton: {
        justifyContent: "center",
        width: 190,
        height: 45,
        // borderWidth: 5,
      },
      imageButton1: {
        justifyContent: "center",
        width: 190,
        height: 56,
        // borderWidth: 5,
      },
      fontWhite: {
        color: "white",
      },
      img: {
        width: 208,
        height: 225,
        // marginLeft: 70,
        marginLeft: 90,
        // marginTop:50,
        
      },
    
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "#FBC926",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        // borderWidth: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 10,
        padding: 10,
        width: 110,
        elevation: 2,
        marginBottom: 10,
        backgroundColor: "#D02027",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        // borderWidth:1,
        width: 181,
        color: "#0063A7",
        fontSize: 17,
        textAlign: "center",
      },
    
      modalText2: {
        marginBottom: 15,
        // borderWidth:1,
        width: 195,
        color: "#D02027",
        fontSize: 17,
        textAlign: "center",
        fontWeight: "bold",
      },
      title_Modal: {
        fontSize: 17,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
      },
      intitle_Modal: {
        fontSize: 11,
        textAlign: "center",
        color: "lightgray",
      },
      centeredView2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView2: {
        margin: 20,
        backgroundColor: "#FBC926",
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        // borderWidth: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})