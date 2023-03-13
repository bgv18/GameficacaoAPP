import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HistoryText from '../../Screens/HistoryText/index';
import HistoryScreen from '../../Screens/HistoryScreens/index';
import HistoryAudioPlayer from '../../Screens/HistoryAudioPlayer/index';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle:{
        fontSize: 13,
        },}}>
      <Tab.Screen 
        name= "Texto" 
        component={HistoryText}
        options={{
            tabBarLabel: 'Texto',
            tabBarIcon: ({ color, size}) => (<MaterialCommunityIcons name="message-reply-text-outline" color={color} size={32} />),
        }} 
      />
      <Tab.Screen 
        name= "Quadrinhos" 
        component={HistoryScreen}
        options={{
            tabBarLabel: 'História',
            tabBarIcon: ({ color, size}) => (<MaterialCommunityIcons name="book-open-outline" color={color} size={32} />),
        }}  
        />
      <Tab.Screen 
        name= "Audio" 
        component={HistoryAudioPlayer}
        options={{
            tabBarLabel: 'Áudio',
            tabBarIcon: ({ color, size}) => (<MaterialCommunityIcons name="ear-hearing" color={color} size={32} />),
        }}  
      />
    </Tab.Navigator>
  );
}

