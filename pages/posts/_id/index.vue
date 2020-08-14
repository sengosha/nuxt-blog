<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPosts.updateDate }}</div>
        <div class="post-detail">{{ loadedPosts.author }}</div>
      </div>
      <p>{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
      </p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          id: "1",
          title: "This is first post (ID: " + context.params.id + " )",
          previewText: "This is preview text",
          author: "Leo Yu",
          updateDate: new Date(),
          content: "some dummy text in this post",
          thumbnail:
            "https://assets.media-platform.com/gizmodo/dist/images/2020/03/24/200323_quasartsunamis_top-w1280.jpg",
        },
      });
    }, 1000);
  },
};
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
