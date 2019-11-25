const timeline = gsap.timeline({paused:true});
const scene1 = gsap.timeline();
const scene2 = gsap.timeline();
const scene3 = gsap.timeline();
const scene4 = gsap.timeline();
const scene5 = gsap.timeline();
const scene6 = gsap.timeline();
const scenes = {
    1: scene1,
    2: scene2,
    3: scene3,
    4: scene4,
    5: scene5,
    6: scene6
};

window.onload = function (){
    setScene1();
    timeline.add(scene1);
    setScene2();
    timeline.add(scene2);
    setScene3();
    timeline.add(scene3);
    setScene4();
    timeline.add(scene4);
    setScene5();
    timeline.add(scene5);
    setScene6();
    timeline.add(scene6);

    Object.values(scenes).forEach((scene, index) => {
        scene.eventCallback("onStart", () => {
            document.querySelector(`#voice${index + 1}`).play();
        });
        
        // scene.eventCallback("onComplete", () => {
        //     setTimeout(() => {
        //         document.querySelector(`#voice${index + 1}`).pause();
        //         document.querySelector(`#voice${index + 1}`).currentTime = 0;
        //     }, 200);
        // });
    });

    timeline.eventCallback("onComplete", () => {
        setTimeout(() => {
            document.querySelector("#music").pause();
            document.querySelector("#music").currentTime = 0;
        }, 2000);
    });
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
    scene2.fromTo('#scene2 #image', {x: '20%'}, {duration: 0.9, x: 0});
    scene2.from('#scene2 li', {duration: 0.2, opacity: 0, y: '-10%', stagger: 1.5}, "+5");
    scene2.to('#scene2 #text', {duration: 0.2, opacity: 0}, "+10.5");
    scene2.fromTo('#scene2 #image', {x: 0},{duration: 0.9, x: "45%"});
    scene2.to('#scene2 img', {duration: 1, scale: 2, x: '43%', y: '-48%'});
    scene2.to('#scene2 #image', {duration: 0, scale: 0.9, opacity: 0});
}

function setScene3(){
    scene3.from('#scene3', {duration: 0.01, opacity: 0});
    scene3.to('#scene3 #zoomed', {duration: 1.5, scaleY: 0.33, scaleX: 0.28, x: '-23.3%', y: '-0.78%'});
    scene3.to('#scene3 #zoomed', {duration: 0.1, opacity: 0}, "+1.3");
    scene3.to('#scene3 #detail', {duration: 1.5, scale: 0.7, x: "-2%"}, "+1.45");
    scene3.to('#scene3 #detail', {duration: 3, y: "-37%"}, "+3.5");
    scene3.to('#scene3 #scroll', {duration: 5, y: "-70%"}, "+5");
    scene3.to('#scene3 #detail', {duration: 1.5, scale: 0.95, y: "-67%", x: "5%"});
}

function setScene4(){
    scene4.to('#scene3', {delay: 1.75, duration: 0.4, opacity: 0, scale: 1.15});
    scene4.from('#scene4', {duration: 0.6, opacity: 0, scale: 1.15});
    scene4.from('#scene4 .submit-project', {delay: 6.1, opacity: 0.01, duration: .2, stagger: 2.8});
    scene4.to('#scene4', {duration: 0.4, opacity: 0, scale: 0.8});
}

function setScene5(){
    scene5.from('#scene5 #circle', {duration: 0.4, opacity: 0, y: '300%'});
    scene5.to('#scene5 #circle', {duration: 0.4, scale: 1.2});
    scene5.to('#scene5 #circle', {duration: 0.4, scale: 1});
    scene5.to('#scene5 #circle', {duration: 0.4, scale: 8});
    scene5.from('#scene5 #newsAndEvents', {duration: 0.3, opacity: 0}, "+1.2");
    scene5.from('#scene5 #newsAndEvents', {duration: 3, y: '30%'});
    scene5.to('#scene5 #newsAndEvents', {duration: 2.4, y: '0%'});
    scene5.to('#scene5 #newsAndEvents', {duration: 5, y: '-25%'});
    scene5.to('#scene5 #newsAndEvents', {duration: 1, scale: 1.1});
    scene5.from('#scene5 #submitEvent', {duration: 0.3, opacity: 0, scale: 0.9});
    scene5.to('#scene5 #submitEvent', {duration: 4, y: '-30%'});
    scene5.to('#scene5', {duration: 0.4, opacity: 0});
}

function setScene6(){
    scene6.from('#scene6 #list', {duration: 0.1, opacity: '0'});
    scene6.to('#scene6 #list', {duration: 8, rotationY: '-25deg', y: '-30%', scale: 0.85});
    scene6.to('#scene6 #list', {duration: 6, rotationY: '-25deg', y: '0', scale: 1});
    // scene6.from('#scene6 #filter', {duration: 2, opacity: 0});
    // scene6.to('#scene6 #filter', {duration: 2, rotationY: '-25deg', y: '-20%', scale: 1});
}

function playMusic(){
    document.querySelector("#music").volume = 0.2;
    document.querySelector("#music").play();
}

function playVoiceOver(scene = 1){
    // document.querySelector(`#voice${scene}`).play();

    document.querySelector(`#voice1`).play();
    setTimeout(() => {
        document.querySelector(`#voice2`).play();
    }, 4000);
    setTimeout(() => {
        document.querySelector(`#voice3`).play();
    }, 14000);
}

function playAnimation(scene = 6){
    setTimeout(() => {
        // playVoiceOver(scene);
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