// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
  plugins: [],
};
