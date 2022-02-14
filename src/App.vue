<template>
	<div id="app">
		<Header @fetch-products="showProducts" />
		<main>
			<Products :isLoading="isLoading" />
		</main>
	</div>
</template>

<script>
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
		};
	},
	methods: {
		showProducts(products) {
			this.products = products;
			console.log(this.products);
		},
	},
};
</script>