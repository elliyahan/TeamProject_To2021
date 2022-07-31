import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';
import { SocialIcon } from 'react-native-elements'
import { fetchLogin } from '../fetch/Login';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      password: ""
    }
  }
  async _submit() {
    let result = await fetchLogin(this.state.id, this.state.password);
    this.props.navigation.navigate("Main");
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "로그인"
    };
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 30,
              color: 'tomato',
              marginTop: -20,
              fontWeight: 'bold',
            }}
          >
            Auction!
          </Text>

          <TextInput

            style={styles.textinput}
            placeholder="아이디"
            onChangeText={text => this.setState({ id: text })}
          />

          <TextInput
            style={styles.textinput}
            placeholder="비밀번호"
            onChangeText={text => this.setState({ password: text })}
          />

          <RoundButton
            style={{ marginTop: 10 }}
            title={'회원 가입'}

            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          />

          <RoundButton
            style={{ marginTop: 10 }}
            title={'로그인'}
            onPress={() => this._submit()}

          />

         




        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'center',
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
  },
  touchWrap: { flexDirection: 'row', height: 50, width: "100%", marginBottom: 10 },
  textinput: {
    borderWidth: 1,
    margin: 8,
    width: 350,
    fontSize: 23
  }
});

export default LoginScreen;

