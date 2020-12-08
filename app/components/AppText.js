import React from "react";
import { Text } from "react-native";
import appStyles from "../config/appStyles";

const AppText = ({ children, style, ...otherProps }) => {
	return (
		<Text style={[appStyles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
};

export default AppText;
