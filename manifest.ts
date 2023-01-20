export const manifest = {
  start_url: ".",
  display: "standalone",
  background_color: "#2f353f",
  theme_color: "#2f353f",
  icons: [
    {
      src: "favicon.ico",
      sizes: "64x64 32x32 24x24 16x16",
      type: "image/x-icon",
    },
    {
      src: "/assets/media/pwa/logo-192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      src: "/assets/media/pwa/logo-512.png",
      type: "image/png",
      sizes: "512x512",
      purpose: "any maskable",
    },
  ],
};
