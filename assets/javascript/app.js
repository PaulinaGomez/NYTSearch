var APIKey = "4252925e65fd46cc838847da23539e0c";

//depende del nombre de html $("#movie-input").val().trim();
//depende del nombre de html $("#startYear").val().trim();
//depende del nombre de html $("#endYear").val().trim();
var userSearch = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + $.param({
      "q": userSearch,
      "api-key": APIKey,
      "begin_date": startYear,
      "end_date": endYear,
      "sort": "newest",
  });
//Darle enter o dar click a search
$("#add-movie").on("click", function(event) {
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);
        // Depende del nombre de html de Results/Top Articles
        $("#movie-view").text(JSON.stringify(response));
      })
})

    //Depende del nombre del boton "Clear Results"
$("#clear-all").on("click", function() {
    // Depende del nombre de la div/class  Results/Top Articles
    $("#results").empty()
})