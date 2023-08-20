var turn=0;
var p1=0;
var p2=0;
var num;
var p;

    function startgame(player, p, turn, num)
    {
    var sum    
       
        if (p=='p1')
        {
            p1=p1+num;

        if(p1>100){
            p1=p1-num;
        }
        
                if (p1 == 1) {
                    p1 = 38
                }
                if (p1 == 4) {
                    p1 = 14
                }
                if (p1 == 9) {
                    p1 = 31
                }
                if (p1 == 17) {
                    p1 = 7
                }
                if (p1 == 21) {
                    p1 = 42
                }
                if (p1== 28) {
                    p1 = 84
                }
                if (p1 == 51) {
                    p1 = 67
                }
                if (p1 == 54) {
                    p1 = 34
                }
                if (p1 == 62) {
                    p1 = 19
                }
                if (p1 == 64) {
                    p1 = 60
                }
                if (p1 == 71) {
                    p1 = 91
                }
                if (p1== 80) {
                    p1 = 100
                }
                if (p1 == 87) {
                    p1 = 24
                }
                if (p1== 93) {
                    p1 = 73
                }
                if (p1 == 95) {
                    p1 = 75
                }
                if (p1 == 98) {
                    p1 = 79
                }
        
                sum = p1
        
         }
             
         if (p=='p2'){
            p2=p2+num;

        if(p2>100){
            p2=p2-num;
        }
       
        
                if (p2 == 1) {
                    p2 = 38
                }
                if (p2 == 4) {
                    p2 = 14
                }
                if (p2 == 9) {
                    p2 = 31
                }
                if (p2 == 17) {
                    p2 = 7
                }
                if (p2 == 21) {
                    p2 = 42
                }
                if (p2== 28) {
                    p2 = 84
                }
                if (p2 == 51) {
                    p2 = 67
                }
                if (p2 == 54) {
                    p2 = 34
                }
                if (p2 == 62) {
                    p2 = 19
                }
                if (p2 == 64) {
                    p2 = 60
                }
                if (p2 == 71) {
                    p2 = 91
                }
                if (p2== 80) {
                    p2 = 100
                }
                if (p2 == 87) {
                    p2 = 24
                }
                if (p2== 93) {
                    p2 = 73
                }
                if (p2 == 95) {
                    p2 = 75
                }
                if (p2 == 98) {
                    p2 = 79
                }
        
                sum = p2
        
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