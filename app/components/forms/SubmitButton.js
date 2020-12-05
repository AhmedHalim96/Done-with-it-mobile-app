import { useFormikContext } from "formik";
import React from "react";
import Btn from "../Btn";

const SubmitButton = ({ title, ...otherProps }) => {
	const { handleSubmit } = useFormikContext();
	return <Btn title={title} onPress={handleSubmit} {...otherProps} />;
};

export default SubmitButton;
