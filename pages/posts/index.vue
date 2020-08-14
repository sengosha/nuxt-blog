<template>
  <div class="posts-page">
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
    console.log("asyncData running in posts!");
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
    }, 3000);
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
