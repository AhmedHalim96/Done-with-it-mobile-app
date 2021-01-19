import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import expoPushTokenApi from "../api/expoPushTokens";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
	const registerForPushNotifications = async () => {
		try {
			const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			if (!permission.granted) return;
			const token = await Notifications.getExpoPushTokenAsync();
			expoPushTokenApi.register(token);
		} catch (error) {
			console.log("error getting push notifications token", error);
		}
	};

	useEffect(() => {
		registerForPushNotifications();
	}, []);
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.LISTING_EDIT}
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => (
						<NewListingButton
							onPress={() => navigation.navigate(routes.LISTING_EDIT)}
						/>
					),
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="plus-circle"
							size={size}
							color={color}
						/>
					),
				})}
			/>
			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
