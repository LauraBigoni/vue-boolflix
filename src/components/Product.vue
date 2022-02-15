<template>
	<div>
		<ul>
			<li>Titolo: {{ item.title || item.name }}</li>
			<li>Titolo originale: {{ item.original_title || item.original_name }}</li>
			<li>
				Lingua:
				<img
					v-if="countries.includes(item.original_language)"
					:src="giveFlag"
					:alt="item.title"
				/>
				<span v-else>{{ item.original_language }}</span>
			</li>
			<li>Voto: {{ item.vote_average }}</li>
			<li><img :src="givePoster" :alt="item.id" /></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Products",
	components: {},
	props: ["item"],
	data() {
		return {
			countries: ["it", "en"],
			baseUri: "http://image.tmdb.org/t/p/w342/",
		};
	},
	computed: {
		giveFlag() {
			return require(`@/assets/img/${this.item.original_language}.png`);
		},
		givePoster() {
			let imgPath = `${this.baseUri}${this.item.poster_path}`;
			return imgPath;
		},
	},
};
</script>

<style>
</style>