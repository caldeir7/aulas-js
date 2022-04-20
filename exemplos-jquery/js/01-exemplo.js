const titulo = $("h1");

// Mudar o texto do elemento

titulo.text("Olá Jquery");

// CSS bia jQuery
// titulo.css("color", "blue")
// ({}) parenteses com chaves objeto
titulo.css({
    "color" : "blue",
    "text-align" : "center",
    "font-size" : "25px"
});

titulo.on("click", function(){
    $("body").css("background-color", "yellow")
    $("h2").text("Clicou!!");

    titulo.fadeOut();
})

