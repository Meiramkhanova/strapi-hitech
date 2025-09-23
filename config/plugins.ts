module.exports = ({ env }) => ({
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

  // добавляем populate-deep
  "populate-deep": {
    config: {
      defaultDepth: 5, // глубина по умолчанию (можешь менять)
    },
  },
});
