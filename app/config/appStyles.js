import { Platform } from "react-native";
import colors from "./colors";

export default appStyles = {
	text: {
		color: colors.dark,
		fontSize: 16,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
