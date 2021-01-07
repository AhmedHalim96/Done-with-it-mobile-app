import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const valdiationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.string().required().min(1).max(1000).label("Price"),
	category: Yup.object().required().nullable().label("Category"),
	description: Yup.string().label("Description"),
	images: Yup.array().min(1, "Please select at least one image"),
});
//
const cats = [
	{
		label: "Furniture",
		value: 1,
		backgroundColor: "red",
		icon: "apps",
	},
	{
		label: "Clothes",
		value: 2,
		backgroundColor: "green",
		icon: "email",
	},
	{
		label: "Electronics",
		value: 3,
		backgroundColor: "blue",
		icon: "camera",
	},
];

const ListingEditScreen = () => {
	const location = useLocation();
	const [uploadModalVisible, setUploadModalVisible] = useState(false);
	const [progress, setProgress] = useState(0);

	const handleSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadModalVisible(true);
		const res = await listingsApi.addListings(
			{
				...listing,
				location,
			},
			progress => setProgress(progress)
		);

		if (!res.ok) {
			setUploadModalVisible(false);
			return alert("Somthing wrong happend!! ha ha");
		}

		resetForm();
	};

	return (
		<Screen style={styles.container}>
			<UploadScreen
				onDone={() => setUploadModalVisible(false)}
				progress={progress}
				visible={uploadModalVisible}
			/>
			<AppForm
				initialValues={{
					title: "",
					price: "",
					category: null,
					description: "",
					images: [],
				}}
				onSubmit={handleSubmit}
				valdiationSchema={valdiationSchema}
			>
				<AppFormImagePicker name="images" />
				<AppFormField name="title" placeholder="Title" maxLength={255} />
				<AppFormField
					name="price"
					placeholder="Price"
					keyboardType="numeric"
					maxLength={8}
					width={120}
				/>
				<AppFormPicker
					name="category"
					placeholder="Category"
					items={cats}
					width={"50%"}
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
				/>
				<AppFormField
					name="description"
					placeholder="Description"
					numberOfLines={3}
					multiline
					maxLength={255}
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: { marginTop: 50, padding: 10 },
});
