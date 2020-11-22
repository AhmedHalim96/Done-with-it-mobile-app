import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ title, subtitle, image }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
	},
	image: {
		// flexBasis: "20%", // width: "100%",
		width: 70,
		height: 70,
		resizeMode: "cover",
		marginRight: 10,
		borderRadius: 35,
	},
	detailsContainer: {},
	title: {
		fontSize: 16,
		fontWeight: "500",
	},
	subtitle: {
		fontSize: 12,
		color: colors.medium,
	},
});
