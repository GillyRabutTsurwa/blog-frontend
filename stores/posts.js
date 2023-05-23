import { defineStore } from "pinia";
import { createClient } from "@sanity/client";

export const client = createClient({
    name: "default",
    title: "blog",
    projectId: "g014cs9v",
    dataset: "staging",
    apiVersion: "2021-10-21",
});

export const usePostsStore = defineStore("posts", {
    state: () => {
        return {
            posts: [],
            filteredPosts: [],
        };
    },
    actions: {
        async fetchPosts() {
            const query = groq`*[_type == "personal-post"]`;
            const posts = await client.fetch(query);

            this.posts = posts;
            this.filteredPosts = posts; //NOTE; filtered posts will initially show all the posts
            console.log(this.posts);
        },
        async filterPosts(category) {
            await this.fetchPosts();
            this.filteredPosts = this.posts.filter((currentPost) => currentPost.categories.includes(category));
        },
    },
});
