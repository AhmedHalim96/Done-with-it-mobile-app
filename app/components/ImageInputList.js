import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View, _ScrollView } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri, index) => (
						<View style={{ marginRight: 5 }}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
								key={toString(index)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={uri => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginLeft: 5,
	},
});
