define(["jquery", "tableexport"], function ($, TableExport) {

    // DOM ready
    $(function () {

        // Initialize TableExport using jQuery.
        $('#table1').tableExport({
            bootstrap: true
        });

        // Initialize TableExport using vanilla JS.
        var $selector = document.getElementById("table2");
        new TableExport($selector, {
            formats: ["xlsx", "xls", "csv", "txt"],
            bootstrap: true
        });
    });

});
