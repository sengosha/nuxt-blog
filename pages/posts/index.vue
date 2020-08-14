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
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
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
      // reject(new Error());
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(e);
      });
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
