import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';
import DetailedPost from './components/DetailedPost';
import Category from './components/Category';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './components/News';
import { render } from 'react-dom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
function HomePage() {
  return (
     <Stack.Navigator initialRouteName="News" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="News"
          component={Home}
        />
        <Stack.Screen name="Detailed" component={DetailedPost} />

      </Stack.Navigator>
  )
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="list" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


export default function App(){
  return (
    <NavigationContainer>
      
      <MyTabs />
      {/* <HomePage/> */}

    </NavigationContainer>
  );
}


