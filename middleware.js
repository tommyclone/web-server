module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit!');
        return next();
    },
    logger: function(req, res, next) {
        console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        //console.log(req);
        next();
    }
};