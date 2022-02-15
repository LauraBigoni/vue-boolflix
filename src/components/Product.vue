<template>
	<ul class="list-unstyled d-flex flex-column text-center">
		<li class="poster">
			<img v-if="item.poster_path" :src="setPoster" :alt="item.title" />
			<img v-else :src="setAlternativePoster" :alt="item.title" />
		</li>
		<li><strong>Titolo:</strong> {{ item.title || item.name }}</li>
		<li>
			<strong>Titolo originale:</strong>
			{{ item.original_title || item.original_name }}
		</li>
		<li class="language">
			Country:
			<img
				v-if="countries.includes(item.original_language)"
				:src="setFlag"
				:alt="item.title"
			/>
			<span v-else>{{ item.original_language.toUpperCase() }}</span>
		</li>
		<li id="stars">
			<strong>Voto:</strong>
			<i
				v-for="i in 5"
				:key="i"
				class="fa-star"
				:class="i <= setStar ? 'fa-solid' : 'fa-regular'"
			></i>
		</li>
		<li>{{ item.overview || 'Nessuna descrizione disponibile...' }}</li>
	</ul>
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
.fa-star {
	color: rgb(236, 201, 41);
}
</style>