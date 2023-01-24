var app = document.getElementById('head');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('welcome')
    .pauseFor(500)
    .deleteAll()
    .start();