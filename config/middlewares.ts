export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://hitech-narxoz.duckdns.org",
          ],
          "media-src": ["'self'", "data:", "blob:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://hitech-narxoz.duckdns.org"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
