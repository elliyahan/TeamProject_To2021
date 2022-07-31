import React from "react";

import { Button, View, AsyncStorage, FlatList } from "react-native";

import ListComponent from '../components/ListComponent';

const meunList = [
  {
      name:"oioi1234",
      categories:"아이디"
  },
  {
      name:"oioi1234@google.com",
      categories:"이메일"
  },
  {
      name:"이동훈",
      categories:"이름"
  },
  {
      name:"010-1234-5678",
      categories:"전화번호"
  }
]


export default class SettingScreen extends React.Component {
  logout = async () => {
    await AsyncStorage.removeItem("loginMember");
    return this.props.navigation.navigate("Login");
  };

  keyExtractor = (item,index) => index.toString();

  renderItem = ({item})=>(
      <ListComponent title={item.name} onPress={()=>alert(item.categories)}></ListComponent>
  )


  render() {
    return (
      
      <View style={{ marginTop: 300 }}>
        <FlatList keyExtractor={this.keyExtractor} data={meunList} renderItem={this.renderItem}>
                        </FlatList>
        <Button title="로그아웃" onPress={this.logout} />
      </View>
    );
  }
}
