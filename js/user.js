var personName = document.getElementById("personName");
var busName = document.getElementById("busName");
var phone = document.getElementById("phone");
var lat = document.getElementById("lat");
var lng = document.getElementById("lng");
var typeOfB = document.getElementById("typeOfB");
var facebook = document.getElementById("facebook");

//checkmarks when is closed
var checkBoxM = document.getElementById("monclosed");
var checkBoxTu = document.getElementById("tueclosed");
var checkBoxwe = document.getElementById("wedclosed");
var checkBoxthu = document.getElementById("thuclosed");
var checkBoxfri = document.getElementById("friclosed");
var checkBoxsat = document.getElementById("satclosed");
var checkBoxsun = document.getElementById("sunclosed");

///var when business is open
var monOpen = document.getElementById("monOpen");
var tueOpen = document.getElementById("tueOpen");
var wedOpen = document.getElementById("wedOpen");
var thuOpen = document.getElementById("thuOpen");
var friOpen = document.getElementById("friOpen");
var satOpen = document.getElementById("satOpen");
var sunOpen = document.getElementById("sunOpen");

///var when business is close
var monClose = document.getElementById("monClose");
var tueClose = document.getElementById("tueClose");
var wedClose = document.getElementById("wedClose");
var thuClose = document.getElementById("thuClose");
var friClose = document.getElementById("friClose");
var satClose = document.getElementById("satClose");
var sunClose = document.getElementById("sunClose");

var addbtn = document.getElementById("addbtn");
var updatebtn = document.getElementById("updatebtn");

//***********************if check disable ************** */
//monday
checkBoxM.addEventListener("click", (e) => {
  if (checkBoxM.checked == true) {
    monOpen.disabled = true;
    monClose.disabled = true;
    checkBoxM.value = 99;
    monClose.removeAttribute("min");
  } else {
    monOpen.disabled = false;
    monClose.disabled = false;
    checkBoxM.value = 1;
    monClose.setAttribute("min", monOpen.value);
  }
});

//tuesday
checkBoxTu.addEventListener("click", (e) => {
  if (checkBoxTu.checked == true) {
    tueOpen.disabled = true;
    tueClose.disabled = true;
    checkBoxTu.value = 99;
    tueClose.removeAttribute("min");
  } else {
    tueOpen.disabled = false;
    tueClose.disabled = false;
    checkBoxTu.value = 2;
    tueClose.setAttribute("min", tueOpen.value);
  }
});

//wed
checkBoxwe.addEventListener("click", (e) => {
  if (checkBoxwe.checked == true) {
    wedOpen.disabled = true;
    wedClose.disabled = true;
    checkBoxwe.value = 99;
    mwedClose.removeAttribute("min");
  } else {
    wedOpen.disabled = false;
    wedClose.disabled = false;
    checkBoxwe.value = 3;
    wedClose.setAttribute("min", wedOpen.value);
  }
});

//thuersday
checkBoxthu.addEventListener("click", (e) => {
  if (checkBoxthu.checked == true) {
    thuOpen.disabled = true;
    thuClose.disabled = true;
    checkBoxthu.value = 99;
    thuClose.removeAttribute("min");
  } else {
    thuOpen.disabled = false;
    thuClose.disabled = false;
    checkBoxthu.value = 4;
    thuClose.setAttribute("min", thuOpen.value);
  }
});

//friday
checkBoxfri.addEventListener("click", (e) => {
  if (checkBoxfri.checked == true) {
    friOpen.disabled = true;
    friClose.disabled = true;
    checkBoxfri.value = 99;
    friClose.removeAttribute("min");
  } else {
    friOpen.disabled = false;
    friClose.disabled = false;
    checkBoxfri.value = 5;
    friClose.setAttribute("min", friOpen.value);
  }
});

//monday
checkBoxsat.addEventListener("click", (e) => {
  if (checkBoxsat.checked == true) {
    satOpen.disabled = true;
    satClose.disabled = true;
    checkBoxsat.value = 99;
    satClose.removeAttribute("min");
  } else {
    satOpen.disabled = false;
    satClose.disabled = false;
    checkBoxsat.value = 6;
    satClose.setAttribute("min", satOpen.value);
  }
});

//sunday
checkBoxsun.addEventListener("click", (e) => {
  if (checkBoxsun.checked == true) {
    sunOpen.disabled = true;
    sunClose.disabled = true;
    checkBoxsun.value = 99;
    sunClose.removeAttribute("min");
  } else {
    sunOpen.disabled = false;
    sunClose.disabled = false;
    checkBoxsun.value = 0;
    sunClose.setAttribute("min", sunOpen.value);
  }
});














