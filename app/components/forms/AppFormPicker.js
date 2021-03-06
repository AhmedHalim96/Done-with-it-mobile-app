import React from "react";
import { useFormikContext } from "formik";
import { View, Text } from "react-native";

import ErrorMssage from "./ErrorMssage";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
	name,
	items,
	placeholder,
	numberOfColumns,
	width,
	PickerItemComponent,
}) => {
	const { values, errors, touched, setFieldValue } = useFormikContext();

	return (
		<>
			<AppPicker
				placeholder={placeholder}
				items={items}
				onSelect={item => setFieldValue(name, item)}
				selected={values[name]}
				numberOfColumns={numberOfColumns}
				width={width}
				PickerItemComponent={PickerItemComponent}
			/>
			<ErrorMssage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormPicker;
