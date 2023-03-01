<template>
  <header class="header">
    <figure class="header__logo">
      <NuxtLink to="/">
        <img src="../assets/img/svg/my-logo.svg" alt="">
      </NuxtLink>
    </figure>
    <nav class="header__navigation">
      <ul class="header__navigation-list">
        <li>
          <NuxtLink to="/">Go Back</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tech/posts">Tech Posts</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/personal/posts">Personal Posts</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  /* height: 6rem;
  background-color: #1a2934; */
}

.header__navigation {}

.header__navigation ul {
  list-style: none;
  display: flex;
}

.header__navigation ul li {
  margin-left: 1.5rem;
}

.header__navigation ul li a,
.header__navigation ul li a:link,
.header__navigation ul li a:visited {
  color: currentColor;
  text-decoration: none;
}



figure {
  width: 11rem;
  height: 11rem;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>