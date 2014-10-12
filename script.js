
var offset = 0;
var limit = 15; /* enough elements to activate the scrollbar*/

getFakeData(0,limit,display);

/* loop over the data and display it inside the page*/
function display(i, datas){
  console.log('called cb',datas);
  $.each(datas, function(i, data) {
    $.each(data, function(key,val) {
      $('#infinite-list').append('<span>'+key+': '+val+'</span><br>' );                   
    });
    $('#infinite-list').append('<hr>');   
  });   
}

/* if scrolling to the bottom -10% start already loading new stuff */
$(document).ready(function(){
  $("#infinite-list").scroll(function(){
    var infiniteList = $('#infinite-list');

    console.log('$(window).scrollTop()',infiniteList.scrollTop());
    console.log('$(document).height()',$(document).height());
    console.log('$(window).height()',infiniteList.height());
    console.log('$(document).height()*0.05)',$(document).height()*0.1);
    console.log('difference: ',$(document).height()-infiniteList.height());
    
    if(infiniteList.scrollTop() + infiniteList.innerHeight() >= infiniteList.prop('scrollHeight')){
      offset +=limit;
      getFakeData(offset,limit,display);
    }
  });
});


/* simulate a webservice */
  function getFakeData(offset, limit, callback) {
    var data = [];
    for (var i=0; i<limit; i++) {
      var id = offset + i;
      data.push({
        id: id,
        name: "Name " + id,
        description: "Description " + id
      });
    }
    console.log("loaded the data",data);
    setTimeout(function(){
      console.log("timeout");
      callback(null, data);
    }, 1000) /* simulate 1s delay for the service call */
  };



