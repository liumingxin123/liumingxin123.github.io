/**
 * 回到顶部的JS实现
 */
window.onload = function () {
    var topbtn = document.getElementById("btn");
    var timer = null;
    var pagelookheight = document.documentElement.clientHeight||document.body.clientHeight;

    window.onscroll = function () {
//        alert("hello");
        var backtop = document.documentElement.scrollTop||document.body.scrollTop;
        if (backtop >= pagelookheight) {
            topbtn.style.display = "block";
        } else {
            topbtn.style.display = "none";
        }
    }

    topbtn.onclick = function () {

       if (document.documentElement.scrollTop) {
    	   timer = setInterval(function () {
               var backtop = document.documentElement.scrollTop;
               var speedtop = backtop / 5;
               document.documentElement.scrollTop= backtop - speedtop;
               if (backtop == 0) {
                   clearInterval(timer);
               }
           }, 30);
	  }
       
       if (document.body.scrollTop) {
    	   timer = setInterval(function () {
               var backtop = document.body.scrollTop;
               var speedtop = backtop / 5;
               document.body.scrollTop= backtop - speedtop;
               if (backtop == 0) {
                   clearInterval(timer);
               }
           }, 30);
	  }
       
       
    }
}



/**
 *   日期和时间的JS实现
 */


var mytime = setInterval(function() {
    getTime();
}, 1000);


function getTime(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	var y=d.toLocaleDateString();
	document.getElementById("ptime").innerHTML=t+" "+y;
}
























