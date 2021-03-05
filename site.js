if (getParameterByName('owner')) {
    var owner = getParameterByName('owner');
    dj('header h1').html('Glow - Inside ~ ' + owner)
}
if(dj('.onr'.val())){
    var yourname = dj('.onr'.val();
} else { var yourname = "Your Name";}

let json = get.json('https://raw.githubusercontent.com/glowinside/json/main/1.json')
var content = "";
for (i = 0; i < json.length; i++) {
    var rand = Math.floor((Math.random() * parseInt(json.length)));
    csl(rand);
    content += `<div class="image">
    <span class="title">${json[rand].title +" ~ "+ owner}</span><br>
    <img src="${json[rand].url}" class="post-img">
    <a href="` + json[rand].url + `" download="Glow - Inside.jpg">
    <img class="download" src="download.png"></a>
    <a href="whatsapp://send?text=${location.origin + location.pathname + "?owner="+yourname}"  data-action="share/whatsapp/share"  
    target="_blank"> <img class="whatsapp" src="whatsapp.png"></a></div>`;
}

dj('.gocontainer').html(content);
