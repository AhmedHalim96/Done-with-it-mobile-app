import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import LottiView from "lottie-react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

const UploadScreen = ({ progress, visible = false, onDone }) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				) : (
					<LottiView
						source={require("../assets/animations/done.json")}
						loop={false}
						autoPlay
						style={styles.animation}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
};

export default UploadScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	animation: {
		width: 150,
	},
});
