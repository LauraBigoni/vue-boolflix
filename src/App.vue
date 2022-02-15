<template>
	<div id="app">
		<Header
			:placeholder="placeholder"
			@fetch-products="showProducts"
			@fetch-series="showProducts"
		/>
		<main>
			<div v-if="products.length && series.length">
				<section id="movies">
					<h2>Movies</h2>
					<Product v-for="movie in products" :key="movie.id" :item="movie" />
				</section>
				<section id="series">
					<h2>Series</h2>
					<Product v-for="serie in series" :key="serie.id" :item="serie" />
				</section>
			</div>
			<h3 v-else>Cerca qualcosa...</h3>
		</main>
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Product from "./components/Product.vue";

export default {
	name: "App",
	components: {
		Header,
		Product,
	},
	data() {
		return {
			placeholder: "Cerca un film o una serie",
			products: [],
			series: [],
		};
	},
	methods: {
		showProducts(items, target) {
			if (!items) {
				this[target] = [];
				return;
			}

			this[target] = items;
		},
	},
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
$main_font: "Segoe UI", "Open Sans", Helvetica, sans-serif;
body {
	font-family: $main_font;
}
</style>