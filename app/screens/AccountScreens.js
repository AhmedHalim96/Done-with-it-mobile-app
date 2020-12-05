import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
	},
];

const AccountScreens = () => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Tyler Durden"
					subtitle="tylerd@mayham.boom"
					image={require("../assets/jacket.jpg")}
				/>
			</View>

			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={item => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>

			<ListItem
				title="Logout"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
			/>
		</Screen>
	);
};

export default AccountScreens;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},

	screen: {
		backgroundColor: colors.light,
	},
});
