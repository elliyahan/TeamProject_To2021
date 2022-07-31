import React from "react";
import { View, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import MyButton from "../components/MyButton";
import { fetchBidAuction } from '../fetch/Bid';

import { AsyncStorage } from "react-native";

export default class AuctionBidScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     discription:'',
     bidprice:'',

    }
  }



  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: "비드"
    };
  };
  submitButton = async () => {
    if (this.state.imagesource == '') { return false }

    letBid = await AsyncStorage.getItem('Bid');
    Bid = JSON.parse(Bid);
    const newBid = {


      discription: this.state.discription,
      bidprice: this.state.bidprice
    }
    const newBidList = Bid.concat(newBid);
    try {
      await AsyncStorage.setItem('Bid', JSON.Stringify(newBidList));
    }
    catch{
      console.log("에러 발생")
    }
    return this.props.navigation.navigate('AuctionDetailList')
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
              등록하시려는 입찰 정보를 정확히 입력해주세요.
          </Text>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

              <TextInput
                style={styles.textinput}
                placeholder="discription"
                onChangeText={(text) => this.setState({ discription: text })}
              />
              <TextInput
                style={styles.textinput}
                placeholder="bidprice"
                onChangeText={(text) => this.setState({ bidprice: text })}
              />
              

              <MyButton

                iconName="ios-add"
                text="입찰 등록"
                size={25}
                onPress={async () => {
                  let result = await fetchBidAuction(this.state.discription, this.state.bidprice)
                  if (result.message = "d") {
                    alert("d");
                    this.props.navigation.navigate("AuctionDetail");
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


