import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNoticeBar() {
	const netInfo = useNetInfo();
	if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>You have no Intenet Connection</AppText>
			</View>
		);
	}

	return null;
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: "100%",
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		marginTop: Constants.statusBarHeight,
		// position: "absolute",
		zIndex: 1,
	},
	text: {
		color: colors.white,
	},
});
