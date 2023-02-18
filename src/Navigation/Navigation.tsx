import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Conversation, Translation} from '../screens';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => (
            <Icon
              name={route.name === 'Chat' ? 'chat' : 'translate'}
              size={size}
              color={color}
            />
          ),

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Chat" component={Conversation} />
        <Tab.Screen name="Translate" component={Translation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
