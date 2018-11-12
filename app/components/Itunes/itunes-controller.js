import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  let songs = itunesService.getMusicByArtist(results)
  for (let i = 0; i < results.length; i++) {
    let music = results[i];
    template += `
    <div class="col">
                    <div class="card text-white bg-primary mb-3" style="width: 250px;">
                        <img src="${music.albumArt}" alt="album"/>
                        <p>${music.price}</p>
                        <h5>${music.title}</h5>
                        <h5>Artist: ${music.artist}</h5>
                    </div>
                </div>
`
  }
  document.getElementById("songs").innerHTML = template
}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController