import { useDimensions } from "@react-native-community/hooks";
import React, { Component } from "react";
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Platform,
	StatusBar,
	Image,
} from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<MaterialCommunityIcons
				style={styles.closeIcon}
				name="close"
				size={40}
				color="white"
			/>
			<MaterialCommunityIcons
				style={styles.deleteIcon}
				name="trash-can-outline"
				size={40}
				color="white"
			/>
			<Image
				source={require("../assets/chair.jpg")}
				resizeMode="contain"
				style={styles.image}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flex: 1,
		backgroundColor: colors.black,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
});
