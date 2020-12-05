import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import appStyles from "../config/appStyles";
import colors from "../config/colors";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={colors.medium}
					style={styles.icon}
				/>
			)}
			<TextInput style={styles.textInput} {...otherProps} />
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "96%",
		alignSelf: "center",
		alignItems: "baseline",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 5,
	},
	textInput: { ...appStyles.text, flex: 1 },
});
