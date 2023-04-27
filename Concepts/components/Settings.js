import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

//it is used to hide the keyboard on a screen tap
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const Settings = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [modalHeading,setHeading]=useState('Warning');
  const [modalMsg, setMsg] = useState();
  const [showModal, setShowModal] = useState(false);
  const handleLogin = () => {
    if (!username) setMsg('Please Enter The Username');
    else if (username.length < 4) setMsg('Invalid Username Length');
    else if (!password) setMsg('Please Enter The Password');
    else {setMsg('You Have Successfully Logged In');setHeading('Successfull')}

    setShowModal(true);
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter The Username"
            onChangeText={e => setUserName(e)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter The Password"
            onChangeText={e => setPassword(e)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Modal
          transparent
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
            setMsg('');
          }} //back button is pressed
          animationType="fade">
          <View style={styles.center_modal}>
            <View style={styles.modal}>
              <View style={[styles.modal_heading,modalHeading==='Successfull'?{backgroundColor:'#87CBB9'}:null]}>
                <Text style={styles.modal_text}>{modalHeading}</Text>
              </View>
              <View style={styles.moadlmsg_view}>
                <Text style={styles.modal_text}>{modalMsg}</Text>
              </View>
              <TouchableOpacity
                style={styles.modal_ok_btn}
                onPress={() => {
                  setShowModal(false);
                  setMsg('');
                }}>
                <Text style={styles.modal_text}>Ok</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
                
      </View>
    </DismissKeyboard>
  );
};
//in android you can have max 3 buttons in a alert box
//whereas in ios you can have as much as you want to
//The React Native Modal is a type of View component which is used to present the content above an enclosing view.
//You can use it to create a custom alert
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    margin: 10,
  },
  btn: {
    width: '50%',
    borderRadius: 20,
    backgroundColor: '#7C96AB',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  modal_heading: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: '#F7D060',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_text: {
    fontSize: 20,
  },
  moadlmsg_view: {
    flex: 4,
  },
  center_modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000070', //black color with value 70 of transparency
  },
  modal: {
    overflow:'hidden',//ver imp
    borderRadius: 20,
    width: '80%',
    height: '60%',
    backgroundColor: '#ffffff', //white color
  },
  modal_ok_btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D60',
  },
});

export default Settings;
