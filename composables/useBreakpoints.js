import { ref } from "vue";
export const useBreakpoints = () => {
    const showElement = ref(null);
    // IMPORTANTNOTE: this function MUST run client side
    const toggleElementOnResize = (breakpointInPx, maxOrMinWidth = "max-width") => {
        const mediaQueryList = window.matchMedia(`(${maxOrMinWidth}: ${breakpointInPx}px)`);

        if (mediaQueryList.matches) {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "max" : "min"} ${breakpointInPx}px`);
            showElement.value = true;
        } else {
            console.log(`Window is ${maxOrMinWidth === "max-width" ? "over" : "under"} ${breakpointInPx}px`);
            showElement.value = false;
        }
        console.log(showElement.value);
    };

    return {
        showElement: showElement,
        toggleElementOnResize: toggleElementOnResize,
    };
};
