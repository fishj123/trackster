


const API_KEY = 'd6c9d17ef4196d4d0f79af64ca1078a5';  
  
var Trackster = {};


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax( {
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
    datatype: 'jasonp',
    success: function(data) {
      console.log(data);

    }
  })
};

$(document).ready(function () {

  $('#search').click(function () {
    Trackster.searchTracksByTitle($('#input').val());
    });
  });