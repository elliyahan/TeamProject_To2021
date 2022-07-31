import React from 'react';
import {
  View,
  Text,
  FlatList, AsyncStorage, Image, TextInput
}
  from 'react-native';

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AuctionList from '../components/AuctionList';
import { NavigatorEvents } from 'react-navigation';
import ProductList from '../components/ProductList';
import { ScrollView } from 'react-native-gesture-handler';


export default class AuctionListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  

  initMyAuction = async () => {
    let auctionList = await AsyncStorage.getItem("myAuction");
    if (auctionList === null) {
      await AsyncStorage.getItem("myAuction", JSON.stringify(mockData))
      auctionList = mockData;
    }
    else {
      auctionList = JSON.parse(auctionList);

    }
    this.setState({ myAuctionList: auctionList })
  }

  addMyAuction(vin, manufacturer, model, year, image) {
    const auction = {
      vin: vin,
      manufacturer: manufacturer,
      model: model,
      year: year,
      image: image
    }
    const newAuctionList = this.state.myAuctionList.concat(auction);
    this.setState({ auctionList: newAuctionList });

  }

  getAuctionList = async () => {
    let a;
    await AsyncStorage.setItem("@MyStore:myAuctionList", JSON.stringify(mockData))
    try {
      a = await AsyncStorage.getItem('@MyStore:myAuctionList');
      if (a !== null) {
        console.log(a)
      }
      console.log(a)
    } catch{
      console.log("error")
    }
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <TouchableOpacity
          style={{ padding: 5, paddingRight: 15 }}
          onPress={() => {
            navigation.push('AuctionAdd');
            console.log("오른쪽 + 버튼 토글");
            // navigation.navigate('');
          }}
        >
          <Ionicons name={'ios-add'} size={35} color={'white'} />
        </TouchableOpacity>
      ),
      title: '옥션',
    };
  };


  render() {
    const { search } = this.state;
    return (
      <View>
        {/* <NavigatorEvents onWillFocus={payload => this.initMyCar()} */}
        {/* /> */}




        {/* <TextInput 

          style={{height: 40, width:"90%", borderColor: 'gray', borderWidth: 1}}

          onChangeText={(text) => this.setState({text})}

          value={this.state.text}
          />
          <Ionicons name="ios-search" size={20} color="green" style={{paddingRight:20, paddingLeft:20}} /> */}



        {/*  <Text></Text>
        <Ionicons name="ios-medal" size={25} color="gold" style={{ paddingRight: 20, paddingLeft: 20 }} />
        <Ionicons name="ios-medal" size={25} color="silver" style={{ paddingRight: 20, paddingLeft: 20 }} />
        <Ionicons name="ios-medal" size={25} color="brown" style={{ paddingRight: 20, paddingLeft: 20 }} />

 */}

        {/* <AuctionList
        //  auctionList={this.state.AuctionList}
          // 
          {...this.props}
        /> */}
        <ScrollView>
        {/* <ProductList
          productList={this.state.myProductList}
          // 
          {...this.props}
        /> */}
        
        <AuctionList
        //  auctionList={this.state.AuctionList}
          // 
          {...this.props}
        />

        </ScrollView>
       

      </View>
    )
  }
}