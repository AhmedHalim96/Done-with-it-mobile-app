import React from "react";
import { useFormikContext } from "formik";
import { View, Text } from "react-native";

import ErrorMssage from "./ErrorMssage";
import AppPicker from "../AppPicker";

const cats = [
	{
		label: "Furniture",
		value: 1,
	},
	{
		label: "Clothes",
		value: 2,
	},
	{
		label: "Electronics",
		value: 3,
	},
];

const AppFormPicker = ({ name }) => {
	const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

	return (
		<>
			<AppPicker
				placeholder="Category"
				items={cats}
				onSelect={item => console.log(object)}
			/>
			<ErrorMssage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormPicker;
