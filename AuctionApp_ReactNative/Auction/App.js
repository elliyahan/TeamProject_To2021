import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";



import MainScreen from "./src/screens/MainScreen";

import MyProductDetailScreen from "./src/screens/MyProductDetailScreen";
import MyProductAddScreen from "./src/screens/MyProductAddScreen";
import LoginScreen from "./src/screens/LoginScreen";
import VehicleDetailScreen from './src/screens/VehicleDetailScreen';
import AuctionListScreen from "./src/screens/AuctionListScreen";
import AuctionAddScreen from "./src/screens/AuctionAddScreen";
import AuctionDetailScreen from "./src/screens/AuctionDetailScreen";
import AuctionBidScreen from "./src/screens/AuctionBid";
import SettingScreen from "./src/screens/SettingScreen";


import SignUpScreen from "./src/screens/SignUpScreen";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";


const auction = function tempAuction() {
  return <View />;
};
const settings = function tempSettings() {
  return <View />;
};

const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "tomato"
  }
};

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainScreen
    },

    MyProductDetail: {
      screen: MyProductDetailScreen
    },
    MyProductAdd: {
      screen: MyProductAddScreen
    },

  },
  {
    defaultNavigationOptions
  }
);

/* const CategorymenuStack = createStackNavigator(
  {

    CarAuctionDetail: {
      screen: AuctionDetailScreen
    }
  },
  {
    defaultNavigationOptions
  }
); */

const AuctionStack = createStackNavigator(
  {
    AuctionList: {
      screen:  AuctionListScreen
    }
   ,
    AuctionAdd: {
      screen: AuctionAddScreen
    },
    AuctionDetail: {
      screen: AuctionDetailScreen
    },
    AuctionBid: {
      screen: AuctionBidScreen
    }
  
  },
  {
    defaultNavigationOptions,
  }
);

/* const MyPageStack = createStackNavigator(
  {
    MyPage: MyScreen
  },
  {
    defaultNavigationOptions,
  }
); */


const tabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainStack // home
    },
    Auction: {
      screen: AuctionStack
    },

  /*   MyPage: {
      screen: MyPageStack
    }, */

    더보기: {
      screen: SettingScreen
    }


  },
  {
    /* Other configuration remains unchanged */
    /* 밑에 탭 */
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Main") {
          iconName = "ios-home";
        } else if (routeName === "Auction") {
          iconName = "ios-trending-up";
        } /* else if (routeName === "My") {
          iconName = "ios-trending-up";
        } 
         */
        else if (routeName === "더보기") {
          iconName = "ios-menu";
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const RootStack = createStackNavigator(
  {

    Main: {
      screen: tabNavigator
    },
    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <AppContainer />


    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}
