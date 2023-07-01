const config = useRuntimeConfig();

async function fetchInstaPosts() {
    const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_type,media_url,username&access_token=${config.instagramAPIKey}`
    );
    const instaPosts = await response.json();
    return instaPosts;
}

export default defineEventHandler((event) => {
    return fetchInstaPosts();
});
