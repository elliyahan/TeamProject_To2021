import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import MyButton from "../components/MyButton";

import { AsyncStorage } from "react-native";
import { fetchJoinuser } from '../fetch/Join';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      phonenumber: "",
      name: "",
      email: ""

    };
  }

  /*  postMycar = async (vin, imageUri) => {
     const uri =
       "http://ec2-13-124-49-137.ap-northeast-2.compute.amazonaws.com:3000/api/org.example.carauction.Car";
     const result = fetch(uri, {
       method: "POST",
 
       s: {
         Accept: "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         $class: "org.example.carauction.Car",
         vin: vin,
         imageUri: imageUri,
         owner: "org.example.carauction.Member#temp@naver.com"
       })
     })
       .then(resp => {
         if (200 <= resp.status < 300) {
           return resp.json();
         } else {
           console.error(resp);
         }
         return resp.json();
       })
       .then(respJson => {
         return respJson;
       });
   }; */

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "회원 가입"
    };
  };

  submitButton = async () => {
    if (this.state.vin == "" || this.state.image == "") {
      return false;
    }
    result = await this.postMycar(this.state.vin, this.state.image);
    console.log(result);

    return this.props.navigation.navigate("MyCarList");
    // let myCar = await AsyncStorage.getItem("myCar");
    // myCar = JSON.parse(myCar);
    // const newCar = {
    //   vin: this.state.vin,
    //   manufacturer: this.state.manufacturer,
    //   model: this.state.model,
    //   year: this.state.year,
    //   image: this.state.image
    // };
    // const newCarList = myCar.concat(newCar);
    // try {
    //   await AsyncStorage.setItem("myCar", JSON.stringify(newCarList));
    // } catch {
    //   console.log("error 발생");
    // }
  };

  render() {
    return (
      <View>
        <View style={{ marginTop: 200 }}>
          <Text style={{ textAlign: "center" }}>
            개인 정보를 정확히 입력해주세요.
          </Text>

          <View style={{ flexDirection: "column", alignItems: "center" }}>
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
            <TextInput
              style={styles.textinput}
              placeholder="이름"
              onChangeText={text => this.setState({ name: text })}
            />
            <TextInput
              style={styles.textinput}
              placeholder="휴대폰 번호"
              onChangeText={text => this.setState({ phonenumber: text })}
            />

            <TextInput
              style={styles.textinput}
              placeholder="이메일 주소"
              onChangeText={text => this.setState({ email: text })}
            />


            <MyButton
              iconName="ios-add"
              text="회원 등록"
              size={25}
              onPress={this.submitLogin}
              onPress={async () => {
                let result = await fetchJoinuser(this.state.id, this.state.password, this.state.name, this.state.phonenumber, this.state.email)
                if (result.status == "성공") {
                  alert("success");
                  this.props.navigation.navigate("fail");
                }
                else {
                  alert('fail');
                  return null;
                }
              }}
            />

<MyButton
              iconName="ios-add"
              text="뒤로가기"
              size={25}
              onPress={this.submitLogin}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    margin: 8,
    width: "70%",
    fontSize: 23
  }
});

export default SignUpScreen;
