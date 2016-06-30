/**
 * Created by xiaoxin111 on 2016/1/19.
 */
window.onload=function(){
	
		var topbtn = document.getElementById("btn");
	    var timer = null;
	    var pagelookheight = document.documentElement.clientHeight;
        imgLocation("container", "box");
        var imgData = {
            "data": [{"src": "32.jpg"}, {"src": "33.jpg"}, {"src": "34.jpg"}, {"src": "35.jpg"},
                {"src": "36.jpg"}, {"src": "37.jpg"}, {"src": "38.jpg"},{"src": "39.jpg"},{"src": "40.jpg"},{"src": "41.jpg"},
                {"src": "42.jpg"},{"src": "43.jpg"},{"src": "44.jpg"},{"src": "45.jpg"},{"src": "46.jpg"},{"src": "47.jpg"},
                {"src": "48.jpg"},{"src": "49.jpg"},{"src": "50.jpg"},{"src": "51.jpg"},{"src": "52.jpg"},{"src": "54.jpg"}]
        };
        window.onscroll = function () {
            if (checkFlag("container", "box")) {
                var ccontent = document.getElementById("container");
                for (var i = 0; i < imgData.data.length; i++) {
                    var c_content = document.createElement("div");
                    c_content.className = "box";
                    ccontent.appendChild(c_content);
                    var boximg = document.createElement("div");
                    boximg.className = "box_image";
                    c_content.appendChild(boximg);
                    var img = document.createElement("img");
                    img.src = "NuLi/image/" + imgData.data[i].src;
                    boximg.appendChild(img);
                }
                imgLocation("container", "box");
            } 
            
            
            var backtop = document.body.scrollTop;
            if (backtop >= pagelookheight) {
                topbtn.style.display = "block";
            } else {
                topbtn.style.display = "none";
            }
        };
        

        topbtn.onclick = function () {
//            alert("Hello")

            timer = setInterval(function () {
                var backtop = document.body.scrollTop;
                var speedtop = backtop / 5;
                document.body.scrollTop = backtop - speedtop;
                if (backtop == 0) {
                    clearInterval(timer);
                }
            }, 30);
        }
}


function  checkFlag(Flag_parent,Flag_content){
        var parent_Flag = document.getElementById(Flag_parent);
        var content_Flag = getChildElemnet(parent_Flag, Flag_content);
        var lastContentHeight = content_Flag[content_Flag.length - 1].offsetTop;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //console.log(lastContentHeight+":"+scrollTop+":"+pageHeight);
        if (lastContentHeight < scrollTop + pageHeight) {
            return true;
            
        }

}
function  imgLocation(parent,content){
        var cparent = document.getElementById(parent);
        var ccontent = getChildElemnet(cparent, content);
        var imgWidth = ccontent[0].offsetWidth;
        var num = Math.floor(document.documentElement.clientWidth / imgWidth);
        cparent.style.cssText = "width:" + num * imgWidth + "px;margin:0px auto";
        var BoxHeightArr = [];
        for (var i = 0; i < ccontent.length; i++) {
            if (i < num) {
                BoxHeightArr[i] = ccontent[i].offsetHeight;
            } else {
                var minheight = Math.min.apply(null, BoxHeightArr);
                var minIndex = getminHeightLocation(BoxHeightArr, minheight);
                ccontent[i].style.position = "absolute";
                ccontent[i].style.top = minheight + "px";
                ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
                BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
            }
        }
}
function  getminHeightLocation(BoxHeightArr,minHeight) {
        for (var i in  BoxHeightArr) {
            if (BoxHeightArr[i] == minHeight) {
                return i;
            }
        }
}
function  getChildElemnet(parnet,content){
        var contentArr = [];
        var allcontent = parnet.getElementsByTagName("*");
        for (var i = 0; i < allcontent.length; i++) {
            if (allcontent[i].className == content) {
                contentArr.push(allcontent[i]);
            }
        }
        return contentArr;
}









