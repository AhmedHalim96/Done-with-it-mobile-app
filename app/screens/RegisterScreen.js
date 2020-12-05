import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import colors from "../config/colors";

const valdiationSchema = Yup.object().shape({
	email: Yup.string().email().label("Email").required(),
	password: Yup.string().label("Password").min(4).required(),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});

const RegisterScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />

			<AppForm
				initialValues={{ email: "", password: "", confirmPassword: "" }}
				onSubmit={values => console.log(values)}
				valdiationSchema={valdiationSchema}
			>
				<AppFormField
					autoCorrect={false}
					autoCapitalize="none"
					icon="email"
					keyboardType="email-address"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
				/>

				<AppFormField
					autoCorrect={false}
					autoCapitalize="none"
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>

				<AppFormField
					autoCorrect={false}
					autoCapitalize="none"
					icon="lock"
					name="confirmPassword"
					placeholder=" Confirm Password"
					secureTextEntry
					textContentType="password"
				/>

				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		alignSelf: "center",
		width: 80,
		height: 80,
		marginTop: 50,
		marginBottom: 20,
	},
});