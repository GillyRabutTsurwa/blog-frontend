import { defineStore } from "pinia";
import { client } from "~/sanity.client.vite";

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
