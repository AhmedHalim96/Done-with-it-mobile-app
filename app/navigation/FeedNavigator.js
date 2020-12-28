import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LisitngsScreen from "../screens/LisitngsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }} mode={"modal"}>
		<Stack.Screen name={routes.LISTINGS} component={LisitngsScreen} />
		<Stack.Screen
			name={routes.LISTINGS_DETAILS}
			component={ListingDetailsScreen}
		/>
	</Stack.Navigator>
);

export default FeedNavigator;
