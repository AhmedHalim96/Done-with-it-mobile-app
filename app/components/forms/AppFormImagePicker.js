import React from "react";
import { useFormikContext } from "formik";
import ErrorMssage from "./ErrorMssage";
import ImageInputList from "../ImageInputList";
const AppFormImagePicker = ({ name }) => {
	const { values, errors, touched, setFieldValue } = useFormikContext();
	const handleAdd = uri => setFieldValue(name, [...values[name], uri]);
	const handleRemove = uri =>
		setFieldValue(
			name,
			values[name].filter(imageUri => imageUri != uri)
		);

	return (
		<>
			<ImageInputList
				imageUris={values[name]}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>

			<ErrorMssage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormImagePicker;
