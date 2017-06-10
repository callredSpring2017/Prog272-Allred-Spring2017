$(document).ready(function() {
    "use strict";
    var insertUrl = "/insertValidCollection";

    function insertCollection() {
        $.get(insertUrl, function (result) {
    //language=JQuery-CSS
    $('#display').html(JSON.stringify(result, null, 4));
    console.log(JSON.stringify(result, null, 4));
})
            .done(function () {
                console.log("second success");
            })
            .fail(function (error) {
                alert(JSON.stringify(error, null, 4));
            })
            .always(function () {
                console.log("finished");
            });
    }

    $('#insertValidData').click(insertCollection);

    $('#getAll').click(function () {
        $.getJSON("/all-data", function (result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
    });

    function emptyCollection() {
        $.getJSON('/emptyCollection', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert(JSON.stringify(a.responseJSON, null, 4));
            })
            .always(function() {
                console.log('finished');
            });
    }

    $('#emptyCollection').click(emptyCollection);
});