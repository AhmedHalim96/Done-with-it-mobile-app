import React from "react";
import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
} from "react-native";

const Btn = ({ title, color, onPress }) => {
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
		color: "white",
		flex: 1,
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 20,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
