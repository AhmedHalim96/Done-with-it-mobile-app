import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	Button,
	Modal,
	StyleSheet,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import appStyles from "../config/appStyles";
import colors from "../config/colors";
import AppPickerItem from "./AppPickerItem";
import AppText from "./AppText";
import ListItemSeperator from "./lists/ListItemSeperator";
import Screen from "./Screen";

const AppPicker = ({ icon, items, placeholder, selected, onSelect }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setShowModal(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={colors.medium}
							style={styles.icon}
						/>
					)}
					<AppText
						style={{
							flex: 1,
							color: selected && selected.label ? colors.black : colors.medium,
						}}
					>
						{selected && selected.label ? selected.label : placeholder}
					</AppText>
					<MaterialCommunityIcons
						name={"chevron-down"}
						size={20}
						color={colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>

			<Modal visible={showModal} animationType={"slide"}>
				<Screen>
					<FlatList
						data={items}
						keyExtractor={item => item.value.toString()}
						renderItem={({ item }) => (
							<AppPickerItem
								label={item.label}
								onPress={() => {
									onSelect(item);
									setShowModal(false);
								}}
							/>
						)}
						ItemSeparatorComponent={ListItemSeperator}
					/>
				</Screen>
			</Modal>
		</>
	);
};

export default AppPicker;

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
	text: {
		flex: 1,
	},
});
