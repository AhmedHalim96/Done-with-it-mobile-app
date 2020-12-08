import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
	return (
		<View style={styles.container}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} />
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
	container: {
		width: "33%",
		paddingHorizontal: 30,
		paddingVertical: 15,
		alignItems: "center",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});
