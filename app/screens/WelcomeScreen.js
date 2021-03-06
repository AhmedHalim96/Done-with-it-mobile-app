import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Btn from "../components/Btn";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/background.jpg")}
			style={styles.background}
			blurRadius={10}
		>
			<View style={styles.branding}>
				<Image source={require("../assets/logo-red.png")} style={styles.logo} />
				<Text style={styles.tagline}> sell what you don't need</Text>
			</View>

			<Btn
				title={"login"}
				color={colors.primary}
				onPress={() => navigation.navigate(routes.LOGIN)}
			/>
			<Btn
				title={"Sign up"}
				color={colors.secondary}
				onPress={() => navigation.navigate(routes.REGISTER)}
			/>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	branding: {
		position: "absolute",
		top: 70,
		alignSelf: "center",
		display: "flex",
	},

	logo: {
		width: 100,
		height: 100,
		alignSelf: "center",
		marginBottom: 10,
	},

	tagline: {
		fontSize: 25,
		fontWeight: "600",
	},
});
