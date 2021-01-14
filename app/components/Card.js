import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subtitle, imageUrl, onPress, thumbnailUrl }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image
					uri={imageUrl}
					style={styles.img}
					tint={"light"}
					preview={{ uri: thumbnailUrl }}
				/>
				<View style={styles.cardText}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subtitle}>{subtitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
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
