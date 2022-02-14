<template>
	<div><input v-model="search" type="text" /> <button type="button">Search</button></div>
</template>

<script>
export default {
	name: "Header",
    data() {
        return {
            search: '',
        }
    }
};
</script>

<style>
</style>