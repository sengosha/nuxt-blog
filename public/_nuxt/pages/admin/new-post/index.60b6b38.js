(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{228:function(t,e,n){"use strict";n.r(e);n(53),n(23),n(24),n(16),n(37);var o=n(22),r=n(99),c=n(98);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{AppControlInput:r.default,AppButton:c.default},props:{post:{type:Object,required:!1}},data:function(){return{editedPost:this.post?d({},this.post):{author:"",title:"",thumbnail:"",content:"",previewText:""}}},methods:{onSave:function(){console.log(this.editedPost),this.$emit("submit",this.editedPost)},onCancel:function(){this.$router.push("/admin")}}},m=n(2),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSave(e)}}},[n("AppControlInput",{model:{value:t.editedPost.author,callback:function(e){t.$set(t.editedPost,"author",e)},expression:"editedPost.author"}},[t._v("Author Name")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.title,callback:function(e){t.$set(t.editedPost,"title",e)},expression:"editedPost.title"}},[t._v("Title")]),t._v(" "),n("AppControlInput",{model:{value:t.editedPost.thumbnail,callback:function(e){t.$set(t.editedPost,"thumbnail",e)},expression:"editedPost.thumbnail"}},[t._v("Thumbnail Link")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.content,callback:function(e){t.$set(t.editedPost,"content",e)},expression:"editedPost.content"}},[t._v("\n    Content\n  ")]),t._v(" "),n("AppControlInput",{attrs:{"control-type":"textarea"},model:{value:t.editedPost.previewText,callback:function(e){t.$set(t.editedPost,"previewText",e)},expression:"editedPost.previewText"}},[t._v("\n    Preview Text\n  ")]),t._v(" "),n("AppButton",{attrs:{type:"submit"}},[t._v("Save")]),t._v(" "),n("AppButton",{staticStyle:{"margin-left":"10px"},attrs:{type:"button","btn-style":"cancel"},on:{click:t.onCancel}},[t._v("\n    Cancel\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppControlInput:n(99).default,AppButton:n(98).default})},234:function(t,e,n){var content=n(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("b106451a",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";var o=n(234);n.n(o).a},249:function(t,e,n){(e=n(10)(!1)).push([t.i,".new-post-form[data-v-7ec8c884]{width:90%;margin:20px auto}@media (min-width:768px){.new-post-form[data-v-7ec8c884]{width:500px}}",""]),t.exports=e},262:function(t,e,n){"use strict";n.r(e);n(49);var o={layout:"admin",middleware:["check-auth","auth"],components:{AdminPostForm:n(228).default},methods:{onSubmitted:function(t){var e=this;this.$store.dispatch("addPost",t).then((function(){e.$router.push("/admin")}))}}},r=(n(248),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"admin-new-post-page"},[e("section",{staticClass:"new-post-form"},[e("AdminPostForm",{on:{submit:this.onSubmitted}})],1)])}),[],!1,null,"7ec8c884",null);e.default=component.exports;installComponents(component,{AdminPostForm:n(228).default})}}]);