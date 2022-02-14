<template>
	<div id="app">
		<Header :products="products" />
		<main>
			<Products :products="products" isLoading="isLoading" />
		</main>
	</div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Products from "./components/Products.vue";

export default {
	name: "App",
	components: {
		Header,
		Products,
	},
	data() {
		return {
			isLoading: false,
			products: [],
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
					query: this.query,
					language: "it-IT",
				},
			};
			this.isLoading = true;
			axios.get(`${url}/search/movie?`, config).then((res) => {
				this.products = res.data.results;
				this.isLoading = false;
				console.log(this.products);
			});
		},
	},
	mounted() {
		this.getProducts(this.url);
	},
};
</script>