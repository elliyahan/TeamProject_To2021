import React from 'react';
import {
  View,
  Text,
  FlatList, AsyncStorage, Image, TextInput
}
  from 'react-native';

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductList from '../components/ProductList';
import { NavigatorEvents } from 'react-navigation';
import { SearchBar } from 'react-native-elements';


export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  state = {
    search: '',
  };

  initMyProduct = async () => {
    let productList = await AsyncStorage.getItem("myProduct");
    if (productList === null) {
      await AsyncStorage.getItem("myProduct", JSON.stringify(mockData))
      productList = mockData;
    }
    else {
      productList = JSON.parse(productList);

    }
    this.setState({ myProductList: productList })
  }

  addMyProduct(vin, manufacturer, model, year, image) {
    const product = {
      vin: vin,
      manufacturer: manufacturer,
      model: model,
      year: year,
      image: image
    }
    const newProductList = this.state.myProductList.concat(product);
    this.setState({ productList: newProductList });

  }

  getProductList = async () => {
    let a;
    await AsyncStorage.setItem("@MyStore:myProductList", JSON.stringify(mockData))
    try {
      a = await AsyncStorage.getItem('@MyStore:myProductList');
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
            navigation.push('MyProductAdd');
            console.log("오른쪽 + 버튼 토글");
            // navigation.navigate('');
          }}
        >
          <Ionicons name={'ios-add'} size={35} color={'white'} />
        </TouchableOpacity>
      ),
      title: 'Main',
    };
  };
  updateSearch = search => {
    this.setState({ search });
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

        <ProductList
          productList={this.state.myProductList}
          // 
          {...this.props}
        />


      </View>
    )
  }
}