<template>
	<div id="app">
		<Header />
		<main>
			<Products :products="products" />
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

			axios.get(`${url}/search/movie?`, config).then((res) => {
				this.products = res.data.results;
				console.log(this.products);
			});
		},
	},
	mounted() {
		this.getProducts(this.url);
	},
};
</script>