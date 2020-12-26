import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LisitngsScreen from "../screens/LisitngsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreens from "../screens/AccountScreens";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
	<Tab.Navigator>
		<Tab.Screen name="Listings" component={LisitngsScreen} />
		<Tab.Screen name="ListingEdit" component={ListingEditScreen} />
		<Tab.Screen name="Account" component={AccountScreens} />
	</Tab.Navigator>
);

export default AppNavigator;
