<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <link  type="text/css" href="../shipin/medias/shipin.css" rel="stylesheet"> 
 <link  href="../CSS/Style1.css" rel="stylesheet" type="text/css">
 <script src="../JS/jquery-2.1.1.min.js"></script>
<title>注销界面</title>
<style >
    form {
	margin-top: 30px;
	margin-bottom: 110px;
	margin-left:560px;
}
.a1{
	    color:snow;
	    text-decoration: none;
	}
</style>
</head>
<body>
  <div id="header">
    <div id="div1">
        <a  id="a1" href="../index1.jsp" title="HOME"><img id="imghome" src="../images/home.png"></a>
    </div>
       <ul class="ul1" >
           <li><a href="../shipin/shipin.jsp">关于我 </a></li>
           <li><a href="#">努力</a></li>
           <li><a href="#" >生活</a></li>
           <li><a href="#">奋斗</a></li>
           <li><a href="#">梦想</a></li>
       </ul>
       <div id="div2">
           <a class="a2" href="#" title="通过微信联系我"><img id="imgweixin" src="../images/weixin.png">  </a>
           <a class="a2" href="#" title="通过QQ联系我"><img id="imgqq" src="../images/qq.png"></a>
           <a class="a2" href="#" title="通过微博联系我"><img id="imgweibo" src="../images/weibo.png"></a>
           <a class="a2" href="#" title="通过电话联系我"><img id="imgtel" src="../images/tel.png"></a>
            <div style="margin-left: 285px;margin-top: -65px;width: 190px;color: white;" >
           <a  href="../xiugai/xiugai.jsp" title="修改用户信息" class="a1">[修改]</a>
           <a  href="#" title="注销用户信息" style="margin-left: 11px" class="a1">[注销]</a>
           </div>
       </div>
   </div>
   
   <div  id="context">
      <div class="link  link-code">
                  <span class="icon"></span>
                  <a  href="#" class="button" data-title="我在路上，我会快乐">
                      <span class="line  line-top"></span>
                      <span class="line  line-left"></span>
                      <span class="line  line-right"></span>
                      <span class="line  line-bottom"></span>
                     注销界面
                  </a>
              </div>
             <form action="/TPersonal/shanchu" method="post" >
        <table border="1" align="center"  >
            <tr align="center">
               <td >姓名</td>
               <td ><input type="text"  name="username"></td>
            </tr>
            <tr align="center">
               <td >密码</td>
               <td ><input type="password"  name="userpsd"></td>
            </tr>
            <tr align="center">
               <td >确认密码</td>
               <td ><input type="password"  name="userpsd1"></td>
            </tr>
            <tr align="center">
              <td  colspan="2" >    
				<input type="submit" value="注销" >     
              </td>
            </tr>
        </table>
   </form>          
   <div   id="di6">
            <div  id="div621">
                <marquee direction="right" ><h3 id="d621">梅花香自苦寒来 </h3>
                </marquee>
            </div>
              <div  id="div62">
                  <h3 id="d61">I have nothing to offer but blood , toil tears and sweat．</h3>
                  <h4 id="d62">----Winston Churchill</h4>
              </div>
            <div  id="div623">
                <marquee direction="right"  ><h3 id="d623">宝剑锋从磨砺出 </h3>
                </marquee>
            </div>
          </div>        
</body>
</html>