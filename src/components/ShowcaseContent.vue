<template>
    <div 
        class="showcase-content"
        v-html="content"
    />
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style>

</style>
