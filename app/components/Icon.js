import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const Icon = ({
	name,
	size = 40,
	color = colors.white,
	backgroundColor = colors.black,
}) => {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				backgroundColor,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<MaterialCommunityIcons name={name} color={color} size={size / 2} />
		</View>
	);
};

export default Icon;

const styles = StyleSheet.create({
	container: {},
});
