module.exports = {
  upload: {
    providerOptions: {
      local: {
        allowedMimeTypes: [
          "image/jpeg",
          "image/png",
          "image/gif",
          "image/webp", // разрешаем WebP
        ],
      },
    },
  },
};
