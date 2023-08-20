let turn=0;
let p1;
let p2;
let num;
let p;

    function startgame(player, p, turn, num)
        {
        let sum
        if (player=='player1')
            {
            p1=p1+num;
            if(p1>100)
                {
                p1=p1-num;
                }
            sum=p1
            }
        
        document.getElementById(`${player}`).style.transition = `linear all .5s`
        
        if (sum<10)
            {
            document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
            document.getElementById(`${player}`).style.top = `${-0 * 62 - turn}px`
            location.reload()
            }
            
        else
            {
            numarr = Array.from(String(sum))
            n1 = eval(numarr.shift())
            n2 = eval(numarr.pop())
            }
        } 

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - turn}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - turn}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`
            }

        }

    document.getElementById("disBtn").addEventListener("click", function () 
        {
        num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
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
            turn=0;
            startgame('player2', 'p2', 1, num);
            }
        
        })