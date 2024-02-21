<script>
import FilterData from './FilterData.vue';


export default {
    name: 'AppMain',
    components: { FilterData }
}
</script>
 
<template>
    <main>
        <FilterData></FilterData>
    </main>
</template>
 
<style scoped>
main {
    background-color: var(--bflix-gray);
}
</style>