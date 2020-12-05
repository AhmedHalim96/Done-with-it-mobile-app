import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subtitle, image }) => {
	console.log(title);
	return (
		<View style={styles.card}>
			<Image source={image} style={styles.img} />
			<View style={styles.cardText}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subtitle}>{subtitle}</AppText>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		flexDirection: "column",
		borderRadius: 15,
		backgroundColor: colors.white,
		overflow: "hidden",
	},
	img: {
		width: "100%",
		height: 220,
		resizeMode: "cover",
	},
	cardText: {
		padding: 10,
	},
	title: { marginBottom: 10 },
	subtitle: {
		color: colors.secondary,
		fontSize: 16,
	},
});
