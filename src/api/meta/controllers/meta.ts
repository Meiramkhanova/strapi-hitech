/**
 * A set of functions called "actions" for `meta`
 */

// export default {
// exampleAction: async (ctx, next) => {
//   try {
//     ctx.body = 'ok';
//   } catch (err) {
//     ctx.body = err;
//   }
// }
// };

"use strict";

module.exports = {
  async list(ctx) {
    const all = Object.values(strapi.contentTypes)
      .filter((t) => t.uid.startsWith("api::"))
      .map((t) => ({
        uid: t.uid,
        apiID: t.apiName,
        kind: t.kind,
      }));

    ctx.send({ data: all });
  },
};
