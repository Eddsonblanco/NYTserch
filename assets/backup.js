$(document).ready(function () {

    var search = "election";
    var records = 1;
    // var startYear = 2019;

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=20120101&end_date=20120101&api-key=cnlzBSEEjBmVFiePSVqxmCZK5ys2q1C9";


    //function build url
    function buildURL() {
        search = $("#search").val();
        var startDate = $("#startYear").val() + "0101";
        var endDate = $("#endYear").val() + "1231";
        records = $("#records").val();
        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + search + "&facet_field=day_of_week&facet=true&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=cnlzBSEEjBmVFiePSVqxmCZK5ys2q1C9";
    };



    //function ajax call
    function ajaxCall() {
        buildURL();
        $.ajax({
            url: url,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            for (let i = 0; i < records; i++) {
                console.log("start");
                var head;
                var snip;
                var link;
                head = $("<h2>").html(response.response.docs[i].headline.main);
                console.log(head);
                snip = $("<p>").html(response.response.docs[i].snippet);
                link = $("<a>").html(response.response.docs[i].web_url).attr("href", response.response.docs[i].web_url);
                var div = $("<div>");
                div.append(head, snip, link);
                $("#id").append(div);

            }


        });
    }

    //onclick calls for stuff
    $("#btnsearch").on("click", function () {

        ajaxCall();
    })

    $("#btnclear").on("click", function () {
        $("#id").empty();
    })




});
