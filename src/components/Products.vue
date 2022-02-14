<template>
	<div>
		<h3>Cerca qualcosa...</h3>
		<ul>
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
export default {
	name: "Products",
	props: ["products"],
};
</script>

<style>
</style>