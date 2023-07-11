<script setup>
const props = defineProps({
    code: {
        type: Object,
        // required: true,
    },
    language: {
        type: String
    }
});
// const codeNode = computed(() => {
//     return props.block.code;
// });
// console.log(codeNode.value);
console.log(props);
</script>

<template>
    <pre>
      <code :class="`language-${props.language}`">{{ props.code }}</code>
    </pre>
    <slot></slot>
</template>
  
  