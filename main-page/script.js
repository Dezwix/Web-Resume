var header = document.getElementById("sidenav");
var links = header.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

var i = 0;
var txt = 'I am Aleksandr Anseev, Computer Programming student in Canada, Ottawa. I have experience in building web-sites and developing software. More information about my skills and epxerience you can find below!';
var speed = 50;
var btnOpacity = 1;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if(btnOpacity > 0) {
        btnOpacity -= 0.1;
        document.getElementById("typeBtn").style.opacity = btnOpacity;
    }
  }
}