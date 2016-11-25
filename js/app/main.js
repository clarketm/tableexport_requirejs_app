define(["jquery", "blobjs", "file-saver", "xlsx", "tableexport"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('table').tableExport()
    });
});
