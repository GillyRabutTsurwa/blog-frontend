import { computed, onMounted, onUnmounted, ref } from "vue";
export const useBreakpoints = () => {
    if (process.client) {
        // function useBreakpoints() {
        const windowWidth = ref(window.innerWidth);

        const onWidthChange = () => (windowWidth.value = window.innerWidth);
        onMounted(() => window.addEventListener("resize", onWidthChange));
        onUnmounted(() => window.removeEventListener("resize", onWidthChange));

        const width = computed(() => windowWidth.value);

        return { width };
    }
};
