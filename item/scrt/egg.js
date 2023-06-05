function tips()
{
	console.log("太美丽了Console，还是看看远处的Elements吧家人们");
}
function eggout(idlist,contentlist)
{
	for(var i=0;i<idlist.length;i++)
	{
		document.getElementById(idlist[i]).innerHTML=contentlist[i];
	}
	document.getElementById("header").innerHTML="<div style=\"float:left;margin-left:32px;margin-top:11px;font-weight:bold;font-size:30px;\"><a style=\"text-decoration:none;color:RGB(255,64,64);\" href=\"../\">QZYC Wiki</a></div>";
	document.getElementById("header").style.backgroundColor="RGB(16,16,32)";
}
