function simpleAlert() {
    alert("I am a alert: ")
}

function printMyName() {
    let myName = document.getElementById("inputText").value;
    if (!myName){
        alert("Please Enter Your Name: ")
        return;
    }
    document.getElementById("output").innerHTML =  myName
}

function clearOutput() {
    document.getElementById("output").innerHTML =  " "

    
}


let cities =  ["Faisalabad", "Lahore", "Karachi", "Islamabad",  "Burewala", "Shekhupura", "Kashmir"]


function printAllCities() {
    document.getElementById("output").innerHTML = " "
    for (let index = 0; index < cities.length; index++){
        console.log("Cities: ",cities[index])
        document.getElementById("output").innerHTML += index + 1 + ") " + cities[index] + "<br>"
    }
}


function addCity() {
    document.getElementById("output").innerHTML = " "
    let city = document.getElementById("inputText").value
    if (!city){
        alert("Enter Your City:")
        return
    }
    if (city.lengh < 3){
        alert("Please Enter Your City Name Correctly: ")
        return
    }

    let firstLetter = city.slice(0,1).toUpperCase();
    let cityAllLetter = city.slice(1,).toLowerCase();
    let cityWordCapitalize = firstLetter + cityAllLetter


    let cityFound = false
    for (let i = 0; i < city.length; i++){
        if (cities[i] === cityWordCapitalize){
            cityFound = true
            let html = "<span style='font-size:20px; color:red;'"+cityWordCapitalize+"</span>'is already in list'"
            document.getElementById("output").innerHTML= html
        }
    }
    
    if (cityFound === false){
        cities.push(cityWordCapitalize)
        let html = "<span style='font-size:20px; color:green;'"+cityWordCapitalize+"</span>'has successfully added in list'"
        document.getElementById("output").innerHTML= html

    }
    
}


function generateTable() {
    document.getElementById("output").innerHTML = " "
    for (let i = 1; i <= 10; i++){
        document.getElementById("output").innerHTML += 2 + " * " +  i + " = " + 2 * i + "<br>" 
    }
}




