import { createClient } from "@sanity/client";

const config = useRuntimeConfig();
const client = createClient({
    projectId: config.public.sanity.projectId,
    dataset: config.public.sanity.dataset,
});

export async function fetchPosts() {
    const query = groq`*[_type == "personal-post"]`;
    const posts = await client.fetch(query);
    return posts;
}

fetchPosts();

export default defineEventHandler(() => {
    return fetchPosts();
});
