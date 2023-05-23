import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
    name: "staging",
    title: "Staging",

    projectId: "g014cs9v",
    dataset: "staging",

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
