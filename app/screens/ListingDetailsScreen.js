import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
	const listing = route.params.item;
	return (
		<>
			<View style={styles.container}>
				<Image
					uri={listing.images[0].url}
					preview={{ uri: listing.images[0].thumbnail_url }}
					tint={"light"}
					style={styles.img}
				/>
				<View style={styles.details}>
					<AppText style={styles.title}>{listing.title}</AppText>
					<AppText style={styles.price}>{listing.price}</AppText>
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
