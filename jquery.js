
//Jquery


$( '#header' ); // select the element with an ID of 'header'
$( 'li' );      // select all list items on the page
$( 'ul>li' );   // select list items that are child in unordered lists
$( 'ul li' );   // select list items that are in unordered lists
$( '.person' ); // select all elements with a class of 'person'


//target all the <p> elements, and using the text method change the content of all the paragraphs to "All Changed"
$('p').text("text you wish to replace");

// append method to append a <span> element that contains text to all <p> elements
$('p').append("<span>Hello span</span>");

//targets all <a> elements and use the remove method to remove all <a> elements from the DOM
$('a').remove();

 // targets all <div> elements with the class of module-2, and  empty all the elements that are <div> with a class module-2
$('.module-2').empty();


$("h2").css("text-decoration", "underline"); //Underlines all h2 header



// Create a variable named fontFamily and using the JQuery css method assign it the value of the font-family used for <p> elements
let fontFamily = $("p").css("font-family");
// Using JQuery target the  <h1> element and using the text method pass it the variable fontFamily, which will change the text displayed by this element, to display the font-family used by all the <p> elements on the page
$("h1").text(fontFamily);

// Using the css method again this time target all the elements with the class card-panel and set the property background-color to green
$(".card-panel").css("background-color", "green");


//anything inside {} would only run when whole page loaded
$(document).ready(function () {
    $("h2").css("text-decoration", "underline");  //Underline all h2
    $("ul").css("border", "solid 1px #ccc"); //adds border to all ul element

    $("h2").addClass("underline");  //adds underline class to all h2 elements
    $("ul").removeClass("border"); //removes border class from all ul elements

})

$( "tr:odd" ).css( "background-color", "#bbbbff" );

// Using JQuery target <tr> elements while using the :odd selector and using the addClass method, add the class odd
// Using JQuery target the <tr> elements while using the :even selector  and using the addClass method, add the class even

$("tr:odd").addClass("odd");

$("tr:even").addClass("even");

//A jQuery event triggers an interaction
$("p").click(function(){
    // When I click on <p> run this code
     });



$(document).ready(function() {
    $("#stream1_btn").click(function() {   //.clck is the same as .on("click", function(){....
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
});

//------------------

$(document).ready(function() {
   $("p").click(function(){
       $("p").css("color", "red");   //event handler target <p> elements and using the JQuery css method set the elements color value to red for all <p> elements
   });

     $("h2").hover(function(){  // hover event handler that is triggered when <h2> elements are hovered.
        $("h2").css('background', 'lightblue');
    });

   $(".card-panel").mouseenter(function() {
       $("body").css("background-color", "black");
   });
   $(".card-panel").mouseleave(function(){
       $("body").css("background-color", "#e1e2e2");
   });
});




$("#stream1_btn").click(function() {   //.clck is the same as .on("click", function(){....
    $(".stream1").show();  //1000ms, slow, medium, fast
    $(".stream2").hide();
    $(".stream3").toggle();
    $(".stream3").toggle(1000);
    $(".stream1").slideDown();
    $(".stream1").slideUp();
    $(".stream1").slideToggle();
    $(".stream1").fadeIn();
    $(".stream1").fadeOut();
    $(".stream1").fadeToggle(); //toggle  if faded in or faded out
    $(".stream1").fadeTo(1000, 0.5);   // 0 transparant  and 1 full shown

});





$(document).ready(function(){
    $("#card-panel-1").click(function(){
        $("#card-panel-1").hide("slow");
    });
     $("#card-panel-2").click(function(){
        $("#card-panel-2").hide("medium");
    });
    $("#card-panel-3").click(function(){
        $("#card-panel-3").hide("fast");
    });
    $("#card-panel-4").click(function(){
        $("#card-panel-4").hide(3000);
    });
});

//----------

$(document).ready(function(){
    $("#button-card-1").click(function(){
        $("#par-1").toggle("slow");
    });
     $("#button-card-2").click(function(){
        $("#par-2").toggle("medium");
    });
    $("#button-card-3").click(function(){
        $("#par-3").toggle("fast");
    });
    $("#button-card-4").click(function(){
        $("#par-4").toggle();
    });
});


$(document).ready(function(){
    $("#button-card-1").click(function(){
        $("#par-1").slideToggle (750);
    });
     $("#button-card-2").click(function(){
        $("#par-2").slideToggle(1000);
    });
    $("#button-card-3").click(function(){
        $("#par-3").slideToggle();
    });

});


//-----

$(document).ready(function(){
    $("#button-card-1").mouseenter(function(){
        $("#par-1").fadeTo(200, 0.5);
    });
     $("#button-card-1").mouseleave(function(){
        $("#par-1").fadeTo(200, 1);
    });
    $("#button-card-2").mouseenter(function(){
        $("#par-2").fadeTo(1000, 0.5);
    });
     $("#button-card-2").mouseleave(function(){
        $("#par-2").fadeTo(1000, 1);
    });
});


$("#myButton").removeClass("border").addClass("blueBox");

$("p").css("color", "blue").slideUp(2000).slideDown(2000);
$("a").attr("href", "http://www.example.com");



$(document).ready(function(){
    $("button").mouseenter(function(){
        $("button").removeClass("make-red").addClass("make-border");
    });
    $("button").mouseleave(function(){
        $("button").removeClass("make-border").addClass("make-red");
    });

});


$(document).ready(function(){
    $("#button-card-1").click(function(){
        $("#par-1").hide(2000).show(2000);
    });
     $("#button-card-2").click(function(){
        $("#par-2").fadeOut(1000).fadeIn(1000);
    });

});




$(document).ready(function(){
    $("#card-panel-1").click(function(){
        $("this").hide("slow");
    });
});



$(document).ready(function(){
    $(".box").on("click", (function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("backgroun-color", "red");
    });
});


$(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
});



$(document).ready(function() {
    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		// If this object is already red, turn it black
    		$("." + className).css("background-color", "#000");
    	} else {
    		// Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");
    	}
    });
});



