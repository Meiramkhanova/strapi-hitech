// config/plugins.ts
export default () => ({
  upload: {
    config: {
      providerOptions: {
        local: {
          allowedMimeTypes: [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
          ],
        },
      },
    },
  },
});
