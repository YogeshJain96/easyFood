let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*"
appConfig.env = "dev";
appConfig.db = {
   // uri:'mongodb://localhost:27017/easyFood'
uri:'mongodb+srv://replacewithyourusername:password@cluster0-vqrue.mongodb.net/easyFood'

};
appConfig.apiVersion = '/api/v1'


module.exports = {
    port : appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    env : appConfig.env,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion
}