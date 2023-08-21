module.exports = {
    entry: "./browser/app.js", //esta propiedad define el punto de arranque de mi app
    output: {
        path: __dirname + "/browser",  //donde se va a guardar mi archivo final generado
        filename: "bundle.js", // el nombre del archivo final
            }, //donde se va a guardar mi archivos que se genera
     
};