import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
	{
		id: 1,
		title: "Jacket",
		price: 100,
		image: require("../assets/jacket.jpg"),
	},
	{
		id: 2,
		title: "Chair",
		price: 1000,
		image: require("../assets/chair.jpg"),
	},
];

const LisitngsScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						image={item.image}
						subtitle={"$" + item.price}
						onPress={() => navigation.navigate("ListingDetails", { item })}
					/>
				)}
			/>
		</Screen>
	);
};

export default LisitngsScreen;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		padding: 20,
	},
});
