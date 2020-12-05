import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
	);
};

export default Screen;

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});
