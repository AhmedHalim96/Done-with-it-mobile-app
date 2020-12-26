import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreens from "../screens/AccountScreens";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();
const AccountNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }} mode={"modal"}>
		<Stack.Screen name="Account" component={AccountScreens} />
		<Stack.Screen name="Messages" component={MessagesScreen} />
	</Stack.Navigator>
);

export default AccountNavigator;
