var turn=0;
var p1 = 0;
var p2 = 0;
var num;
var p;
var ch_pos

function startgame(player, p, turn, num)
    {
        /*
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box100'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box99'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box98'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box97'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box96'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box95'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box94'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box93'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box92'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox left' id='box91'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox right' id='box90'></div>"
        document.getElementById("i").innerHTML+="<div class='boardbox right' id='box89'></div>"
        */
        var sum;
    if (p=='p1')
        {
        p1 = p1 + num;
        p1 = check_pos(p1);
        sum = p1;
        }
     
    if (p=='p2')
        {
        p2 = p2 + num;
        p2 = check_pos(p2);
        sum = p2
        }

    document.getElementById(`${player}`).style.transition = `linear all .5s`
    if (sum < 10)
        {
        /*
        var s=document.getElementById(player);
        document.getElementById("box97").appendChild(s); 
        */
        //document.getElementById(`${player}`).style.left = `${(sum-1)*62}px`
        document.getElementById(`${player}`).style.left = `${(sum * 62) - 341}px`
        document.getElementById(`${player}`).style.top = `${-279}px`   
        }
    else if (sum == 100) 
        {
        /*winSound.play()*/
        if (player == 'p1') {alert("Player1 Won !!")}
        else if (player == 'p2') {alert("Player2 Won !!")}
        location.reload()
        }
    
    else
        {
        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())

        if (n1 % 2 != 0) 
            {
            if (n2 == 0)
                {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - turn}px`
                }
            else 
                {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`
                }
            }

        else if (n1 % 2 == 0) 
            {
            if (n2 == 0) 
                {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - turn}px`
                }
            else 
                {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`
                }
            }
        }
    }

function check_pos(ch_pos)
    {
        if(ch_pos>100) {ch_pos=ch_pos-num}
        if (ch_pos == 1) {ch_pos = 38}
        if (ch_pos == 4) {ch_pos = 14}
        if (ch_pos == 9) {ch_pos = 31}
        if (ch_pos == 17) {ch_pos = 7}
        if (ch_pos == 21) {ch_pos = 42}
        if (ch_pos == 28) {ch_pos = 84}
        if (ch_pos == 51) {ch_pos = 67}
        if (ch_pos == 54) {ch_pos = 34}
        if (ch_pos == 62) {ch_pos = 19}
        if (ch_pos == 64) {ch_pos = 60}
        if (ch_pos == 71) {ch_pos = 91}
        if (ch_pos == 80) {ch_pos = 100}
        if (ch_pos == 87) {ch_pos = 24}
        if (ch_pos == 93) {ch_pos = 73}
        if (ch_pos == 95) {ch_pos = 75}
        if (ch_pos == 98) {ch_pos = 79} 
        return (ch_pos); 
    }

document.getElementById("disBtn").addEventListener("click", function () 
    {
    num = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice").innerHTML=num
    
    if(turn==0)
        {
        document.getElementById("turn").innerText='Player1';
        turn =1;
        startgame('player1', 'p1', 0, num);
        }
    else 
        {
        document.getElementById("turn").innerText='Player2';
        turn =0;
        startgame('player2', 'p2', 1, num);
        }
    }
)