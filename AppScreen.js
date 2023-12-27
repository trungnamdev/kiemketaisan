import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import AssetList from './screens/AssetList/AssetList';
import Inventory from './screens/Inventory/Inventory';
export default function AppScreen() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AssetList" component={AssetList} options={{ headerShown: false }} />
                <Stack.Screen name="Inventory" component={Inventory} options={{ headerShown: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}