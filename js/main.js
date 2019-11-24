const scene1 = gsap.timeline({paused:true});
const scenes = {
    1: scene1
};

window.onload = function (){
    setScene1();
};

function setScene1(){
    scene1.from('#scene1 #text', {duration: 1.6, opacity: 0, y: '-50%'});
    scene1.from('#scene1 #circle', {duration: 0.9, opacity: 0, scale: 0.5, ease: "back"}, "+1");
    scene1.from('#scene1 img', {duration: 0.3, opacity: 0, y: '10%'}, "+1.8");
    
    scene1.to('#scene1 #circle', {duration: 0.6, x: '-250%'}, "+3.72");
    scene1.to('#scene1 #text', {duration: 0.2, opacity: 0}, "+3.72");
    scene1.to('#scene1 img', {duration: 0.2, opacity: 0, scale: 0.9}, "+3.6");
}

function playMusic(){
    document.querySelector("#music").volume = 0.5;
    document.querySelector("#music").play();
}

function playVoiceOver(scene = 1){
    document.querySelector(`#voice${scene}`).play();
}

function playAnimation(scene = 1){
    setTimeout(() => {
        playVoiceOver(scene);
        playMusic();
        scenes[scene].play();
    }, 1000);
}

function stopAnimation(scene = 1){
    document.querySelector("#music").stop();
    document.querySelector(`#voice${scene}`).stop();
    scenes[scene].kill();
}