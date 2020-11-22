import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const AppText = ({ children, style }) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
	text: {
		...Platform.select({
			android: {
				fontFamily: "Roboto",
				fontSize: 18,
			},
			ios: {
				fontFamily: "Avenir",
				fontSize: 23,
			},
		}),
	},
});
