const timeline = gsap.timeline({paused:true});
const scene1 = gsap.timeline();
const scene2 = gsap.timeline();
const scenes = {
    1: scene1,
    2: scene2
};

window.onload = function (){
    setScene1();
    timeline.add(scene1);
    setScene2();
    timeline.add(scene2);
};

function setScene1(){
    scene1.from('#scene1 #text', {duration: 1.6, opacity: 0, y: '-50%'});
    scene1.from('#scene1 #circle', {duration: 0.9, opacity: 0, scale: 0.5, ease: "back"}, "+1");
    scene1.from('#scene1 img', {duration: 0.3, opacity: 0, y: '10%'}, "+1.8");
    
    scene1.to('#scene1 #circle', {duration: 0.6, x: '-250%'}, "+3.72");
    scene1.to('#scene1 #text', {duration: 0.2, opacity: 0}, "+3.72");
    scene1.to('#scene1 img', {duration: 0.2, opacity: 0, scale: 0.9}, "+3.6");
}

function setScene2(){
    scene2.fromTo('#scene2 #image', 
        {duration: 0.9, opacity: 0, x: '45%', scale: 0.7},
        {duration: 1.5, opacity: 1, x: '45%', scale: 1},
    );
    scene2.from('#scene2 img', {duration: 3, y: '100%', x: '0'});
    scene2.fromTo('#scene2 #image', 
        {x: '20%'},
        {duration: 0.9, x: 0}
    );
    scene2.fromTo('#scene2 img', 
        {duration: 3, x: '0'}, 
        {duration: 3, x: '-20%'}, 
    "+5.5");
    scene2.from('#scene2 li', {duration: 0.2, opacity: 0, y: '-10%', stagger: 1.5}, "+5");
    scene2.to('#scene2 img', {duration: 3, x: '-30%', y: '-20%'});
}

function playMusic(){
    document.querySelector("#music").volume = 0.5;
    document.querySelector("#music").play();
}

function playVoiceOver(scene = 1){
    // document.querySelector(`#voice${scene}`).play();

    document.querySelector(`#voice1`).play();
    setTimeout(() => {
        document.querySelector(`#voice2`).play();
    }, 4000);
}

function playAnimation(scene = 2){
    setTimeout(() => {
        playVoiceOver(scene);
        playMusic();
        // scenes[scene].play();
        timeline.play();
    }, 1000);
}

function stopAnimation(scene = 1){
    document.querySelector("#music").stop();
    document.querySelector(`#voice${scene}`).stop();
    scenes[scene].kill();
}