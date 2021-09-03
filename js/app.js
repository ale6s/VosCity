(function showMap() {
  let long;
  let lat;
  var dt = new Date();
  var hours = dt.getHours();
  var minutes = dt.getMinutes();
  var currentTime = hours + ":" + minutes;
  var day = dt.getDay();


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      var myLocation = [long, lat];

      mapboxgl.accessToken =
        "mapbox key goes here";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: myLocation, // starting position [lng, lat]
        trackUserLocation: true,
        zoom: 11,
      });

      if (hours > 20 || hours < 7) {
        map.setStyle('mapbox://styles/mapbox/dark-v10');
        document.getElementById('menu').style.color = "white";
      } else {
        map.setStyle('mapbox://styles/mapbox/streets-v11');
      }

      // Add geolocate control to the map.
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        }),
        "bottom-right"
      );
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
      var data = document.getElementById("data");

      var base = new Firebase("firebase name goes here");

      base.limit(200).on("value", function (snapshot) {
        var marker = snapshot.val();
        for (var k in marker) {

          //displa dtaa on the nav also will chekc if the store is open or close
          var tr = document.createElement("span");


          if (marker[k].display === true) {

            if (((day == marker[k].open_days[day]) && (currentTime >= marker[k].open_hours[day] && currentTime < marker[k].close_hours[day]))) {

              var timeSplit = marker[k].close_hours[day].split(':'),
                hours1,
                minutes1,
                meridian;
              hours1 = timeSplit[0];
              minutes1 = timeSplit[1];
              if (hours1 > 12) {
                meridian = 'PM';
                hours1 -= 12;
              } else if (hours1 < 12) {
                meridian = 'AM';
                if (hours1 == 0) {
                  hours1 = 12;
                }
              } else {
                meridian = 'PM';
              }
              var convTime = hours1 + ':' + minutes1 + ' ' + meridian;





              if (!marker[k].facebook) {

                tr.innerHTML = `<span class='marker'><div class='row text-center el'>
                    <div class='col-sm-8'>
                      <h6 class='text-white font-weight-bold'>${marker[k].name}</h6>
                      <span class='text-success'>Open</span><br/>
                      <span class='text-white'>${marker[k].schedule[day]}, Open until ${convTime}</span> <br/> 
                        <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                        <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a>
                        </div>
                    <div class='col-sm-4'>
                        <img width=40 src='${marker[k].icon}' >
                      </div>
                      </div>
                      <hr style='background-color:rgb(166, 168, 163)' /></span>`;
              } else {
                tr.innerHTML = `<span class='marker'><div class='row text-center el'>
                  <div class='col-sm-8'>
                    <h6 class='text-white font-weight-bold'>${marker[k].name}</h6>
                    <span class='text-success'>Open</span><br/>
                    <span class='text-white'>${marker[k].schedule[day]}, Open until ${convTime}</span> <br/> 
                    <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                      <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a><br/>
                      <iframe class="mt-1" src="https://www.facebook.com/plugins/like.php?href=${marker[k].facebook}%2F&width=131&layout=button_count&action=recommend&size=small&share=false&height=21&appId=721270495332913" width="131" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>                 
                      </div>
                  <div class='col-sm-4'>
                      <img width=40 src='${marker[k].icon}' >
                    </div>
                    </div>
                    <hr style='background-color:rgb(166, 168, 163)' /></span>`;
              }
              data.appendChild(tr);
            } else {

              if (!marker[k].facebook) {
                tr.innerHTML = `<span class='marker'><div class='row text-center el'>
                    <div class='col-sm-8'>
                      <h6 class='text-white font-weight-bold'>${marker[k].name}</h6>
                      <span class='text-danger'>Closed</span><br/>
                      <span class='text-white'>${marker[k].schedule[day]} </span> <br/> 
                      <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                        <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a> 
                    </div>
                    <div class='col-sm-4'>
                        <img width=40 src='${marker[k].icon}' >
                      </div>
                      </div>
                      <hr style='background-color:rgb(166, 168, 163)' /></span>`;
              } else {
                tr.innerHTML = `<span class='marker'><div class='row text-center el'>
                    <div class='col-sm-8'>
                      <h6 class='text-white font-weight-bold'>${marker[k].name}</h6>
                      <span class='text-danger'>Closed</span><br/>
                      <span class='text-white'>${marker[k].schedule[day]} </span> <br/> 
                      <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                        <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a><br/>
                        <iframe class="mt-1" src="https://www.facebook.com/plugins/like.php?href=${marker[k].facebook}%2F&width=131&layout=button_count&action=recommend&size=small&share=false&height=21&appId=721270495332913" width="131" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>                 
                    </div>
                    <div class='col-sm-4'>
                        <img width=40 src='${marker[k].icon}' >
                      </div>
                      </div>
                      <hr style='background-color:rgb(166, 168, 163)' /></span>`;
              }
              data.appendChild(tr);
            }


            if (day == marker[k].open_days[day] && (currentTime >= marker[k].open_hours[day] && currentTime < marker[k].close_hours[day])) {

              //creating popup info
              if (!marker[k].facebook) {
                var popup = new mapboxgl.Popup({ offset: 25 })
                  .setHTML(`<span style='font-size: 1.2em;' class='font-weight-bold'>${marker[k].name}</span><br/>
                    <span class='font-weight-bold text-success'>Open until ${convTime}</span> <br/>
                    <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                    <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a>`);
              } else {
                var popup = new mapboxgl.Popup({ offset: 25 })
                  .setHTML(`<span style='font-size: 1.2em;' class='font-weight-bold'>${marker[k].name}</span><br/>
                    <span class='font-weight-bold text-success'>Open until ${convTime}</span> <br/>
                    <a target=_blank href='tel:${marker[k].phone}'>Call</a><br/>
                    <a target=_blank href='https://www.google.com/maps/dir/?api=1&origin=${lat},${long}&destination=${marker[k].lat},${marker[k].lng}'>Directions</a><br/>
                    <iframe class="mt-1" src="https://www.facebook.com/plugins/like.php?href=${marker[k].facebook}%2F&width=131&layout=button_count&action=recommend&size=small&share=false&height=21&appId=721270495332913" width="131" height="21" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>                 
                    `);
              }

              // create DOM element for the marker and the name like this Ill be able to hide also the icon on the map
              var el = document.createElement("div");
              var texto = document.createElement("div");
              texto.className = 'txto';
              texto.innerHTML = marker[k].name;
              el.className = "marker";
              el.appendChild(texto)

              el.style.backgroundImage = "url(" + marker[k].icon + ")";

              // create the marker
              new mapboxgl.Marker(el)
                .setLngLat([marker[k].lng, marker[k].lat])
                .setPopup(popup) // sets a popup on this marker
                .addTo(map);
            } else {
              console.log(marker[k].name + " is currently closed")
            }

          }

        }

      });
    },
      function (error) {
        if (error.code == error.PERMISSION_DENIED)
          alert("Location services must be active. We use location services to determine the distance from your location to stores.")
      });
  }

})();

