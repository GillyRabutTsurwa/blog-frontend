import { fetchPosts } from ".";

function capitalise(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function filterPosts<T>(category: string): Promise<T[]> {
    const posts = await fetchPosts();
    const filteredPosts = posts.filter((currentPost: any) => currentPost.categories.includes(capitalise(category)));
    console.log(filteredPosts);
    return filteredPosts;
}

export default defineEventHandler(async (event: H3Event) => {
    console.log(await filterPosts(event.context.params?.category));
    return await filterPosts<object>(event.context?.params.category);
});

// NOTE: code works great
