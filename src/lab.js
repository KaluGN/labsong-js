let hi = document.getElementById("sleep");

fetch(
  "http://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=71c6e93a483131a54868320696adb1c7&user=joanofarctan&format=json"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);

    const el = myJson.artists.artist;
    return el.map(artist => {
      console.log(artist);

      const listSong = artist.name;
      // hi += `<div class="carousel-inner">
      //               <div class="carousel-item active">
      //                   <img class="d-block w-100" src="../images/abstract-art-background-696644.jpg" alt="First slide">
      //               </div>
      // <div class="row">`;
      hi.innerHTML += `<div class="row">
      <div class="col-6" id="${listSong}">${listSong}</div>
      <div class="col-2"><a href="#" class="far fa-thumbs-up"></a></div>
      <div class="col-2"><a href="#" class="far fa-thumbs-down"></a></div>
      <div class="col-2"><span>holi</span></div>
                </div>
      `;
    });

    // const el = myJson.toptracks.track;
    // return el.map(id => {
    //           const listSong = el[id];
    //     hi.innerHTML += `<p id="${id}">${listSong}</p>`;
    // console.log(song.name);
    // });
  });
