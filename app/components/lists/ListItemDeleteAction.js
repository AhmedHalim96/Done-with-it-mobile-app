import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.danger,
		width: 70,
		height: "100%",
	},
});
