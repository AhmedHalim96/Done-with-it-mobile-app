import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";

import ListItem from "../components/lists/ListItem";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "format-list-bulleted",
			backgroundColor: colors.primary,
		},
		targetScreen: "",
	},
	{
		title: "My Messages",
		icon: {
			name: "email",
			backgroundColor: colors.secondary,
		},
		targetScreen: routes.MESSAGES,
	},
];

const AccountScreens = ({ navigation }) => {
	const { user, logout } = useAuth();
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subtitle={user.email}
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
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>

			<ListItem
				title="Logout"
				IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
				onPress={() => logout()}
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
