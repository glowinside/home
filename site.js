if (getParameterByName('owner')) {
    var owner = getParameterByName('owner');
} else {
    owner='😇';
}
dj('header h1').html('Glow - Inside ~ ' + owner)
window.yourname = "Your Name" ;

let json = get.json('glow.json')
var content = "";
for (i = 0; i < json.length; i++) {
    var rand = Math.floor((Math.random() * parseInt(json.length)));
    csl(rand);
    content += `<div class="image">
    <span class="title">${json[rand].title +" ~ "+ owner}</span><br>
    <img src="${json[rand].url}" class="post-img">
    <a href="` + json[rand].url + `" download="Glow - Inside.jpg">
    <img class="download" src="https://github.com/glowinside/home/raw/main/download.png"></a>
    <a href="whatsapp://send?text=${location.origin + location.pathname + "?owner="}"  data-action="share/whatsapp/share"  
    target="_blank"> <img class="whatsapp" src="https://github.com/glowinside/home/raw/main/whatsapp.png"></a></div>`;
}

dj('.gocontainer').html(content);

document.getElementById('share').href = `whatsapp://send?text=${location.origin + location.pathname + "?owner="+ document.getElementById('onr').value}`; 
