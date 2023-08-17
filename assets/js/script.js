let turn=0;
let p1sum=0;
let p2sum=0;
let num =0;



document.getElementById("disBtn").addEventListener("click", function () {
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerHTML=num
    
    if(turn==0)
        {
        document.getElementById("turn").innerText= 'Player1';
        turn = 1;
        }
    else
        {
            document.getElementById("turn").innerText='Player2';
            turn=0;
        }
    
})