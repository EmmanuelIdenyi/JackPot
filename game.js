import { cards, hidden_card } from "./card.js";

// const players = [cpu1, cpu2, cpu3];
function deck(main){
    var pick
    var i = 0;
    while (i < 54){
        var layout = document.createElement('div');
        layout.setAttribute("class","layout1");
        var card =  hidden_card.cloneNode(true)
        
        card.setAttribute("style",`z-index: ${i}`);
        layout.appendChild(card)
        main.appendChild(layout);
        i += 1
    card.addEventListener('click', () => {
        drawCard(4,document.getElementById('section'))
    })
};
};
function drawCard(n, main){
    var pick
    var i = 0;
    while (i < n){
        var layout = document.createElement('div');
        layout.setAttribute("class","layout");
        pick = Math.floor(Math.random() * cards.length);
        var card =  cards[pick].cloneNode(true)
        card.setAttribute("style",`z-index: ${i}`);
        layout.appendChild(card)
        main.appendChild(layout);
        i += 1
};
};
deck(document.getElementById('main_section'))