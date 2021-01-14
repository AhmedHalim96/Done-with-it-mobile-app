import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListings = (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("description", listing.description);
	data.append("categoryId", listing.category.value);

	listing.images.forEach((uri, index) => {
		data.append("images", {
			name: "image" + index,
			type: "image/jpeg",
			uri,
		});
	});

	if (listing.location)
		data.append("location", JSON.stringify(listing.location));

	return client.post(endpoint, data, {
		onUploadProgress: progress =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

// client.post(endpoint, data)};

export default {
	getListings,
	addListings,
};
