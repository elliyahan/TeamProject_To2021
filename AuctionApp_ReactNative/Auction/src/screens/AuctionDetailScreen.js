import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";

import IconText from "../components/IconText";
import AuctionList from "../components/AuctionList";
import RoundButton from "../components/RoundButton";
import BidList from "../components/BidList";

import ListComponent from '../components/ListComponent';
import { Textarea } from "native-base";

const meunList = [
/*   {
    name:"100000",
    categories:"이동훈"
},
{
  name:"110000",
  categories:"양영인"
}
 */
  
]

export default class AuctionDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Auction: this.props.navigation.getParam("item"),
    Bid: this.props.navigation.getParam("item")
    };
    this.fetchAuction();
  }

  fetchAuction = async () => {
    auction = await fetchAuctionDetail(this.state.Auction.imagesource);

    this.setState({ Auction: auction });

    auctionList = await auctionListByProduct(auction);
    console.log(auctionList);
    this.setState({ auctionList: auctionList });
  };

  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam("item");
    return {
      title: item.name
    };
  };

  keyExtractor = (item,index) => index.toString();

  renderItem = ({item})=>(
      <ListComponent title={item.name} onPress={()=>alert(item.categories)}></ListComponent>
  )

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", width: "100%" }}>

        <View>
          <Image
            source={{ uri: this.state.Auction.imagesource }}
            style={{ height: 430 }}
          />
        </View>

        <View style={{ flexDirection: "row", margin: 20 }}>
          <View style={{ flex: 1 }}>
            
            <IconText
              iconName="ios-cart"
              text={this.state.Auction.name}
              size={20}
            />

            <IconText
              iconName="ios-calendar"
              text={this.state.Auction.year}
              size={20}
            />
          </View>
         

          <View style={{ flex: 1 }}>

          <IconText
              
              iconName="ios-card"
              text={this.state.Auction.price}
              size={20}
            />

            <IconText
              iconName="ios-construct"
              text={this.state.Auction.manufacturer}
              size={20}
            />

            
           
          </View>
        </View>

        <View>
        <RoundButton
          style={{ marginTop: 10 }}
          iconName={'ios-trending-up'}
          title={'입찰하시겠습니까?'}
          onPress={() => {
            this.props.navigation.navigate('AuctionBid');
          }}
        />
        </View>
        <View style={{ marginTop: 10 }}>
        <Text style ={{textAlign: 'center'}}>입찰 정보</Text>
        <FlatList keyExtractor={this.keyExtractor} data={meunList} renderItem={this.renderItem}>
                        </FlatList>
        </View>
        

        
    {/*     <BidList
      
          {...this.props}
        /> */}
      </View>
    );
  }
}
