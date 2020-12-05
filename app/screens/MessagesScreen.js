import React, { useState } from "react";
import {
	FlatList,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const MessagesScreen = () => {
	const intialMessages = [
		{
			id: 1,
			title: "T1",
			descriprtion: "D1",
			image: require("../assets/jacket.jpg"),
		},
		{
			id: 2,
			title: "T2",
			descriprtion: "D2",
			image: require("../assets/jacket.jpg"),
		},
	];

	const [messages, setMessages] = useState(intialMessages);
	const [refreshing, setrefreshing] = useState(false);

	const deleteMessageHandler = message => {
		setMessages(messages.filter(msg => msg.id !== message.id));
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subtitle={item.descriprtion}
						image={item.image}
						onPress={() => console.log(item.descriprtion)}
						rightActions={() => (
							<ListItemDeleteAction
								onPress={() => deleteMessageHandler(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeperator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 1,
							title: "T1",
							descriprtion: "D1",
							image: require("../assets/jacket.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
