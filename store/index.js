import Vuex from "vuex";
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null;
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
        return this.$axios.$post('https://nuxt-blog-bb323.firebaseio.com/post.json?auth=' + vuexContext.state.token, createdPost)
          .then( data => {
            vuexContext.commit('addPost', {...createdPost, id: data.name})
          })
          .catch(err => console.log(err))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.$put('https://nuxt-blog-bb323.firebaseio.com/post/' +
          editedPost.id +
          '.json?auth=' + vuexContext.state.token, editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost);
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey
        if(!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          process.env.fbAPIKey
        }
        return this.$axios.$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        ).then(result => {
          vuexContext.commit('setToken', result.idToken);
          localStorage.setItem("token", result.idToken);
          localStorage.setItem("tokenExpiration", new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
          Cookie.set('jwt', result.idToken);
          Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
        })
        .catch(err => {
          console.log(err);
        });
      },
      initAuth(vuexContext, req) {
        let token;
        let jwtExpirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          //console.log(req);
          console.log(req.headers);
          const jwtCookie = req.headers.cookie
          .split(';')
          .find( c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split('=')[1];
          jwtExpirationDate = req.headers.cookie
          .split(';')
          .find( c => c.trim().startsWith('expirationDate='))
          .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          jwtExpirationDate = localStorage.getItem("tokenExpiration");
        }

        if ( new Date().getTime() > +jwtExpirationDate || !token) {
          console.log('No token or invalid token');
          vuexContext.commit('clearToken');
          return;
        }
        vuexContext.commit("setToken", token);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null
      }
    },
  });
};

export default createStore;
