let turn=0;
let p1=0;
let p2=0;
let num;
let p;

    function startgame(player, p, turn, num)
    {
    var sum    
       
        if (p=='player1'){
            p1=p1+num;

        if(p1>100){
            p1=p1-num;
        }
       
        {
                if (p1 == 1) {
                    p1 = 38
                }
                if (p1 == 4) {
                    p1 = 14
                }
                if (p1 == 8) {
                    p1 = 30
                }
                if (p1 == 21) {
                    p1 = 42
                }
                if (p1 == 28) {
                    p1 = 76
                }
                if (p1== 32) {
                    p1 = 10
                }
                if (p1 == 36) {
                    p1 = 6
                }
                if (p1 == 48) {
                    p1 = 26
                }
                if (p1 == 50) {
                    p1 = 67
                }
                if (p1 == 62) {
                    p1 = 18
                }
                if (p1 == 71) {
                    p1 = 92
                }
                if (p1== 80) {
                    p1 = 99
                }
                if (p1 == 88) {
                    p1 = 24
                }
                if (p1== 95) {
                    p1 = 56
                }
                if (p1 == 97) {
                    p1 = 78
                }
        
                sum = p1
        
         }
                
    }
       
        document.getElementById(`${player}`).style.transition = `linear all .5s`
        
        if (sum<10)
            {
                document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-0 * 62 - turn}px`
                
            }
            else if (sum == 100) {
                /*winSound.play()*/
                if (player == 'p1') {
                    alert("Player1 Won !!")
                }
                else if (player == 'p2') {
                    alert("Player2 Won !!")
                }
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
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`

            }

    }
        else if (n1 % 2 == 0) 
        {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - turn}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - turn}px`
            }
        
        }
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
            startgame('player2', 'p2', 0, num);
        }
        turn=turn+1;
        
})