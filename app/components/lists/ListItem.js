import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";

const ListItem = ({
	title,
	subtitle,
	image,
	IconComponent,
	onPress,
	rightActions,
}) => {
	return (
		<Swipeable renderRightActions={rightActions}>
			<TouchableHighlight onPress={onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subtitle && (
							<AppText style={styles.subtitle}>
								{subtitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						color={colors.medium}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		// flexBasis: "20%", // width: "100%",
		width: 70,
		height: 70,
		resizeMode: "cover",
		borderRadius: 35,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",

		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: "500",
	},
	subtitle: {
		fontSize: 12,
		color: colors.medium,
	},
});
