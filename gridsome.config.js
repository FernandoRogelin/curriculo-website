module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData:
          '@import "~/assets/_colors.scss"; @import "~/assets/_variables.scss"; @import url("https://fonts.googleapis.com/css2?family=B612&display=swap");',
      },
    },
  },
  siteName: "Fernando Rogelin",
  siteDescription: "Site com o objetivo principal de mostrar a minha trajetório percorrida no desenvolvimento de software, servindo como um portfolio online para se ter noção do que eu já fiz e o que já utilizei na área de desenvolvimento",
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["pt-br", "en-eu"],
        pathAliases: { "pt-br": "pt", "en-eu": "en" },
        fallbackLocale: "pt-br",
        defaultLocale: "pt-br",
        messages: {},
      },
    },
  ],
};
