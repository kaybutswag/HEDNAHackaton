
  var fillPropertiesNav=function(list){

    for(i=0;i<list.length;i++){
      var dItem= $("<div>");
      dItem.attr("data-name",list[i].name);
      dItem.addClass("dropdown-item");
      dItem.html("<a href='PropertyPage.html'>"+list[i].name+"</a>")
      $(".dropdown-menu").append(dItem);
  }

}


var searchDB = function() {
      var queryURL = "http://localhost:8080/getProperties";
        $.ajax({
          crossDomain: true,
          url: queryURL,
          method: "GET"
        }).then(function(response) {
        fillPropertiesNav(response);
      });
    }
$( document ).ready(function() {


searchDB();
});

    

 