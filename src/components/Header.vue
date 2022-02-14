<template>
	<div>
		<input v-model="search" type="text" @keyup.enter="getProducts(url)" placeholder="Cerca un film o una serie tv"/>
		<button type="button" @click="getProducts(url)">Search</button>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Header",
    props: ['products'],
	data() {
		return {
			search: "",
			query: "games",
			api_key: "ece01f3d6f847a6a0a09dbc6ab4a4aac",
			url: "https://api.themoviedb.org/3",
		};
	},
	methods: {
		getProducts(url) {
			const config = {
				params: {
					api_key: this.api_key,
					query: this.search,
					language: "it-IT",
				},
			};
			this.isLoading = true;
			axios.get(`${url}/search/movie?`, config).then((res) => {
				this.$emit('fetch-products', res.data.results);
				this.isLoading = false;
			});
		},
	},
};
</script>

<style>
</style>