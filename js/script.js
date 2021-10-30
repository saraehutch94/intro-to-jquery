var newHomes = [
    {
      address: "27569 Cedarwood Drive",
      sf: "2,535",
      bedrooms: 3,
      baths: 2.5,
      price: "$496,500",
    },
    {
      address: "316 Annandale Drive",
      sf: "1,326",
      bedrooms: 4,
      baths: 2,
      price: "$275,000",
    },
    {
      address: "251 Grandview Road",
      sf: "3,800",
      bedrooms: 3,
      baths: 2,
      price: "$699,900",
    },
    {
      address: "28571 Manitoba",
      sf: "2,960",
      bedrooms: 4,
      baths: 3.5,
      price: "$775,000",
    },
  ]

$("#addHome").removeClass("btn-danger").addClass("btn-success");

$(".jumbotron").addClass("text-center");

// var isStyled = $("h1.jumbotron").hasClass("text-center");
// console.log("isStyled", isStyled);

// Create new element by defining a jQuery
// variable and defining it with an element
var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>');

// Add that new element to DOM using jQuery
$("body").append($newLink);

// Add target attribute with value of "_blank"
// to element with id of zillowLink
$("#zillowLink").attr("target", "_blank");

// Console logs value of href attribute on the link
// with id of zillowLink
// Use case of getter + setter
// attr is both a getter + setter method
console.log($("#zillowLink").attr("href"));

// Add an event listener
//           EVT  NAME    CALLBACK

$("#addHome").on("click", function(evt) {
    console.log("evt", evt);
});

$("body").on("click", "#addHome", function(evt) {
    console.log("addHome", evt.target);
});

$("#homes tbody").on("click", "button", function() {
    console.log("this", this, $(this));
    $(this).closest("tr").remove();
});

// pseudocode
/*
1.) What is the first thing I need to do?
--> I need to append a new table row
2.) What do you know now that can help with that?
--> We learned this: .append() (appends jQuery element),
$ (used to grab an element), 
3.) I need to create a variable to store the row info
in to store it
4.) I need to loop through the array to grab each
element in the array
5.) I need to append that information within that variable
to the table
*/

let i = 0;
$("#addHome").on("click", function() {
    $("tbody").append(`<tr><td>${newHomes[i].address}</td>
    <td>${newHomes[i].sf}</td>
    <td>${newHomes[i].bedrooms}</td>
    <td>${newHomes[i].baths}</td>
    <td>${newHomes[i].price}</td>
    <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>`)
    i++
    if (i===newHomes.length) {
        this.remove();
    }
})
