// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/libs",
    "shim": {
        "xlsx": {
            "deps": ['jszip'],
            "exports": 'XLSX'
        }
    },
    "paths": {
        "app": "../app",
        "jquery": "jquery/dist/jquery",
        "tableexport": "tableexport.js/dist/js/tableexport",
        "blobjs": "blobjs/Blob",
        "file-saverjs": "file-saverjs/FileSaver",
        "xlsx": "js-xlsx/dist/xlsx",
        "jszip": "js-xlsx/dist/jszip"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
