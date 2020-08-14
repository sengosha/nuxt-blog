<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "This is first post",
            previewText: "This is preview text",
            thumbnail:
              "https://assets.media-platform.com/gizmodo/dist/images/2020/03/24/200323_quasartsunamis_top-w1280.jpg",
          },
          {
            id: "2",
            title: "This is second post",
            previewText: "This is 2th preview text",
            thumbnail:
              "https://assets.media-platform.com/gizmodo/dist/images/2020/03/24/200323_quasartsunamis_top-w1280.jpg",
          },
          {
            id: "3",
            title: "This is third post",
            previewText: "This is 3rd preview text",
            thumbnail:
              "https://assets.media-platform.com/gizmodo/dist/images/2020/03/24/200323_quasartsunamis_top-w1280.jpg",
          },
        ],
      });
    }, 1000);
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  created() {},
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/main-page-background.jpg");
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
