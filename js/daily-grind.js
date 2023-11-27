//alert("can you see this?");

/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
    that rotates unique colors and content for each weekday (Sunday to Saturday) into the page. 

    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item 
    (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element 
    on the page for each day of the week.  All of the above must occur 
    within one page.

    pic - image src
    alt - an alt tag for the image
    desc - description of item
    day - the highlighted day of the week
    color - color to match pic
    name - the name of the coffee


*/

function coffeeTemplate(coffee){
    return `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
   </p>
    `;

}


let myDate = new Date(); 
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 //convert to an integer
myDay = parseInt(myDay);

//console.log(myDay);

switch(myDay){

        // case 0 is for Sunday and on the day the theme will be caramel latte so the webpage will show a picture of a caramel latte and a baground color of tan.
    case 0:
        today = "Sunday";
        coffee = {
            pic : "images/caramel-latte.jpg",
            alt : "A pic of caramel latte",
            desc : `The best caramel coffee in town!`,
            day : "Sunday",
            color : "tan",
            name : "Caramel Coffee"
        };
    break;

        // This is for Monday, with a pic of cold brew coffee and have a description of the best cold brew in town.
    case 1:
        today = "Monday";
        coffee = {
            pic : "images/cold-brew.jpg",
            alt : "A pic of cold brew",
            desc : `The best cold brew you'll ever have!`,
            day : "Monday",
            color : "magenta",
            name : "Cold Brew"
        };
    break;

        // This is for the day off Tuesday and it will show bubble tea
    case 2:
        today - "Tuesday";
        coffee = {
            pic : "images/bubble-tea.jpg",
            alt : "A pic of bublle tea",
            desc : `I like me some bubble tea`,
            day : "Tuesday",
            color : "pink",
            name : "Bubble Tea"
        };
    break; 
    
    // This for Wednesday, this will have a alt description of a pic of drip coffee.
    case 3:
        today - "Wednesday";
        coffee = {
            pic : "images/drip.jpg",
            alt : "a pic of drip coffee",
            desc : `Our drip coffee is the best in town!`,
            day : "Wednesday",
            color : "brown",
            name : "drip coffee"
        };
    break; 

        //This is for Thursday
    case 4:
        today - "Thursday";
        coffee = {
            pic : "images/frappaccino.jpg",
            alt : "a pic of frappaccino",
            desc : `Our frappaccino will blow your mind!`,
            day : "Thursday",
            color : "yellow",
            name : "Frappaccino"
        };
    break; 

        // This is for the day of Friday.
    case 5:
        today - "Friday";
        coffee = {
            pic : "images/mocha.jpg",
            alt : "a pic of mocha coffee",
            desc : `Our mocha coffee is the best!`,
            day : "Friday",
            color : "teal",
            name : "Mocha"
        };
    break; 

        // This for Saturday.
    case 6:
        today - "Saturday";
        coffee = {
            pic : "images/pumpkin-spice-latte.jpg",
            alt : "a pic of pumpkin spice latte",
            desc : `Our pumpkin spice latte is unbelievable!`,
            day : "Saturday",
            color : "orange",
            name : "Pumpkin Spice Latte"
        };
    break; 


    default:
        today = "Something went wrong!";

}



//let coffeeData = coffeeTemplate(coffee);
//alert(coffeeData);

//inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//custom color
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);