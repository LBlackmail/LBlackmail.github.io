delay = 3000;
max_angle = 0;

console.log(list);

current = "shot1";

function other(s)
{
    if(s == "shot1")
    {
        return "shot2";
    }
    else
    {
        return "shot1";
    }
}

function nextImage()
{
	var dir = "img/";
	var rand = list[Math.floor(Math.random() * (list.length-1))+1];
	var img_ele = document.getElementById(current);
	var name_ele = document.getElementById("name");

}

nextImage();
setInterval("nextImage();",delay);
