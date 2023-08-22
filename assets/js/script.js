var turn=0;
var p1 = 0;
var p2 = 0;
var num;
var p;
var sum;
var ch_pos;
var temp;

//Need to adjust as per media changes
var lft = 0;
var tp = 0;
var x = -610;
var y = 255;
var a = 62;


function Roll_Dice()
{
    num = Math.floor(Math.random() * 6 + 1)
    document.getElementById("dice").innerHTML=num
    
    if(turn==0)
    {
        document.getElementById("turn").innerText='Player1';
        turn = 1;
        startgame('player1', 'p1', 0, num);
    }
    else 
    {
        document.getElementById("turn").innerText='Player2';
        turn = 0;
        startgame('player2', 'p2', 1, num);
    }
}

function startgame(player, p, turn, num)
{
    if (p =='p1')
    {
        p1 = p1 + num;
        p1 = check_pos(p1);
        sum = p1;
    }
     
    if (p =='p2')
    {
        p2 = p2 + num;
        p2 = check_pos(p2);
        sum = p2
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`;

    if (sum == 100) 
    {
        /*winSound.play()*/
        if (player == 'player1') {alert("Player1 Won !!")}
        else if (player == 'player2') {alert("Player2 Won !!")}
        location.reload()
    }
    else
    {
        if ((sum%10)%2 == 0)
        {
            lft = x + (sum%10-1)*a;
            temp = Math.floor((sum-1)/10);
            tp = y-a*temp;
        }
        else
        {
            lft = 10 - ((sum-1)%10+1)*a;
            temp = Math.floor((sum-1)/10);
            tp = y-a*temp;
        }
        document.getElementById(`${player}`).style.left = `${lft}px`;
        document.getElementById(`${player}`).style.top = `${tp}px`;
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
