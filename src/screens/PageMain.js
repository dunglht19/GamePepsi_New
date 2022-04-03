import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
// import { Icon } from "@iconify/react";
import Entypo from 'react-native-vector-icons/Entypo';
import { Icon } from '@iconify/react';
import auth from "@react-native-firebase/auth";



const PageMain = (props) => {
    const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
//   const onSignOut = () => {
//     navigation.navigate("SignIn");
//   };
  const onSignOut= async ()=>{
    const logouts= await auth().signOut().then(() => {
      // Sign-out successful.
      navigation.navigate("SignIn")
    }).catch((error) => {
      // An error happened.
      console.log("error",error)

    });
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg2.png')}
        resizeMode='cover'
        style={styles.image}
      >
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Bạn có chắc muốn{' '}
                <Text style={{ fontWeight: 'bold' }}>đăng xuất</Text> không?
              </Text>

              <Pressable style={[styles.button]} 
                onPress={onSignOut}
              >
                <Text style={styles.textStyle}>Đăng xuất</Text>
              </Pressable>

              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <ImageBackground
                  source={require('../../assets/white_button1.png')}
                  resizeMode='cover'
                  style={{ justifyContent: 'center', width: 130, height: 50 }}
                >
                  <Text
                    style={{
                      color: '#0063A7',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: 7
                    }}
                  >
                    Hủy
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* <Feather
          style={{ position: 'absolute', top: 30, right: 30 }}
          name='log-out'
          size={21}
          color='white'
          onPress={() => setModalVisible(true)}
        /> */}

        {/* <TouchableOpacity 
        onPress={alert("sads")}
        >
        <Image
            style={{ position: 'absolute', top: -50, right: 30 }}
            source={require('../../assets/logout.png')}
          />

        </TouchableOpacity> */}
        <TouchableOpacity 
            onPress={() => setModalVisible(true)}
        >
            <Image
            style={{ position: 'absolute', top:-35, right: 30 }}
            source={require('../../assets/logout.png')}
          />
          </TouchableOpacity>
        <View style={styles.top}>

          <Image
            style={styles.img}
            source={require('../../assets/daulan.png')}
          />
        </View>

        <View style={styles.bottom}>
          <Text
            style={{
              color: '#FFDD00',
              fontSize: 17,
              fontWeight: 'bold',
              marginBottom: 5,
              textAlign: 'center'
            }}
          >
            Hướng Dẫn
          </Text>

          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisible2(!modalVisible2)
            }}
          >
            <View style={styles.centeredView2}>
              <View style={styles.modalView2}>
                {/* <AntDesign
                  name='closecircle'
                  size={24}
                  color='#D02027'
                  style={{ position: 'relative', left: 100, bottom: 5 }}
                  onPress={() => setModalVisible2(!modalVisible2)}
                /> */}
                <TouchableOpacity 
                 onPress={() => setModalVisible2(!modalVisible2)}

                >
                <Image
                    style={{ position: 'relative', left:0, bottom: 10,}}
                    source={require('../../assets/close.png')}
                />

                </TouchableOpacity>
                <Text style={styles.modalText2}>
                  BẠN CÓ MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?
                </Text>

                {/* <TouchableOpacity >                  
                  <ImageBackground
                    source={require("../../assets/red_button1.png")}
                    resizeMode="cover"
                    style={{ justifyContent: "center", width: 200, height: 60 }}
                    onPress={onSignIn}
                  >
                    <Text style={styles.title_Modal}>Lượt chơi miễn phí</Text>
                    <Text style={styles.intitle_Modal}>
                      Bạn còn <Text style={{ color: "yellow" }}>0</Text> lượt
                      chơi
                    </Text>
                  </ImageBackground>
                </TouchableOpacity> */}

                <Pressable
                  style={{
                    justifyContent: 'center',
                    width: 190,
                    height: 50,
                    backgroundColor: '#D02027',
                    borderRadius: 10,
                    marginBottom: 10
                  }}
                //   onPress={onGamee}
                >
                  <Text style={styles.title_Modal}>Lượt chơi miễn phí</Text>
                  <Text style={styles.intitle_Modal}>
                    Bạn còn <Text style={{ color: 'yellow' }}>0</Text> lượt chơi
                  </Text>
                </Pressable>

                <Pressable
                  style={{
                    justifyContent: 'center',
                    width: 190,
                    height: 50,
                    backgroundColor: '#D02027',
                    borderRadius: 10
                  }}
                >
                  <Text style={styles.title_Modal}>Lượt chơi quy đổi</Text>
                  <Text style={styles.intitle_Modal}>
                    Bạn còn <Text style={{ color: 'yellow' }}>0</Text> lượt chơi
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.touchable}
            onPress={() => setModalVisible2(true)}
          >
            <ImageBackground
              source={require('../../assets/button3.png')}
              resizeMode='cover'
              style={styles.imageButton1}
            >
              <Text style={styles.title}>Chơi ngay</Text>
              <Text style={styles.intitle}>
                Bạn có tổng cộng <Text style={{ color: 'yellow' }}>0</Text> lượt
                chơi
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <ImageBackground
              source={require('../../assets/button2.png')}
              resizeMode='cover'
              style={styles.imageButton}
            >
              <Text style={styles.title2}>Quét mã</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <ImageBackground
              source={require('../../assets/button2.png')}
              resizeMode='cover'
              style={styles.imageButton}
            >
              <Text style={styles.title2}>Bộ sưu tập</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <ImageBackground
              source={require('../../assets/button2.png')}
              resizeMode='cover'
              style={styles.imageButton}
            >
              <Text style={styles.title2}>Chi tiết quà tặng</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PageMain

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
      },
      image: {
        flex: 1,
        justifyContent: 'center'
      },
    
      top: {
        flex: 0.4,
        justifyContent: 'center',
        // borderWidth: 3,
        textAlign: 'center',
        color: 'white'
      },
    
      bottom: {
        flex: 0.35,
        justifyContent: 'center',
        // borderWidth: 3,
        textAlign: 'center'
      },
    
      input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white'
      },
    
      touchable: {
        alignItems: 'center',
        justifyContent: 'center'
        // borderWidth: 5,
      },
      title: {
        fontSize: 17,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
      },
      intitle: {
        fontSize: 9,
        textAlign: 'center',
        color: 'lightgray',
        marginRight: 10,
        marginTop: 4
      },
      title2: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 8,
        color: '#0063A7',
        fontWeight: 'bold'
      },
      imageButton: {
        justifyContent: 'center',
        width: 190,
        height: 45
        // borderWidth: 5,
      },
      imageButton1: {
        justifyContent: 'center',
        width: 190,
        height: 56
        // borderWidth: 5,
      },
      fontWhite: {
        color: 'white'
      },
      img: {
        width: 190,
        height: 200,
        // marginLeft: 70,
        marginLeft: 85
        // marginTop:50,
      },
    
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: '#FBC926',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        // borderWidth: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 10,
        padding: 10,
        width: 110,
        elevation: 2,
        marginBottom: 10,
        backgroundColor: '#D02027'
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
      },
      modalText: {
        marginBottom: 15,
        // borderWidth:1,
        width: 181,
        color: '#0063A7',
        fontSize: 17,
        textAlign: 'center'
      },
    
      modalText2: {
        marginBottom: 15,
        // borderWidth:1,
        width: 195,
        color: '#D02027',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      title_Modal: {
        fontSize: 17,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
      },
      intitle_Modal: {
        fontSize: 11,
        textAlign: 'center',
        color: 'lightgray'
      },
      centeredView2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
      },
      modalView2: {
        margin: 20,
        backgroundColor: '#FBC926',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        // borderWidth: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      }
})