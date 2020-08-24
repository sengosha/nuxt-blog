import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/post.json')
          .then( data => {
            const postArray = [];
            for(const key in data){
              postArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postArray)
          })
          .catch( e => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updateDate: new Date()
        }
        return this.$axios.$post('https://nuxt-blog-bb323.firebaseio.com/post.json', createdPost)
          .then( data => {
            vuexContext.commit('addPost', {...createdPost, id: data.name})
          })
          .catch(err => console.log(err))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('https://nuxt-blog-bb323.firebaseio.com/post/' +
          editedPost.id +
          '.json', editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
