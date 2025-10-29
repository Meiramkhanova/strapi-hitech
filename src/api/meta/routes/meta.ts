export default {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/meta',
    //  handler: 'meta.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: "GET",
      path: "/meta/content-types",
      handler: "meta.list",
      config: {
        auth: false, // можно потом включить авторизацию при необходимости
      },
    },
  ],
};
