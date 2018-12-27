


const API_KEY = 'd6c9d17ef4196d4d0f79af64ca1078a5';  
  
var Trackster = {};


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {
  for (trackIndex = 0; trackIndex < tracks.length(); trackIndex++) {
    var track = tracks[trackIndex];
    var htmlTrackRow = 
    
  ' <div class="row track"> ' +
   '  <a class="col-xs-1 col-xs-offset-1" href="https://www.youtube.com/watch?v=eI_O5_tJ1hA&feature=youtu.be" target="_blank">' + 
   '  <i class="far fa-play-circle play-button"></i></a>' +
   '  <span id="testing" class="col-xs-4">Fairytale in the Supermarket</span>' +
   '  <span class="col-xs-2">The Raincoats</span>' +
   '  <span class="col-xs-2">The Raincoats</span>' +
   '  <span class="col-xs-2">101,839</span>' +
  ' </div>';
    
    var $trackList = $('#tracklist');
    console.log('hello world');
    $trackList.append(htmlTrackRow);
  }
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
    Trackster.renderTracks();
    });
  });