define(["jquery", "tableexport"], function ($) {

    // DOM ready
    $(function () {

        // Initialize TableExport using jQuery.
        $('#table1').tableExport();

        // Initialize TableExport using vanilla JS.
        var $selector = $("#table2");
        new TableExport($selector);
    });

});