$(document).ready(function(){
    $("p").click(function(){
        $(this).text('Changed only the text for this paragraph');
    });
     $(".card").mouseenter(function(){
        $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
    });
});



$(".module-nav").on("click", function(){
  let allModulesCardsSelector = ".card";
  let thisModuleCardsSelector = "." + this.id + "-card";
  $(allModulesCardsSelector).removeClass("card-highlight");
  $(thisModuleCardsSelector).addClass("card-highlight");
});


$("#button").parent();
$("div").children();
$("div").children("p");


$("p").click(function(){
    $(this).children('a').css("background-color", "yellow");
});




$("div").next(); //It traverses  along the DOM and returns the next sibling element in the DOM after the selected element.

$("div").prev(); //It traverses backwards along the DOM and returns the previous sibling element in the DOM after the selected element.

$("div").toggleClass("bigBorder"); //we could add that class as we click on the div and remove it when we click again.



$("button").click(function() {
	$(this).next().slideToggle("slow");
});

$('button').click(function() {
	$(this).prev().slideDown();
});

$('h2').click(function() {
	$(this).next().children("p").slideUp();
});


//first(), last(), siblings() and filter()
//The first() function returns the first element in the selected set of elements.
//The last() function returns the last element in the selected list of elements.
//The siblings() function returns all siblings of a given element that share the same parent.
// filter() The filter method lets you specify some additional criteria.


var panelColor = $(this).css("background-color");

$(".resetButton").css("background-color", panelColor);


//----------------------------

$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});
$('#card-btn-1').click(function(){
	$(this).siblings("span").addClass("yellow");
});

$('#card-btn-2').click(function(){
	$(this).siblings("#card-par-1").addClass("red");
});

$('#card-btn-3').click(function(){
	$(this).siblings().addClass("large-font");
});

//-----------------
$('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$("#card p").first().addClass("red");
});

$('#card-btn-2').click(function(){
	$("#card p").last().addClass("yellow");
});

$('#filter').click(function(){
    $("p").filter(".special").addClass("green");
});


//---------------


$('.side-heading').click(function(){
	$('.side-heading').siblings().removeClass("highlight");
	$(this).siblings().addClass("highlight");

});