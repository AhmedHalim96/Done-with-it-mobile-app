import { Formik } from "formik";
import React from "react";

const AppForm = ({ initialValues, onSubmit, valdiationSchema, children }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={valdiationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default AppForm;
