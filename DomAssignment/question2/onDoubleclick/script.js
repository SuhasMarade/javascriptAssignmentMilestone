const btn = document.getElementById('btn');
const zoom = document.getElementById('zoom');
btn.addEventListener("dblclick", function(){
    zoom.style.color = "green";
    zoom.style.fontSize = "100px";
    zoom.innerText = "Now I'm Green and Zoomed"
});