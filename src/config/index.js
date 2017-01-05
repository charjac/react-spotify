//todo this should be moved in a more accessible place

/**
 * @typedef {object} Config
 * @property {string} appName
 * @property {string} pictureSrc
 * @property {string} frontApi
 * @property {string} defaultLocale
 * @property {string[]} supportedLanguages
 * @property {string} logoUrl
 * @property {object} httpDefault
 * @property {object} headers
 * @property {object} params
 * @property {string} params.device
 */

/**
 * main configuration of the app
 *
 * @type {Config}
 */
export default {
    appName: 'Starter Kit',
    pictureSrc: 'https://ds.emi.tv/volt',
    frontApi: 'https://volt-dev01.ifeelsmart.net:8080',
    // frontApi: 'http://localhost:3000',
    defaultLocale: 'en',
    supportedLanguages: ['en', 'fr'],
    logoUrl: 'http://vod.centurylink.com.edgesuite.net/ElevateTvLogo/pctv/elevatetvlogo2.png',
    httpDefault: {
        headers : {
            'Content-Type': 'application/json'
        },
        params : {
            device: '1'
        }
    }
}
