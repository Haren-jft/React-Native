import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Settings from './components/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Shimmer from './components/Shimmer';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if(route.name==="Shimmer"){
                iconName = focused ? 'ios-star' : 'ios-star-outline';
              }
              else{
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="Shimmer" component={Shimmer} />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default App;
