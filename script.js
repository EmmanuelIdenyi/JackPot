const wrapper = document.querySelector('.wrapper');
const onLine = document.querySelector('.online');
const registerLInk = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.btn');
const computer = document.querySelector('.computer');
const local = document.querySelector('.local');
const onlinetoSelect = document.querySelector('.back2select'); 
const localtoSelect = document.querySelector('.back2select1'); 
const computertoSelect = document.querySelector('.back2select2'); 
const signaltoComputer = document.querySelector('.back2select3'); 
const nametoSignal = document.querySelector('.icon-close'); 
const player1 = document.querySelector('.player_size1');
const player2 = document.querySelector('.player_size2');
const twoTeams = document.querySelector('.size2')
const playerName = document.querySelector('.bton')
const threeTeams = document.querySelector('.size3');
const prev = document.querySelector('.back');
const forward = document.querySelector('.continue');
const computerSizeSelect = document.querySelectorAll('.modeComputer');
var clicked = 0
var click = new Audio("sounds/" + 'yellow' + ".mp3");
const signals = ["fa-face-angry","fa-face-dizzy","fa-face-frown","fa-face-frown-open","fa-face-dizzy","fa-face-grimace","fa-face-flushed","fa-face-grin","fa-face-grin-tongue","fa-face-grin-tongue-wink","fa-face-grin-tongue-squint","fa-face-grin-wink","fa-face-grin-wide","fa-face-grin-hearts","fa-face-grin-beam","fa-face-grin-beam-sweat","fa-face-grin-squint","fa-face-grin-squint-tears","fa-face-grin-stars","fa-face-grin-tears","fa-face-kiss","fa-face-kiss-wink-heart","fa-face-kiss-beam","fa-face-smile","fa-face-smile-wink","fa-face-smile-beam","fa-face-sad-tear","fa-face-sad-cry","fa-face-tired","fa-face-surprise","fa-face-rolling-eyes","fa-face-meh-blank","fa-face-meh","fa-face-laugh-wink","fa-face-laugh-squint","fa-face-laugh-beam","fa-face-laugh"];
var page = document.getElementById("result");
var div_row = document.createElement('div');
var teamsNo = 0


wrapper.classList.add('active-popup');
var i = 0;
const main = document.getElementById("section");
while (i < signals.length){
    const div_row = document.createElement('div');
    div_row.setAttribute("class","row");
    const div_column = document.createElement('div');
    div_column.setAttribute("class","column");
    const signal = document.createElement('i');
    signal.classList.add("fa-solid");
    signal.classList.add("fa-beat");
    signal.classList.add("fa-xl");
    signal.classList.add(signals[i]);
    signal.classList.add("class","signal");

    div_column.appendChild(signal);
    div_row.appendChild(div_column);
    main.appendChild(div_row);
    i += 1
}  

const emojis = document.querySelectorAll('.signal');
iconClose.addEventListener('click', ()=> {
    var audio = new Audio("sounds/" + 'blue' + ".mp3");
    audio.play();
    const Timeout = setTimeout(wrapper.classList.add('active'), 4000);
});
onlinetoSelect.addEventListener('click', ()=> {
    var audio = new Audio("sounds/" + 'red' + ".mp3");
    audio.play();
    wrapper.classList.remove("activeOnline");
    const Timeout = setTimeout(wrapper.classList.add('active'), 4000);
});
localtoSelect.addEventListener('click', ()=> {
    var audio = new Audio("sounds/" + 'red' + ".mp3");
    audio.play();
    wrapper.classList.remove("activeLocal");
    const Timeout = setTimeout(wrapper.classList.add('active'), 4000);
});
computertoSelect.addEventListener('click', ()=> {
    var audio = new Audio("sounds/" + 'red' + ".mp3");
    audio.play();
    wrapper.classList.remove("activeComputer");
    if (clicked == 2){
        player2.classList.remove('pressed');
        clicked = 0;
    }
    else if (clicked == 1){
        player1.classList.remove('pressed')
        clicked = 0;
    }
    const Timeout = setTimeout(wrapper.classList.add('active'), 4000);
});

