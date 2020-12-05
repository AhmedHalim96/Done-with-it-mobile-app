import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

const ListItemSeperator = () => {
	return <View style={styles.seperator} />;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
	seperator: { width: "100%", height: 1, backgroundColor: colors.light },
});
