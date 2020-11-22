import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
	return (
		<>
			<View style={styles.container}>
				<Image source={require("../assets/jacket.jpg")} style={styles.img} />
				<View style={styles.details}>
					<AppText style={styles.title}>Red Jacket</AppText>
					<AppText style={styles.price}>15$</AppText>
				</View>
			</View>
			<ListItem
				title={"Ahmed Halim"}
				subtitle={"1 listing"}
				image={require("../assets/jacket.jpg")}
			/>
		</>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	container: {
		marginBottom: 40,
	},
	img: {
		width: "100%",
		height: 300,
	},
	details: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	title: { fontSize: 24, fontWeight: "500" },
	price: {
		color: colors.secondary,
		fontSize: 20,
	},
});
