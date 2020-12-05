import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import AppText from "./AppText";

const AppPickerItem = ({ label, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<AppText style={styles.text}>{label}</AppText>
		</TouchableOpacity>
	);
};

export default AppPickerItem;

const styles = StyleSheet.create({
	container: { width: "100%", padding: 10 },
	text: {
		textAlign: "center",
	},
});
