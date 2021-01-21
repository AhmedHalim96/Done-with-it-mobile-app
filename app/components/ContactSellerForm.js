import React from "react";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

const valdiationSchema = Yup.object().shape({
	email: Yup.string().label("Message").min(1).max(255).required(),
});
const ContactSellerForm = ({ listing }) => {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();
		const result = await messagesApi.send(message, listing.id);
		if (!result.ok) {
			console.log("Error", result);
			return Alert.alert("Error", "Couldn't Send a message, Try again later!");
		}

		resetForm();
		Notifications.presentNotificationAsync({
			title: "Awesome",
			body: "Your Message was sent to the seller.",
		});
	};
	return (
		<View style={styles.container}>
			<AppForm
				initialValues={{ message: "" }}
				onSubmit={handleSubmit}
				valdiationSchema={valdiationSchema}
			>
				<AppFormField name="message" />
				<SubmitButton title="send" />
			</AppForm>
		</View>
	);
};

export default ContactSellerForm;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
});
