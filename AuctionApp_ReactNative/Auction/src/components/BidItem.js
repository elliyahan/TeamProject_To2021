import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class BidItem extends Component {
  static defaultProps = {
    item: {

     
     disctiption: '',
      bidprice: ''
    },
    style: {},
    onPress: () => console.log("onPress")
  };

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.props.onPress}
      >
 

        

          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                marginRight: 4,
                marginTop: 4
              }}
            >
              {this.props.item.disctiption} -
            </Text>
           
          </View>
        

        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 20, paddingTop: 10 }}>{this.props.item.bidprice}</Text></View>
        <View style={{ flex: 1 }}></View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
    // borderWidth:1
  }
});
