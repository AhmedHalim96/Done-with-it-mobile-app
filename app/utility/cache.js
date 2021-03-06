import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const expiryInMinutes = 5;

const store = async (key, value) => {
	try {
		const item = {
			value,
			timestamp: Date.now(),
		};
		await AsyncStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.log(error);
	}
};

const isExpired = item => {
	const now = dayjs();
	const storedTime = dayjs(item.timestamp);
	return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async key => {
	try {
		const value = await AsyncStorage.getItem(key);
		const item = JSON.parse(value);

		// item don't exist
		if (!item) return null;

		// item expired or not
		if (isExpired(item)) {
			// Command query seperation
			AsyncStorage.removeItem(key);
			return null;
		}
		return item.value;
	} catch (error) {
		console.log(error);
	}
};

export default {
	store,
	get,
};