onLine.addEventListener('click', ()=> {
    click.play();
    wrapper.classList.remove('active');
    wrapper.classList.add('activeOnline');
});
local.addEventListener('click', ()=> {
    click.play();
    wrapper.classList.remove('active');
    wrapper.classList.add('activeLocal');
});
computer.addEventListener('click', ()=> {
    click.play();
    wrapper.classList.remove('active');
    wrapper.classList.add('activeComputer');
});
player1.addEventListener('click', () => {
    var human = new Audio("sounds/" + 'blue' + ".mp3");
    if (!clicked){
        player1.classList.add('pressed');
        human.play()
        clicked = 1;
    }
    else if (clicked == 2){
        player2.classList.remove('pressed')
        player1.classList.add('pressed');
        human.play()
        clicked = 1;
    }
});
player2.addEventListener('click', () => {
    var robot = new Audio("sounds/" + 'green' + ".mp3");
    if (!clicked){
        player2.classList.add('pressed');
        robot.play()
        clicked = 2;
    }
    else if (clicked == 1){
        player1.classList.remove('pressed')
        player2.classList.add('pressed');
        robot.play()
        clicked = 2;
    }
});

twoTeams.addEventListener('click', () => {
    teamsNo = 2
});
threeTeams.addEventListener('click', () => {
    teamsNo = 3
});

computerSizeSelect.forEach(function(query) {
    query.addEventListener('click', () => {
        if (clicked == 1){
            click.play();
            wrapper.classList.remove('activeComputer');
            wrapper.classList.add('activeSelect')
        }else if (clicked == 0){
            alert("Choose Player Size!!!")
        }
    })
});

emojis.forEach(function(emoji) {
    emoji.addEventListener('click',() => {
        click.play()
        playerSignal = emoji.classList[3];
        wrapper.classList.remove('activeSelect');
        wrapper.classList.add('activeSelected');
        div_row.setAttribute("class","chose");
        const r = document.createElement('i');
        r.classList.add("fa-solid");
        r.classList.add("fa-2xl");
        r.classList.add("chosen");
        r.classList.add(playerSignal);
        div_row.appendChild(r);
        page.appendChild(div_row);
    })
});

signaltoComputer.addEventListener("click", () => {
    click.play();
    wrapper.classList.remove('activeSelect');
    if (clicked == 2){
        player2.classList.remove('pressed');
        clicked = 0;
    }
    else if (clicked == 1){
        player1.classList.remove('pressed')
        clicked = 0;
    }
    wrapper.classList.add('activeComputer');
});
nametoSignal.addEventListener("click", () => {
    click.play();
    wrapper.classList.remove('activeInfo');
    wrapper.classList.add('activeSelected');
    div_row.setAttribute("class","chose");
    const r = document.createElement('i');
    r.classList.add("fa-solid");
    r.classList.add("fa-2xl");
    r.classList.add("chosen");
    r.classList.add(playerSignal);
    div_row.appendChild(r);
    page.appendChild(div_row);
});

prev.addEventListener('click', () => {
    wrapper.classList.remove('activeSelected');
    page.removeChild(div_row)
    var audio = new Audio("sounds/" + 'red' + ".mp3");
    audio.play();
    div_row = document.createElement('div');
    wrapper.classList.add('activeSelect');
});

forward.addEventListener('click', () => {
    wrapper.classList.remove('activeSelected');
    page.removeChild(div_row)
    var audio = new Audio("sounds/" + 'red' + ".mp3");
    audio.play();
    div_row = document.createElement('div');
    wrapper.classList.add('activeInfo');
});

playerName.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = document.getElementById("query");
    console.log(inputs.value);
    inputs.value = ""
})
