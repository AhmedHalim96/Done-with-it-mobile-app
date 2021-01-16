import React, { useState } from "react";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
	AppForm,
	AppFormField,
	ErrorMessage,
	SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

const valdiationSchema = Yup.object().shape({
	email: Yup.string().email().label("Email").required(),
	password: Yup.string().label("Password").min(4).required(),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});

const RegisterScreen = () => {
	const auth = useAuth();
	const [error, setError] = useState();
	const registerApi = useApi(authApi.register);
	const loginApi = useApi(authApi.login);

	const handleRegister = async userInfo => {
		const res = await registerApi.request(userInfo);

		if (!res.ok) {
			if (res.data) setErrorMessage(res.data.error);
			else {
				setError("unexpected error!");
				console.log(res);
			}
			return;
		}
		const { data: authToken } = await loginApi(
			userInfo.email,
			userInfo.password
		);

		auth.login(authToken);
	};
	return (
		<>
			<ActivityIndicator visible={registerApi.loading || loginApi.loading} />
			<Screen style={styles.container}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />

				<AppForm
					initialValues={{ email: "", password: "", confirmPassword: "" }}
					onSubmit={handleRegister}
					valdiationSchema={valdiationSchema}
				>
					<ErrorMessage error={error} visible={err} />
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
		</>
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
