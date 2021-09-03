(function showMapLogin() {
    var dt = new Date();
    var hours = dt.getHours();

    mapboxgl.accessToken =
        "mapbox key goes here";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-112.063692, 33.470399], // starting position [lng, lat]
        zoom: 11,
        interactive: false
    });

    //backgrown will change to dark if the hr is between 19 and 8 
    if (hours > 19 || hours < 8) {
        map.setStyle('mapbox://styles/mapbox/dark-v10');
        document.getElementById("logreg-forms").style.backgroundColor = "#000000a2";
        document.getElementById("orLogin").style.color = "white";
        document.getElementById("signLogin").style.color = "white";
    } else {
        document.getElementById("logreg-forms").style.backgroundColor = "#000000a2";
        map.setStyle('mapbox://styles/mapbox/streets-v11');
        document.getElementById("orLogin").style.color = "white";
        document.getElementById("signLogin").style.color = "white";
    }

})();



function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
});
