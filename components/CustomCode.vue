<script setup>
import hljs from "highlight.js";
// import "../node_modules/highlight.js/styles/night-owl.css";
import "@/node_modules/highlight.js/styles/base16/atelier-seaside.css";


const props = defineProps({
    code: {
        type: String, //NOTE: oops, forgot to revert it to String
        // required: true,
    },
    language: {
        type: String
    }
});
useHead({
    // script: [{ innerHTML: 'hljs.highlightAll();' }]
});
onMounted(() => {
    hljs.highlightAll();
})
console.log(props);
</script>

<template>
    <span class="indicator">{{ props.language }}</span>
    <pre>
        <code :class="`language-${props.language}`">{{ props.code }}</code>
    </pre>
</template>
  
<style lang="scss" scoped>
.indicator {
    position: relative;
    left: 90%;
    top: 5.5rem;
    color: whitesmoke;
}
</style>