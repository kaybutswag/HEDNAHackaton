// var pullGuests=function(list){

//     for(i=0;i<list.length;i++){
//       var tBody = $("tbody");
//       var tRow = $("<tr>");
//       // var guestValue = $("<td>").text(list[i].guestValueIndex);
//       // var yearTd = $("<td>").text(response.Year);
//       // var actorsTd = $("<td>").text(response.Actors);
//       tRow.append(titleTd, yearTd, actorsTd);
//       tBody.append(tRow);

//       dItem.attr("data-name",list[i].name);
//       dItem.addClass("dropdown-item");
//       dItem.html("<a href='PropertyPage.html'>"+list[i].name+"</a>")
//       $(".dropdown-menu").append(dItem);
//   }

// }


var searchDB = function() {
      var queryURL = "http://localhost:8080/guestRatings";
        $.ajax({
          crossDomain: true,
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        	console.log(response);
        // fillPropertiesNav(response);
      });
    }
$( document ).ready(function() {


searchDB();
});

