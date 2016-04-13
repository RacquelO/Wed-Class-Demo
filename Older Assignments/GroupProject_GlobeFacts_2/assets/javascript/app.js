$(document).ready(function() {
    $('#submit').on('click', function() {
        // get selected zip code from selectbox
        var countrySelected = $('#countries option:selected').text();
        var metricSelected = $('#facts option:selected').text();

        var queryURL3 = 'https://api.giphy.com/v1/gifs/search?q=' + countrySelected + '&api_key=dc6zaTOxFJmzC&limit=5';
        $.ajax({url: queryURL3, method: 'GET'}).done(function(response){       
          var result = response.data[0].images.fixed_height.url;
          console.log(result);
          $('#contentImage').append("<img style='display: block; margin-left: auto; margin-right: auto;' src =' " + result + " '/>" + "<br>");          
        });

        var countrySelected = $('#countries option:selected').text();
        var metricSelected = $('#facts option:selected').text();
        var queryURL = 'https://restcountries.eu/rest/v1/name/' + countrySelected;
        // make the AJAX request
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            // do all this on success       
            var itemsTwo = [],
                $ul;
            $.each(response, function(key, val) {
                //iterate through the returned data and build a list
                itemsTwo.push(
                    '<li class="table" id="' + key + '"><p>Country: ' + val.name + '</p><p>Capital: ' + val.capital + '</p><p> Sub Region: ' + val.subregion + '</p></li>');
            });
            // append list to page
            $ul = $('<ul />').appendTo('#content');
            //append list items to list
            $ul.append(itemsTwo);
        });
        var queryURL2 = 'http://api.undata-api.org/WHO/' + metricSelected + '/' + countrySelected + '/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454';
        // make the AJAX request
        $.ajax({
            url: queryURL2,
            method: 'GET'
        }).done(function(response) {
            // do all this on success       
            var items = [],
                $ul;
            $.each(response, function(key, val) {
                //iterate through the returned data and build a list
                if (metricSelected === "Life expectancy at birth") {
                    items.push('<li class="table" id="' + key + '"><span>' + val.gender + '</span><span> life expectancy was ' + val.value + ' years old</span><span> in the year ' + val.year + '.</span></li>');
                } else if (metricSelected === "Population in thousands") {
                    items.push('<li class="table" id="' + key + '"><span>Population of ' + val.value + ' thousand</span><span> in the year ' + val.year+ '.</span></li>');
                }
            });
            // append list to page
            $ul = $('<ul />').appendTo('#contentTwo');
            //append list items to list
            $ul.append(items);
        });
        // remove resultset if this has already been run
        $('#content').empty();
        $('#contentImage').empty();
        $('#contentTwo').empty();
        $('#contentAddedTwo').empty();
        $('#contentAdded').empty();
    });
        $("#add").on('click', function(){
        var clone = $("#facts").clone();
        $("#addedFacts").append(
            "<select class='form-control'>"+
            "<option>Select</option> "+
            "<option>Population in thousands</option> "+
            "<option>Life Expectancy at Birth</option>"+
            "</select> "+
           "<br/>"
          );

        });
});