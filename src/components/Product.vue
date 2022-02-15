<template>
	<div>
		<ul>
			<li>Titolo: {{ item.title || item.name }}</li>
			<li>Titolo originale: {{ item.original_title || item.original_name }}</li>
			<li>
				Lingua:
				<img
					v-if="countries.includes(item.original_language)"
					:src="setFlag"
					:alt="item.title"
				/>
				<span v-else>{{ item.original_language }}</span>
			</li>
			<li>
				<img v-if="item.poster_path" :src="setPoster" :alt="item.title" />
				<img v-else :src="setAlternativePoster" :alt="item.title" />
			</li>
			<li id="stars">
				<i
					v-for="i in 5"
					:key="i"
					class="fa-star"
					:class="i <= setStar ? 'fa-solid' : 'fa-regular'"
				></i>
			</li>
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
			baseUri: "http://image.tmdb.org/t/p/w342",
			vote: this.item.vote_average,
		};
	},
	computed: {
		setFlag() {
			return require(`@/assets/img/${this.item.original_language}.png`);
		},
		setPoster() {
			let imgPath = `${this.baseUri}${this.item.poster_path}`;
			return imgPath;
		},
		setAlternativePoster() {
			return require(`@/assets/img/no-image.png`);
		},
		setStar() {
			let stars = Math.ceil(this.vote / 2);
			return stars;
		},
	},
};
</script>

<style lang="scss" scoped>

</style>