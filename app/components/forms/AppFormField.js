import { useFormikContext } from "formik";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import AppTextInput from "../AppTextInput";
import ErrorMssage from "./ErrorMssage";

const AppFormField = ({ name, width, ...otherProps }) => {
	const {
		setFieldTouched,
		setFieldValue,
		values,
		handleChange,
		errors,
		touched,
	} = useFormikContext();
	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={text => setFieldValue(name, text)}
				placeholderTextColor={colors.medium}
				value={values[name]}
				width={width}
				{...otherProps}
			/>
			<ErrorMssage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormField;
