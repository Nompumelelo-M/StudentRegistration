const name = document.getElementById("first_Name");
const surname = document.getElementById("last_Name");
const email = document.getElementById("email_Address");
const mobile = document.getElementById("mobile_Number");
const city = document.getElementById("_city");
const postal = document.getElementById("postal_Code");
const province = document.getElementById("_province");
const country = document.getElementById("_country");

function Display(){
    let name_text = name.value;
    let surname_text = surname.value;
    let email_text = email.value;
    let mobile_text = mobile.value;
    let city_text = city.value;
    let postal_text = postal.value;
    let province_text = province.value;
    let country_text = country.value;
    document.getElementById("firstName").innerHTML = name_text;
    document.getElementById("lastName").innerHTML = surname_text;
    document.getElementById("emailAddress").innerHTML = email_text;
    document.getElementById("mobileNumber").innerHTML = mobile_text;
    document.getElementById("city").innerHTML = city_text;
    document.getElementById("postalCode").innerHTML = postal_text;
    document.getElementById("province").innerHTML = province_text;
    document.getElementById("country").innerHTML = country_text;
}

function resetButton(){
    location.reload();
}


