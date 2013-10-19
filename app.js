$(function() {
	$('#btn-search').click(function(){

	var url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json';
    var cinema = $("#movieName").val();
    document.forms[0].reset();

    $.ajax({
        url: url,
        data: {
            q: cinema,
            apiKey: 'hcrurhsttexasrgfm2y6yahm'
        },
        dataType: 'jsonp',
        success: showMovies
    });
	
    

    function showMovies(response) {
        console.log(response);
        for (var i=0;i<response.movies.length; i++){
            var movie = response.movies[i];         
            $('div3').append('<img src="'+movie.posters.thumbnail+'">')
            $('div3').append('<h5>'+movie.title+'</h5>');
            $('div3').append('<h6>'+"Year:"+movie.year+'<br><br></h6>');
            $('div3').append('<h7>'+movie.synopsis+'<br><br></h7>');


            
           // $('body').append('<h4>'+movie.audience_score+'<h4>');
          }
    }



	});
});