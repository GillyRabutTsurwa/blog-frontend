<script setup></script>

<template>
  <div class="picture-category__category">
    <h4 class="picture-category__category--title">NewsLetter</h4>
    <p>My newsletter is still under construction, but if you would like to stay in touch with my blog posts, or just
      show some support, subscribe. In the meantime, read my blogs and follow me on my socials.</p>
    <form action="">
      <input type="text" name="" placeholder="Name">
      <input type="email" name="" id="" placeholder="E-mail">
      <textarea name="" id="" cols="30" rows="10" placeholder="Message (Optional)"></textarea>
      <button type="submit" class="button-secondary">Subscribe</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
  padding: 1rem 9rem;
}

form {
  display: flex;
  flex-direction: column;

  input,
  textarea {
    font-size: 1.5rem;
    color: #13113a;
    padding: 1.5rem;
    margin-bottom: 2rem;

    &:focus {
      outline: none;
      border-color: #13113a;
    }
  }


  input {
    height: 5rem;
  }


  button {
    align-self: center;
    font-size: 1.6rem;
  }
}
</style>
