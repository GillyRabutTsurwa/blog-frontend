<script setup>
const container = ref(null); //NOTE: template ref for addressing form styles
const credentials = reactive({
    signUpEmail: "",
    signUpPassword: "",
    loginEmail: "",
    loginPassword: ""

})

const supabase = useSupabaseClient(); //IMPORTANT: works now after changing script to script setup
console.log(supabase);

const router = useRouter();
console.log(router);


const signUp = async () => {
    console.log("signup");
    const { user, error } = await supabase.auth.signUp({
        email: credentials.signUpEmail,
        password: credentials.signUpPassword
    });
    console.log(user);
    console.log(error);
    if (!error) router.back();
}

const login = async () => {
    console.log("login");
    const { user, error } = await supabase.auth.signInWithPassword({
        email: credentials.loginEmail,
        password: credentials.loginPassword
    });
    console.log(user);
    console.log(error);
    if (!error) router.back();
}

const addRightPanel = () => {
    container.value.classList.add("right-panel-active")
}

const removeRightPanel = () => {
    container.value.classList.remove("right-panel-active")
}
</script>

<template>
    <div class="container" id="container" ref="container">
        <div class="form-container sign-up-container">
            <form @submit.prevent="signUp" netlify>
                <h1 style="margin-bottom: 2rem;">Create Login</h1>
                <!-- hide for now -->
                <div class="social-container" style="display: none; visibility: hidden;">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span style="display: none; visibility: hidden;">or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" required v-model="credentials.signUpEmail" />
                <input type="password" placeholder="Password" required v-model="credentials.signUpPassword" />
                <div class="newsletter"
                    style="display: grid; grid-template-columns: min-content 1fr; width: 100%; align-items: center;">
                    <input type="checkbox" name="newsletter" id="newsletter">
                    <label for="newsletter" style="font-size: 1.4rem; justify-self: start; margin-left: 2rem;">Subscribe to
                        my weekly
                        newsletter</label>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form @submit.prevent="login">
                <h1 style="margin-bottom: 2rem;">Sign in</h1>
                <!-- also hide for now: -->
                <div class="social-container" style="display: none; visibility: hidden;">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span style="display: none; visibility: hidden;">or use your account</span>
                <input type="email" placeholder="Email" v-model="credentials.loginEmail" />
                <input type="password" placeholder="Password" v-model="credentials.loginPassword" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1 style="margin-bottom: 2rem;">Welcome Back</h1>
                    <p style="margin-bottom: 2rem;">Sign in with your credentials and enjoy the blog posts</p>
                    <button class="ghost" id="signIn" @click="removeRightPanel">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1 style="margin-bottom: 2rem;">Register</h1>
                    <p style="margin-bottom: 2rem;">Sign up to get access to <strong>all</strong> my posts</p>
                    <button class="ghost" id="signUp" @click="addRightPanel">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #07343f;
    background-color: #07343f;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    /* background-color: transparent;
    border-color: #FFFFFF; */
    background-color: #fefefe;
    color: #07343f;
}

form {
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    width: 100%;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-size: 1.6rem;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    /* width: 768px; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-width: 100%;
    min-height: 480px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: #07343f;
    background-image: -webkit-linear-gradient(to right, #1a2934, #07343f);
    background-image: linear-gradient(to right, #1a2934, #07343f);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
</style>
