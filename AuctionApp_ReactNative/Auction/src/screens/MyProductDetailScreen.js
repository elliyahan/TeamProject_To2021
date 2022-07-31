import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import IconText from "../components/IconText";
import { Ionicons } from "@expo/vector-icons";
import RoundButton from "../components/RoundButton";
import AuctionList from "../components/AuctionList";



import { Rating } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";


export default class MyProductDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myProduct: this.props.navigation.getParam("item")
    };
    this.fetchProduct();
  }

  
ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

  fetchProduct = async () => {
    product = await fetchProductDetail(this.state.myProduct.vin);

    this.setState({ myProduct: product });

    auctionList = await auctionListByProduct(product);
    console.log(auctionList);
    this.setState({ auctionList: auctionList });
  };

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam("item");
    return {
      title: item.name
    };
  };

  render() {
    return (

      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>
        <ScrollView>
        <View>
          <Image
            source={{ uri: this.state.myProduct.imagesource }}
            style={{ height: 250 }}
          />
        </View>

        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flex: 1 }}>
            
            <IconText
              iconName="ios-cart"
              text={this.state.myProduct.name}
              size={20}
            />

            <IconText
              iconName="ios-calendar"
              text={this.state.myProduct.year}
              size={20}
            />
          </View>
         

          <View style={{ flex: 1 }}>

          <IconText
              
              iconName="ios-card"
              text={this.state.myProduct.price}
              size={20}
            />

            <IconText
              iconName="ios-construct"
              text={this.state.myProduct.manufacturer}
              size={20}
            />

            
           
          </View>
        </View>

        <Rating
        showRating
        onFinishRating={this.ratingCompleted}
        style={{ paddingVertical: 10 }}
        />


        <Text style={{ color: '#333' }}>진행중인 경매가 없습니다.</Text>
        <RoundButton
          style={{ marginTop: 10 }}
          iconName={'ios-trending-up'}
          title={'경매장으로 Go!'}
          onPress={() => {
            this.props.navigation.navigate('AuctionList');
          }}
        />

        </ScrollView>
        
      </View>
    );
  }
}