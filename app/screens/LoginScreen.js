import React, {useState} from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import {
	AppForm,
	AppFormField,
	SubmitButton,
	ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import colors from "../config/colors";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";


const valdiationSchema = Yup.object().shape({
	email: Yup.string().email().label("Email").required(),
	password: Yup.string().label("Password").min(4).required(),
});

const LoginScreen = () => {
	const auth = useAuth()
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		auth.login(result.data)
	}

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo-red.png")} />

			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				valdiationSchema={valdiationSchema}
			>
				<ErrorMessage
					error="Invalid email and/or password."
					visible={loginFailed}
				/>
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

				<SubmitButton title="Login" color={colors.primary} />
			</AppForm>
		</Screen>
	);
};

export default LoginScreen;

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
