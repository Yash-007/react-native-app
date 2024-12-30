import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/screens/SearchScreen';
import { View, Text, StyleSheet, Image } from 'react-native';


const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => (
  <View>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

const CreateScreen: React.FC = () => (
  <View>
    <Text style={styles.text}>Create Screen</Text>
  </View>
);

const CommunityScreen: React.FC = () => (
  <View>
    <Text style={styles.text}>Community Screen</Text>
  </View>
);

const MeScreen: React.FC = () => (
  <View>
    <Text style={styles.text}>My Profile</Text>
  </View>
);

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let src;

          if (route.name === 'Home') {
            if(focused)
            src = require("./src/assets/focused/home-focused.png");
            else
            src = require("./src/assets/normal/home-normal.png");
          } else if (route.name === 'Discover') {
            if(focused)
            src = require("./src/assets/focused/search-focused.png");
            else
            src = require("./src/assets/normal/search-normal.png");
          } else if (route.name === 'Create') {
            if(focused)
            src = require("./src/assets/focused/create-focused.png");
            else
            src = require("./src/assets/normal/create-normal.png");
          } else if (route.name === 'Community') {
            if(focused)
              src = require("./src/assets/focused/community-focused.png");
              else
              src = require("./src/assets/normal/community-normal.png");
          } else if (route.name === 'Me') {
            if(focused)
              src = require("./src/assets/focused/profile-focused.png");
              else
              src = require("./src/assets/normal/profile-normal.png");          }
          else 
          src = "";

          return (<Image
            source={src}
            style={{
              height: size,
              width: size,
              resizeMode: "center",
            }}
          />);
        },
        tabBarActiveTintColor: '#2C89FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Discover"  options={{ headerShown: false }} component={SearchScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="Community" component={CommunityScreen}  />
        <Tab.Screen name="Me" component={MeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    fontWeight: '900',
    color: '#71718f',
    letterSpacing:.5,
    padding:25,
    marginTop:10,
  },
});

export default App;
