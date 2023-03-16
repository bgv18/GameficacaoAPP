import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        }} 
      />
      <Tab.Screen 
        name= "Quadrinhos" 
        component={HistoryScreen}
        options={{
            tabBarLabel: 'História',
        }}  
        />
      <Tab.Screen 
        name= "Audio" 
        component={HistoryAudioPlayer}
        options={{
            tabBarLabel: 'Áudio',
        }}  
      />
    </Tab.Navigator>
  );
}

