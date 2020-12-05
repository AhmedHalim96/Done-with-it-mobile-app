import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

export default function ErrorMssage({ error, visible }) {
	return (
		<>
			{error && visible && <AppText style={styles.errorText}>*{error}</AppText>}
		</>
	);
}

const styles = StyleSheet.create({
	errorText: {
		color: colors.danger,
		fontSize: 14,
		textAlign: "left",
		marginLeft: 10,
	},
});
