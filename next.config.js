const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts');
//const lineBase = "http://localhost:3001/api"; //localhost
const lineBase = "http://app.fundacionportalmagico.org:3001/api"; //portalmagico

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}

module.exports = withFonts ( withSass({
  serverRuntimeConfig: { // Will only be available on the server side
  },
  publicRuntimeConfig: { // Will be available on both server and client
    mercadoPagoToken: 'TEST-6989747173808942-031217-2e6e01703e7f786b1592f32bf6b42d74-147807596',
    appUrl: "http://localhost:3002",
    //appUrl: "http://unamarcatepremia.org",
    apiUrl: process.env.API_URL || lineBase,
    allowedImageFileTypes: ['image/jpeg', 'image/png', "image/jpg"],
    allowedImageFileSize: 1, // max file Size in MB
    promotionImagesBasePath: process.env.IMG_BASE_PATH ? (process.env.IMG_BASE_PATH + '/promotions/') : ((process.env.API_URL || lineBase) + "/Promotions/downloadImage?filename="),
  }
}))
