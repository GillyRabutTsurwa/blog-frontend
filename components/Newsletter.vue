<script setup></script>

<template>
  <div class="picture-category__category">
    <h4 class="picture-category__category--title">NewsLetter</h4>
    <form action="">
      <input type="text" name="" id="" placeholder="E-mail">
      <button type="submit" class="button-secondary" disabled>Subscribe</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  input {
    // outline: none;
    // border-radius: none;
    font-size: 1.5rem;
    color: #13113a;
    padding: 0 1.5rem;
    height: 5rem;

    &:focus {
      outline: none;
      border-color: #13113a;
    }
  }
}
</style>
