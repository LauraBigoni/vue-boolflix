<template>
	<div>
		<input v-model="search" type="text" @keyup.enter="showProducts"/>
		<button type="button" @click="showProducts">Search</button>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: ["products"],
	data() {
		return {
			search: "",
		};
	},
	methods: {
		showProducts() {
            const filteredProducts = [];
            // this.products.forEach((el) => {
            //     if (filteredProducts.includes(el)) {
            //         filteredProducts.push(el);
            //     }
            // });
            console.log(this.search);
            return filteredProducts;
		},
	},
};
</script>

<style>
</style>