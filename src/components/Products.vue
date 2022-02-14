<template>
	<div>
		<Loader v-if="isLoading" />
		<ul v-else>
			<li v-for="product in products" :key="product.id">
				<h4>
					Titolo: {{ product.title }} <br />
					Titolo originale: {{ product.original_title }}
				</h4>
				<p>
					Lingua: {{ product.original_language }} <br />
					Voto: {{ product.vote_average }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
import Loader from "./Loader.vue";

export default {
	name: "Products",
	components: {
		Loader,
	},
	props: ["products", "isLoading"],
};
</script>

<style>
</style>