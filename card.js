const hidden_card = document.createElement('div');
hidden_card.setAttribute("class","card");
const div_column = document.createElement('div');
div_column.setAttribute("class","badge");
const up = document.createElement('p');
const down = document.createElement('p');
up.classList.add("up");
up.innerText = "Whot";
down.classList.add("down");
down.innerText = "Whot";
div_column.appendChild(up);
div_column.appendChild(down);
hidden_card.appendChild(div_column);


const square_card = document.createElement('div');
square_card.setAttribute("class","card");
square_card.classList.add("open");
const br = document.createElement('div');
br.setAttribute("class","br");
const small_square1 = document.createElement('div');
small_square1.setAttribute("class","square-sm");
br.appendChild(small_square1)
const square = document.createElement('div');
square.setAttribute("class","square");
const tr = document.createElement('div');
tr.setAttribute("class","tr");
const small_square2 = document.createElement('div');
small_square2.setAttribute("class","square-sm");
tr.appendChild(small_square2)
square_card.appendChild(br);
square_card.appendChild(square);
square_card.appendChild(tr);


const cross_card = document.createElement('div');
cross_card.setAttribute("class","card");
cross_card.classList.add("open");
const bry = document.createElement('div');
bry.setAttribute("class","bry");
const small_cross1 = document.createElement('div');
small_cross1.setAttribute("class","cross-sm");
const small_cross_top1 = document.createElement('div');
small_cross_top1.setAttribute("class","cross-top-sm");
const small_cross_top2 = document.createElement('div');
small_cross_top2.setAttribute("class","cross-main-sm");
const small_cross_top3 = document.createElement('div');
small_cross_top3.setAttribute("class","cross-top-sm");
small_cross1.appendChild(small_cross_top1)
small_cross1.appendChild(small_cross_top2)
small_cross1.appendChild(small_cross_top3)
bry.appendChild(small_cross1)
const cross = document.createElement('div');
cross.setAttribute("class","cross");
const cross_top1 = document.createElement('div');
cross_top1.setAttribute("class","cross-top");
const cross_top2 = document.createElement('div');
cross_top2.setAttribute("class","cross-main");
const cross_top3 = document.createElement('div');
cross_top3.setAttribute("class","cross-top");
cross.appendChild(cross_top1)
cross.appendChild(cross_top2)
cross.appendChild(cross_top3)
const trd = document.createElement('div');
trd.setAttribute("class","try");
const small_cross2 = document.createElement('div');
small_cross2.setAttribute("class","cross-sm");
const small_cross_top4 = document.createElement('div');
small_cross_top4.setAttribute("class","cross-top-sm");
const small_cross_top5 = document.createElement('div');
small_cross_top5.setAttribute("class","cross-main-sm");
const small_cross_top6 = document.createElement('div');
small_cross_top6.setAttribute("class","cross-top-sm");
small_cross2.appendChild(small_cross_top4)
small_cross2.appendChild(small_cross_top5)
small_cross2.appendChild(small_cross_top6)
trd.appendChild(small_cross2)
cross_card.appendChild(bry);
cross_card.appendChild(cross);
cross_card.appendChild(trd);


const circle_card = document.createElement('div');
circle_card.setAttribute("class","card");
circle_card.classList.add("open");
const brt = document.createElement('div');
brt.setAttribute("class","br");
const small_circle1 = document.createElement('div');
small_circle1.setAttribute("class","circle-sm");
brt.appendChild(small_circle1)
const circle = document.createElement('div');
circle.setAttribute("class","circle");
const trt = document.createElement('div');
trt.setAttribute("class","tr");
const small_circle2 = document.createElement('div');
small_circle2.setAttribute("class","circle-sm");
trt.appendChild(small_circle2)
circle_card.appendChild(brt);
circle_card.appendChild(circle);
circle_card.appendChild(trt);


const triangle_card = document.createElement('div');
triangle_card.setAttribute("class","card");
triangle_card.classList.add("open");
const brc = document.createElement('div');
brc.setAttribute("class","br");
const small_triangle1 = document.createElement('div');
small_triangle1.setAttribute("class","triangle-sm");
brc.appendChild(small_triangle1)
const triangle = document.createElement('div');
triangle.setAttribute("class","triangle");
const trc = document.createElement('div');
trc.setAttribute("class","tr");
const small_triangle2 = document.createElement('div');
small_triangle2.setAttribute("class","triangle-sm");
trc.appendChild(small_triangle2)
triangle_card.appendChild(brc);
triangle_card.appendChild(triangle);
triangle_card.appendChild(trc);


const star_card = document.createElement('div');
star_card.setAttribute("class","card");
star_card.classList.add("open");
const brm = document.createElement('div');
brm.setAttribute("class","br");
const small_star1 = document.createElement('div');
small_star1.setAttribute("class","star-sm");
brm.appendChild(small_star1)
const star = document.createElement('div');
star.setAttribute("class","star");
const trm = document.createElement('div');
trm.setAttribute("class","tr");
const small_star2 = document.createElement('div');
small_star2.setAttribute("class","star-sm");
trm.appendChild(small_star2)
star_card.appendChild(brm);
star_card.appendChild(star);
star_card.appendChild(trm);


const camo_card = document.createElement('div');
camo_card.setAttribute("class","card");
camo_card.classList.add("open");
const brq = document.createElement('div');
brq.setAttribute("class","br");
const small_sec1 = document.createElement('div');
small_sec1.setAttribute("class","sm-sec");
const val1 = document.createElement('p');
val1.setAttribute("class","val");
val1.innerText = "20";
const word1 = document.createElement('p');
word1.setAttribute("class","downc");
word1.classList.add("camo-sm");
word1.innerText = "W";
small_sec1.appendChild(val1);
small_sec1.appendChild(word1);
brq.appendChild(small_sec1)
const sec = document.createElement('div');
sec.setAttribute("class","camo");
const wordUp = document.createElement('p');
wordUp.setAttribute("class","upc");
wordUp.innerText = "Whot";
const wordDown = document.createElement('p');
wordDown.setAttribute("class","downc");
wordDown.innerText = "Whot";
sec.appendChild(wordUp);
sec.appendChild(wordDown);
const trq = document.createElement('div');
trq.setAttribute("class","tr");
const small_sec2 = document.createElement('div');
small_sec2.setAttribute("class","sm-sec");
small_sec2.classList.add("upt");
const val2 = document.createElement('p');
val2.setAttribute("class","val");
val2.innerText = "20";
const word2 = document.createElement('p');
word2.setAttribute("class","downc");
word2.classList.add("camo-sm");
word2.innerText = "W";
small_sec2.appendChild(val2);
small_sec2.appendChild(word2);
trq.appendChild(small_sec2)
camo_card.appendChild(brq);
camo_card.appendChild(sec);
camo_card.appendChild(trq);

const cards = [camo_card, star_card, square_card, cross_card, circle_card, triangle_card];

export {cards , hidden_card}