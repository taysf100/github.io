var myMessages=[
	"This is the first message",
	"This is the second message",
	"This is the third message",
	"This is the fourth message",
	"This is the fifth message",
	"This is the sixth message",
	"This is the seventh message",
	"This is the eighth message",
	"This is the nineth message",
	"This is the last message"
];
var divMessages=document.getElementById("messages");
var btn=document.getElementById("getButton");
btn.addEventListener("click",function(){
	var randomNo=Math.floor(Math.random()*10);
	divMessages.insertAdjacentHTML('beforeend', myMessages[randomNo]+"<br>");
});