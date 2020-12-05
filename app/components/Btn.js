import React from "react";
import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

const Btn = ({ title, color = colors.primary, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.btn, { backgroundColor: color }]}
		>
			<Text style={styles.btnTxt}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Btn;

const styles = StyleSheet.create({
	btn: {
		height: 60,
		width: "100%",
		borderRadius: 40,
		marginVertical: 10,
	},
	btnTxt: {
		color: colors.white,
		flex: 1,
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
