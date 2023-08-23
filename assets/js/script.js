var turn=0;
var p1 = 0;
var p2 = 0;
var num;
var p;
var sum;
var ch_pos;
var temp;
var colPos = 0;
var rowPos = 0;
var x = -610;
var y = 330;
var a = 62;
var b = 10;

//Need to adjust as per media changes
if (window.matchMedia("(max-width: 500px)").matches)
{
    var x = -300;
    var y = 140;
    var a = 30;
    var b = 4;
}
else if (window.matchMedia("(max-width: 800px)").matches)
{
    var x = -450;
    var y = 270;
    var a = 45;
    var b = 7;
}

//This function will be called on click on Roll Dice to generate dice number for respective player
function Roll_Dice()
{
    num = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice").innerHTML=num;
    
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

//This function will be called to move players postion on board
function startgame(player, p, turn, num)
{
    console.log("p top of startgame", p, "num", num);
    if (p =='p1')
    {
        p1 = p1 + num;
        p1 = check_pos(p1);
        sum = p1;
        console.log("P1 Num:", num);
        console.log("P1 Position:", p1);
        console.log("P1 Sum:", sum);
    }
     
    if (p =='p2')
    {
        p2 = p2 + num;
        p2 = check_pos(p2);
        sum = p2;
        console.log("P2 Num:", num);
        console.log("P2 Position:", p2);
        console.log("P2 Sum:", sum);
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`;

    if (sum == 100) 
    {
        
        if (player == 'player1') {alert("Player1 Won !!")}
        else if (player == 'player2') {alert("Player2 Won !!")}
        location.reload();
    }
    else
    {
        if ((Math.floor((sum-1)/10))%2 == 0)
        {
            if ((sum%10)==0)
            {
                colPos = 10-a;
            }
            else
            {
                colPos = x + (sum%10-1)*a;
            }
            temp = Math.floor((sum-1)/10);
            rowPos = y-a*temp;
            console.log("temp =", temp);
            console.log("top =", rowPos);
            console.log("Left =", colPos);
        }
        else
        {
            colPos = b - ((sum-1)%10+1)*a;
            temp = Math.floor((sum-1)/10);
            rowPos = y-a*temp;
            console.log("else temp =",temp);
            console.log("else top =",rowPos);
            console.log("else Left =", colPos);
        }
        document.getElementById(`${player}`).style.left = `${colPos}px`;
        document.getElementById(`${player}`).style.top = `${rowPos-turn*a}px`;
    }
}

//This function will be called to adjust players position according to Snakes and Ladders on board
function check_pos(ch_pos)
    {
        if(ch_pos>100) {ch_pos=ch_pos-num};
        if (ch_pos == 1) {ch_pos = 38};
        if (ch_pos == 4) {ch_pos = 14};
        if (ch_pos == 9) {ch_pos = 31};
        if (ch_pos == 17) {ch_pos = 7};
        if (ch_pos == 21) {ch_pos = 42};
        if (ch_pos == 28) {ch_pos = 84};
        if (ch_pos == 51) {ch_pos = 67};
        if (ch_pos == 54) {ch_pos = 34};
        if (ch_pos == 62) {ch_pos = 19};
        if (ch_pos == 64) {ch_pos = 60};
        if (ch_pos == 71) {ch_pos = 91};
        if (ch_pos == 80) {ch_pos = 100};
        if (ch_pos == 87) {ch_pos = 24};
        if (ch_pos == 93) {ch_pos = 73};
        if (ch_pos == 95) {ch_pos = 75};
        if (ch_pos == 98) {ch_pos = 79};
        return (ch_pos); 
    }
