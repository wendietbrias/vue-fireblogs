<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ButtonVue from "../components/Button.vue";

export default {
  data() {
    return {
      blogs: [],
      user: this.$store.state.auth,
    };
  },
  components: { Navbar, ButtonVue, Footer },
};
</script>
<template>
  <div class="container-home">
    <Navbar />
    <section v-if="!user" class="container-home__welcome-banner">
      <div class="welcome-banner__text">
        <div class="welcome-banner__text-content">
          <h3>WELCOME!</h3>
          <p>
            Weekly blog articles with all things<br />
            programming including HTML, CSS, JavaScript <br />
            and more. Register today to never miss a post
          </p>
          <ButtonVue title="Login / Register" page="/auth" />
        </div>
      </div>
      <img src="images/coding.jpg" alt="coding" class="welcome-banner__img" />
    </section>
    <section class="container-home__post-item">
      <img src="images/vue.png" class="post-item__img" />
      <div class="post-item__text">
        <div class="post-item__text-content">
          <h2>
            DYNAMIC PAGE <br />
            TITLES WITH THE <br />
            VUE ROUTER
          </h2>
          <p>In this video we take a look at creat...</p>
          <ButtonVue title="View Post" page="/" />
        </div>
      </div>
    </section>
    <section class="container-home__post-item">
      <div class="post-item__text">
        <div class="post-item__text-content">
          <h2>
            CSS <br />
            TRANSFORM: <br />
            SKEWY | CREATE<br />
            A <br />
            SLANTED/SKEWED <br />
            DIV
          </h2>
          <p>In this video we take a look at creat..</p>
          <ButtonVue title="View Post" page="/" />
        </div>
      </div>
      <img src="images/animated.png" class="post-item__img" />
    </section>
    <section class="home-container__recent-post">
      <h2>View more recent blogs</h2>
    </section>
    <section v-if="!user" class="home-container__banner-login">
      <div class="banner-login__text">
        <h2>
          NEVER MISS A POST. <br />
          REGISTER FOR YOUR <br />
          FREE ACCOUNT <br />
          TODAY!
        </h2>
      </div>
      <button class="banner-login__btn">Login / Register</button>
    </section>
    <Footer />
  </div>
</template>
<style scoped>
.home-container__recent-post {
  background-color: rgb(239, 239, 239);
  padding: 4rem 3rem;
}

.home-container__recent-post h2 {
  font-weight: 400;
  font-size: 1.6em;
  text-transform: capitalize;
}

.container-home__welcome-banner {
  width: 100%;
  display: flex;
  align-items: stretch;
}

.welcome-banner__text {
  width: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141624;
  color: #fff;
}

.welcome-banner__text h3 {
  font-size: 2.3em;
  font-weight: 500;
}

.welcome-banner__text p {
  font-size: 0.88em;
  line-height: 26px;
  margin: 14px 0 25px;
}

.welcome-banner__img {
  width: 58%;
  object-fit: cover;
  min-height: 90vh;
}

.welcome-banner__text-content .button-navigation {
  color: #fff;
  text-decoration: none;
}

.container-home__post-item {
  display: flex;
  align-items: stretch;
}

.post-item__img {
  width: 55%;
  min-height: 80vh;
}

.post-item__text {
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-item__text-content h2 {
  font-weight: 400;
  font-size: 2.2em;
  line-height: 3rem;
}

.post-item__text-content p {
  margin: 15px 0 25px;
}

.home-container__banner-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 3rem;
}

.banner-login__text h2 {
  font-weight: 300;
  font-size: 2.4em;
  line-height: 55px;
}

.banner-login__btn {
  padding: 1.2rem 1.4rem;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #101010;
  font-weight: 600;
  font-size: 0.9em;

  color: #fff;
}
</style>