const database = firebase.database();
var base = new Firebase("https://voscity-37231.firebaseio.com/");

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("user_para").innerHTML =
        "Welcome User : " + email_id;
    }

    base.limit(200).on("value", function (snapshot) {
      var row = snapshot.val();
      for (var k in row) {
        if (row[k].edit == undefined) {
          addbtn.style.display = "block";
          updatebtn.style.display = "none";
        } else if (row[k].edit == true) {
          updatebtn.style.display = "block";
          addbtn.style.display = "block";
        } else {
          addbtn.style.display = "block";
          updatebtn.style.display = "none";
        }
        if (row[k].email == user.email && row[k].edit === false) {
          //if the user has data on db then those will be disabled
          document.getElementById("user_in").innerHTML =
            "Your info has been sent.";
          personName.value = row[k].personName;
          personName.disabled = true;
          busName.value = row[k].name;
          busName.disabled = true;
          facebook.value = row[k].facebook;
          facebook.disabled =true;
          phone.value = row[k].phone;
          phone.disabled = true;
          lat.value = row[k].lat;
          lat.disabled = true;
          lng.value = row[k].lng;
          lng.disabled = true;
          typeOfB.disabled = true;
          //typeOfB.value = "";
          typeOfB.disabled = true;
          checkBoxM.disabled = true;
          checkBoxTu.disabled = true;
          checkBoxwe.disabled = true;
          checkBoxthu.disabled = true;
          checkBoxfri.disabled = true;
          checkBoxsat.disabled = true;
          checkBoxsun.disabled = true;
          
          if (row[k].icon == "../img/restaurante.png") {
            typeOfB.value = "restaurante";
          } else if (row[k].icon == "../img/fonda.png") {
            typeOfB.value = "fonda";
          } else if (row[k].icon == "../img/taller.png") {
            typeOfB.value = "taller";
          } else if (row[k].icon == "../img/peluqueria.png") {
            typeOfB.value = "peluqueria";
          } else if (row[k].icon == "../img/llantera.png") {
            typeOfB.value = "llantera";
          } if (row[k].icon == "../img/carrocero.png") {
            typeOfB.value = "carrocero";
          }

          sunOpen.value = row[k].open_hours[0];
          monOpen.value = row[k].open_hours[1];
          tueOpen.value = row[k].open_hours[2];
          wedOpen.value = row[k].open_hours[3];
          thuOpen.value = row[k].open_hours[4];
          friOpen.value = row[k].open_hours[5];
          satOpen.value = row[k].open_hours[6];

          sunClose.value = row[k].close_hours[0];
          monClose.value = row[k].close_hours[1];
          tueClose.value = row[k].close_hours[2];
          wedClose.value = row[k].close_hours[3];
          thuClose.value = row[k].close_hours[4];
          friClose.value = row[k].close_hours[5];
          satClose.value = row[k].close_hours[6];
        } else if (row[k].email == user.email && row[k].edit === true) {
















          //if the user has data on db then those will be disabled
          document.getElementById("user_coming").innerHTML =
            "Need Help?: voscity.az@gmail.com";
          personName.value = row[k].personName;
          personName.disabled = true;
          busName.value = row[k].name;
          busName.disabled = true;
          facebook.value = row[k].facebook;
          phone.value = row[k].phone;
          phone.disabled = true;
          lat.value = row[k].lat;
          //lat.disabled = true;
          lng.value = row[k].lng;
          //lng.disabled = true;
          typeOfB.disabled = true;


          if (row[k].icon == "../img/restaurante.png") {
            typeOfB.value = "restaurante";
          } else if (row[k].icon == "../img/fonda.png") {
            typeOfB.value = "fonda";
          } else if (row[k].icon == "../img/taller.png") {
            typeOfB.value = "taller";
          } else if (row[k].icon == "../img/peluqueria.png") {
            typeOfB.value = "peluqueria";
          } else if (row[k].icon == "../img/llantera.png") {
            typeOfB.value = "llantera";
          } if (row[k].icon == "../img/carrocero.png") {
            typeOfB.value = "carrocero";
          }

          sunOpen.value = row[k].open_hours[0];
          monOpen.value = row[k].open_hours[1];
          tueOpen.value = row[k].open_hours[2];
          wedOpen.value = row[k].open_hours[3];
          thuOpen.value = row[k].open_hours[4];
          friOpen.value = row[k].open_hours[5];
          satOpen.value = row[k].open_hours[6];

          sunClose.value = row[k].close_hours[0];
          monClose.value = row[k].close_hours[1];
          tueClose.value = row[k].close_hours[2];
          wedClose.value = row[k].close_hours[3];
          thuClose.value = row[k].close_hours[4];
          friClose.value = row[k].close_hours[5];
          satClose.value = row[k].close_hours[6];



          updatebtn.addEventListener("click", (e) => {
            if (
              personName.value == "" ||
              busName.value == "" ||
              phone.value == "" ||
              lat.value == "" ||
              lng.value == ""
            ) {
              document.getElementById("error").innerHTML =
                "Fill all the boxes with the *";
            } else if (
              monClose.hasAttribute("min") === true ||
              tueClose.hasAttribute("min") === true ||
              wedClose.hasAttribute("min") === true ||
              thuClose.hasAttribute("min") === true ||
              friClose.hasAttribute("min") === true ||
              satClose.hasAttribute("min") === true ||
              sunClose.hasAttribute("min") === true
            ) {
              if (
                monClose.value < monOpen.value ||
                tueClose.value < tueOpen.value ||
                wedClose.value < wedOpen.value ||
                thuClose.value < thuOpen.value ||
                friClose.value < friOpen.value ||
                satClose.value < satOpen.value ||
                sunClose.value < sunOpen.value
              ) {
                document.getElementById("error").innerHTML =
                  "The closing time must be longer than the opening time";
              } else {
                document.getElementById("error").innerHTML = "";
                document.getElementById("success").innerHTML =
                  "Your info has been sent";

                if (typeOfB.value == "restaurante") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/restaurante.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    refValue: row[k].refValue,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "fonda") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/fonda.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: row[k].refValue,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "taller") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/taller.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: row[k].refValue,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "peluqueria") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/peluqueria.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: row[k].refValue,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "llantera") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/llantera.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: row[k].refValue,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "carrocero") {
                  e.preventDefault();
                  database.ref(row[k].refValue).update({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/carrocero.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: row[k].refValue,
                    facebook: facebook.value,
                    edit: true,
                    display:true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                }
              }
            } else if (
              checkBoxM.checked === true ||
              checkBoxTu.checked === true ||
              checkBoxwe.checked === true ||
              checkBoxthu.checked === true ||
              checkBoxfri.checked === true ||
              checkBoxsat.checked === true ||
              checkBoxsun.checked === true
            ) {
              document.getElementById("error").innerHTML =
                "Seleciona una hora de abrir al menos";
            }
          });





































        } else {

          addbtn.addEventListener("click", (e) => {
            if (
              personName.value == "" ||
              busName.value == "" ||
              phone.value == "" ||
              lat.value == "" ||
              lng.value == ""
            ) {
              document.getElementById("error").innerHTML =
                "Fill all the boxes with the *";
            } else if (
              monClose.hasAttribute("min") === true ||
              tueClose.hasAttribute("min") === true ||
              wedClose.hasAttribute("min") === true ||
              thuClose.hasAttribute("min") === true ||
              friClose.hasAttribute("min") === true ||
              satClose.hasAttribute("min") === true ||
              sunClose.hasAttribute("min") === true
            ) {
              if (
                monClose.value < monOpen.value ||
                tueClose.value < tueOpen.value ||
                wedClose.value < wedOpen.value ||
                thuClose.value < thuOpen.value ||
                friClose.value < friOpen.value ||
                satClose.value < satOpen.value ||
                sunClose.value < sunOpen.value
              ) {
                document.getElementById("error").innerHTML =
                  "The closing time must be longer than the opening time";
              } else {
                document.getElementById("error").innerHTML = "";
                document.getElementById("success").innerHTML =
                  "Your info has been sent";

                if (typeOfB.value == "restaurante") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/restaurante.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    refValue: snapshot.numChildren(),
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "fonda") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/fonda.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "taller") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/taller.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "peluqueria") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/peluqueria.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "llantera") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/llantera.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                } else if (typeOfB.value == "carrocero") {
                  e.preventDefault();
                  database.ref(snapshot.numChildren()).set({
                    open_hours: [
                      sunOpen.value,
                      monOpen.value,
                      tueOpen.value,
                      wedOpen.value,
                      thuOpen.value,
                      friOpen.value,
                      satOpen.value,
                    ],
                    icon: "../img/carrocero.png",
                    lat: lat.value,
                    lng: lng.value,
                    email: user.email,
                    name: busName.value,
                    refValue: snapshot.numChildren(),
                    facebook: facebook.value,
                    edit: true,
                    display: true,
                    personName: personName.value,
                    open_days: [
                      parseInt(checkBoxsun.value),
                      parseInt(checkBoxM.value),
                      parseInt(checkBoxTu.value),
                      parseInt(checkBoxwe.value),
                      parseInt(checkBoxthu.value),
                      parseInt(checkBoxfri.value),
                      parseInt(checkBoxsat.value),
                    ],
                    close_hours: [
                      sunClose.value,
                      monClose.value,
                      tueClose.value,
                      wedClose.value,
                      thuClose.value,
                      friClose.value,
                      satClose.value,
                    ],
                    phone: phone.value,
                    schedule: [
                   "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                  });
                }
              }
            } else if (
              checkBoxM.checked === true ||
              checkBoxTu.checked === true ||
              checkBoxwe.checked === true ||
              checkBoxthu.checked === true ||
              checkBoxfri.checked === true ||
              checkBoxsat.checked === true ||
              checkBoxsun.checked === true
            ) {
              document.getElementById("error").innerHTML =
                "Select a time to open";
            }
          });
        }
      }
    });
  } else {
    window.location.replace("login.html");
  }
});
