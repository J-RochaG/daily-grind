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

//console.log(myDay);

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

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


    default:
        today = "Something went wrong!";

}

coffee = {
    pic : "images/bubble-tea.jpg",
    alt : "A pic of bublle tea",
    desc : "I like me some bubble tea",
    day : "Tuesday",
    color : "pink",
    name : "Bubble Tea"
};

//let coffeeData = coffeeTemplate(coffee);
//alert(coffeeData);

//inject coffee data into page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

//custom color
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);