// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
	Dimensions,
	Button,
	TextInput,
	Switch,
} from "react-native";
import {
	useDimensions,
	useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import Btn from "./app/components/Btn";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ListItem from "./app/components/ListItem";
import AccountScreens from "./app/screens/AccountScreens";
import LisitngsScreen from "./app/screens/LisitngsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import SignupScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const cats = [
	{
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothes",
		value: 2,
	},
	{
		label: "Electronics",
		value: 3,
	},
];

export default function App() {
	const [isNew, setIsNew] = useState(false);
	const [categorty, setCategorty] = useState(cats[0]);

	return <ListingEditScreen />;
}
