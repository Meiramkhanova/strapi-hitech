export default (plugin) => {
  const originalCallback = plugin.controllers.auth.callback;

  plugin.controllers.auth.callback = async (ctx) => {
    await originalCallback(ctx);

    if (ctx.response.header['set-cookie']) {
      const updatedCookies = ctx.response.header['set-cookie'].map((cookie) =>
        cookie
          .replace('SameSite=Lax', 'SameSite=None')
          .replace('Secure', 'Secure; Domain=.duckdns.org')
      );
      ctx.response.set('set-cookie', updatedCookies);
    }
  };

  return plugin;
};
