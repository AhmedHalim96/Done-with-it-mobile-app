import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import colors from "../config/colors";
// const LottieView = require("lottie-react-native");

const AppActivityIndicator = ({ visible = false }) => {
	if (!visible) return null;

	return (
		<View style={styles.container}>
			<ActivityIndicator size={50} animating={true} color={colors.primary} />
		</View>
	);
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
