import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreens from "../screens/AccountScreens";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const AccountNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }} mode={"modal"}>
		<Stack.Screen name={routes.ACCOUNT} component={AccountScreens} />
		<Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
	</Stack.Navigator>
);

export default AccountNavigator;
