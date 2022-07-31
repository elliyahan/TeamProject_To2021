import React from "react";
import { View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import MyButton from "../components/MyButton";

import { fetchAddproduct } from '../fetch/Add';
import { AsyncStorage } from "react-native";

export default class MyProductAddScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer: '',
      name: '',
      year: '',
      imagesource: '',
      price: ''

    }
  }



  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "MyProduct Add"
    };
  };

  submitButton = async () => {
    if (this.state.imagesource == '') { return false }

    letmyProduct = await AsyncStorage.getItem('myProduct');
    myProduct = JSON.parse(myProduct);
    const newProduct = {

      manufacturer: this.state.manufacturer,
      name: this.state.name,
      year: this.state.year,
      imagesource: this.state.imagesource,
      price: this.state.price
    }
    const newProductList = myProduct.concat(newProduct);
    try {
      await AsyncStorage.setItem('myProduct', JSON.Stringify(newProductList));
    }
    catch{
      console.log("에러 발생")
    }
    return this.props.navigation.navigate('MyProductList')
  }

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
        <View>

          <View style={{ marginTop: 100 }}>


            <Text style={{ textAlign: 'center' }}>
              등록하시려는 제품의 정보를 정확히 입력해주세요.
          </Text>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

              <TextInput
                style={styles.textinput}
                placeholder="제조사"
                onChangeText={(text) => this.setState({ manufacturer: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="이름"
                onChangeText={(text) => this.setState({ name: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="제조년일"
                onChangeText={(text) => this.setState({ year: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="이미지URL"
                onChangeText={(text) => this.setState({ imagesource: text })}
              />

              <TextInput
                style={styles.textinput}
                placeholder="가격"
                onChangeText={(text) => this.setState({ price: text })}
              />

              <MyButton

                iconName="ios-add"
                text="제품 등록"
                size={25}
                onPress={async () => {
                  let result = await fetchAddproduct(this.state.manufacturer, this.state.name, this.state.year, this.state.imagesource, this.state.price)
                  if (result.message = "success") {
                    alert("success");
                    this.props.navigation.navigate("ProductList");
                  }
                  else {
                    alert('fail');
                    return null;
                  }
                }}
              ></MyButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    margin: 8,
    width: '70%',
    fontSize: 23
  }
})


