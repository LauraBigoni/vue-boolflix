<template>
	<div>
		<input
			v-model="search"
			type="text"
			@keyup.enter="getProducts()"
			:placeholder="placeholder || 'Cerca qualcosa..'"
		/>
		<button type="button" @click="getProducts()">Search</button>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Header",
	props: [ "placeholder"],
	data() {
		return {
			search: "",
			query: "games",
			api_key: "ece01f3d6f847a6a0a09dbc6ab4a4aac",
			url: "https://api.themoviedb.org/3",
		};
	},
	methods: {
		fetchApi(endpoint, config, target) {
			axios
				.get(`${this.url}/${endpoint}`, config)
				.then((res) => {
					this.$emit(`fetch-${target}`, res.data.results, target);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		getProducts() {
			const config = {
				params: {
					api_key: this.api_key,
					query: this.search,
					language: "it-IT",
				},
			};
			this.fetchApi("search/movie", config, "products");
			this.fetchApi("search/tv", config, "series");
		},
	},
};
</script>

<style>
</style>