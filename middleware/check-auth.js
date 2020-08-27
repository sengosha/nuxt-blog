export default function (context) {
  console.log("[Middleware] Check Auth");
  //console.log(context.req);
  context.store.dispatch("initAuth", context.req);
}