//  We've created an App object (a set of key value pairs) to hold the applcation code.
//  The App object shows how to create a JavaScript object and includes
//  examples of standard programming constructs in JavaScript. 
//  The goal is provide many useful examples in a single code file. 
//
//  When you modify the application, use different ids for your HTML elements.
//  Do not use length and width. 

var App = {
  launch: function () {
    App.getOrganizationName();
    App.getSportingEvent();
    App.getRows();
    App.getSeats();
    App.getArea();
    App.getEstimate();
    App.displayExploreButtons();
    App.showExample();
  },
  getOrganizationName: function () {
    let answer = prompt("Request the name of organization", "Notorious");
    if (answer != null) {
      // document.getElementById("first").innerHTML = answer;
      $("#organization").html(answer); // $ = jQuery object; in jQuery use # with id, . with class
    }
  },
  getSportingEvent: function () {
    let answer = prompt("The type of sporting event", "Football, Soccer, Volleyball");
    if (answer != null) {
      //document.getElementById("last").innerHTML = answer;
      $("#sporting").html(answer);  // passing in the inner html with the  jQuery html() method 
    }
  },
  getRows: function () {
    let answer = prompt("The number of rows the organization wants to reserve", 5);
    if (answer != null) {
      //document.getElementById("width").innerHTML = answer;
      $('#rows').html(answer);   // either double or single tick marks designate strings
    }
  },
  getSeats: function () {
    let answer = prompt("The number of seats per row the organization wants to reserve", 5);
    if (answer != null) {
      $('#seats').html(answer);  // html method works as a getter and a setter
    }
  },
  getArea: function () {
    //let inputWidth = parseFloat(document.getElementById("width").innerHTML);
    //let inputLength = parseFloat(document.getElementById("length").innerHTML);
    //let answer = Area.calculateArea(inputWidth, inputLength); // do some checks on the inputs
    //document.getElementById("area").innerHTML = answer;
    let inputRows = parseFloat($('#rows').html());
    let inputSeats = parseFloat($('#seats').html());
    let answer = App.calculateArea(inputRows, inputSeats); // do some checks on the inputs
    $("#area").html(answer);
    $(".displayText").css('display', 'inline-block');  //overwrites display: hidden to make it visible 
    alert("You have about " + answer + " reserved seats.");
  },
  calculateArea: function (givenRows, givenSeats) {
    if (typeof givenRows !== 'number' || typeof givenSeats !== 'number') {
      throw Error('The given argument is not a number');
    }

    const minRows = 1;
    const minSeats = 1;
    const maxRows = 100;
    const maxSeats = 100;

    // check the first argument.................
    let rows  // undefined
    if (givenRows < minRows) {
      rows = minRows;
    }
    else if (givenRows > maxRows) {
      rows = maxRows;
    }
    else {
      rows = givenRows;
    }

    //check the second argument ...................
    if (givenSeats < minSeats) {
      seats = minSeats;
    }
    else if (givenSeats > maxSeats) {
      seats = maxSeats;
    }
    else {
      seats = givenSeats;
    }

    // calculate the answer and store in a local variable so we can watch the value
    let area = rows * seats;
    // return the result of our calculation to the calling function
    return area;
  },
  getEstimate: function () {
    let area = parseFloat(document.getElementById("area").innerHTML);
    let ct;
    if (area < 1) { ct = 0; }
    else { ct = area }; // estimate 1 per square mile
    // document.getElementById("count").innerHTML = count;
    $("#count").html(ct);
    alert("You could have about " + ct + " reserved seats.");
    $("#count").css("color", "blue");
    $("#count").css("background-color", "yellow");
  },
  showExample: function () {
    document.getElementById("displayPlace").innerHTML = "";
    let totalCount = parseFloat($("#count").html());
    for (var i = 0; i < totalCount; i++) {
      App.addImage(i);
    }
  },
  addImage: function (icount) {
    var imageElement = document.createElement("img");
    imageElement.id = "image" + icount;
    imageElement.class = "picture";
    imageElement.style.maxWidth = "90px";
    var displayElement = document.getElementById("displayPlace");
    displayElement.appendChild(imageElement);
    document.getElementById("image" + icount).src = "images.jpg";
  },
  displayExploreButtons: function () {
    $(".displayExploreButtons").css('display', 'block');  //overwrites display: hidden to make it visible 
  },
  exploreHtml: function () {
    alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
      "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
  },
  exploreCode: function () {
    alert("Would you like explore the running code? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the top-level Sources tab.\n\n" +
      "In the window on the left, click on the .js file.\n\n" +
      "In the window in the center, click on the line number of the App.getFirstName() call to set a breakpoint.\n\n" +
      "Click on it again to remove the breakpoint, and one more time to turn it back on.\n\n" +
      "Up on the web page, click the main button to launch the app.\n\n" +
      "Execution of the code will stop on your breakpoint.\n\n" +
      "Hit F11 to step into the App.getFirstName() function.\n" +
      "Hit F10 to step over the next function call.\n\n" +
      "As you hit F11 and step through your code, the values of local variables appear beside your code - very helpful in debugging.\n\n" +
      "Caution: Hitting F11 in VS Code will make your top-level menu disapper. Hit F11 again to bring it back.\n"
    )
  }
};

