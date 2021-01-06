import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import AppActivityIndicator from "../components/ActivityIndicator";
// import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Btn from "../components/Btn";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../navigation/routes";

const LisitngsScreen = ({ navigation }) => {
	const { data: listings, error, loading, request: loadListings } = useApi(
		listingsApi.getListings
	);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText>Couldn't connect to the interweb!</AppText>
					<Btn title="retry" onPress={loadListings} />
				</>
			)}

			<AppActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						imageUrl={item.images[0].url}
						subtitle={"$" + item.price}
						onPress={() =>
							navigation.navigate(routes.LISTINGS_DETAILS, { item })
						}
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
