import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
    name: "default",
    title: "blog",

    projectId: "g014cs9v",
    dataset: import.meta.env.VITE_SANITY_ENV,

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
