<template>
	<div id="app">
		<Header
			:placeholder="placeholder"
			@fetch-products="showProducts"
			@fetch-series="showProducts"
		/>
		<main>
			<div class="container">
				<div class="row">
					<div class="col d-flex flex-wrap justify-content-center">
						<div v-if="products.length && series.length">
							<h2 class="text-center pb-5">Movies</h2>
							<section
								id="movies"
								class="d-flex flex-wrap justify-content-around"
							>
								<Product
									class="p-1"
									v-for="movie in products"
									:key="movie.id"
									:item="movie"
								/>
							</section>
							<h2 class="text-center pb-5">Series</h2>
							<section
								id="series"
								class="d-flex flex-wrap justify-content-around"
							>
								<Product
									class="p-1"
									v-for="serie in series"
									:key="serie.id"
									:item="serie"
								/>
							</section>
						</div>
						<h3 v-else class="h1">Cerca qualcosa...</h3>
					</div>
				</div>
			</div>
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
@import "~bootstrap/dist/css/bootstrap.css";
$main_font: "Segoe UI", "Open Sans", Helvetica, sans-serif;
/* Generics */
::-webkit-scrollbar {
	width: 5px;
	height: 5px;
}

::-webkit-scrollbar-thumb {
	background: rgb(194, 0, 0);
	border-radius: 10px;
}

main {
	font-family: $main_font;
	background-color: rgb(71, 71, 71);
	padding-top: 50px;
	height: calc(100vh - 100px);
	overflow-y: scroll;
	color: white;

	.language img {
		height: auto;
		width: 40px;
	}

	.poster img {
		height: 450px;
		width: 300px;
		border-radius: 10px;
		border: 2px solid white;
	}

	li {
		width: 300px;
	}
}
</style>