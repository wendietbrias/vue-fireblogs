<script>
import { TwitterLine, InstagramLine, LinkedinLine } from "vue-icon-packs/ri";
</script>

<template>
  <footer class="footer">
    <div class="footer-services-links">
      <div class="footer-services-links__brand">
        <h2>FireBlogs</h2>
        <div class="media-sosial">
          <button>F</button>
          <button>T</button>
          <button>L</button>
        </div>
      </div>
      <ul class="links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Blogs</a></li>
        <li><a href="/">Create Post</a></li>
      </ul>
    </div>
    <h6>copyright 2020/2021 @wentbrias</h6>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background-color: #101010;
  color: #fff;
  padding: 3rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer h6 {
  font-weight: 300;
  font-size: 0.95em;
}

.footer-services-links {
  display: flex;
  align-items: center;
}

.media-sosial {
  margin-top: 20px;
}

.media-sosial button {
  background-color: rgb(255, 255, 255);
  color: #101010;
  border: none;
  font-weight: 600;
  font-size: 1.1em;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-right: 10px;
}

.links {
  list-style: none;
  margin-left: 120px;
}

.links li {
  margin: 12px 0;
}

.links li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.1em;
}
</style>
