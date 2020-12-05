import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
} from "../components/forms";

import * as Yup from "yup";
import Screen from "../components/Screen";

const valdiationSchema = Yup.object().shape({
	title: Yup.string().required(),
	price: Yup.string().required(),
	category: Yup.string().required(),
	description: Yup.string().required(),
});

const ListingEditScreen = () => {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ title: "", price: "", category: "", description: "" }}
				onSubmit={values => console.log(values)}
				valdiationSchema={valdiationSchema}
			>
				<AppFormField name="title" placeholder="Title" />
				<AppFormField name="price" placeholder="Price" />
				<AppFormPicker name="category" />
				<AppFormField name="description" placeholder="Description" />
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: { marginTop: 50, padding: 10 },
});
