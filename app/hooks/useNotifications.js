import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";

import expoPushTokenApi from "../api/expoPushTokens";

export default useNotifications = notificationListner => {
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
		if (notificationListner)
			Notifications.addPushTokenListener(notificationListner);
	}, []);
};
