### Snakes & Ladders Game

Snake and Ladder is a old board game being played in various part of world. It is a popular family game which can be enjoyed by any age group. 

Usually it is played by 2 player with rotating turns each. Players move based on the number on dice, which each player has to roll at thier turn. There are snakes and ladders between cells on the board and if player fall on any of those, has to change position on board accordingly. Snakes do bite to move player from snake's mouth to tail and ladder help player climbing up to the top of ladder from base.

This game is developed using HTML, CSS and JavaScript. 

![Response](assets/images/WhatsApp%20Image%202023-08-23%20at%2011.07.09.jpeg)
## Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)

    ![Response](assets/images/WhatsApp%20Image%202023-08-23%20at%2010.43.30.jpeg)

## Testing 

I did perform following tests on this game:

1. Functional Test: 
    a- Detaied tests are performed to check if pages are functioning as expected and found that those are linked, oped correctly
    b- Thorough tests are performed with players movement according to game rules and found few movements were not correct,
        i- At few positions (10, 30, 50, 70, 90), player is moving out of the board - Fixed the issue and now player is moving correctly on the board
        ii- Positions of ladders were not correct in some cases - Fixed the position change as per ladder position in all the cases
        iii - Text for player1 and Player2 were not changing after each turn - Fixed that in text

2. GUI Test: Verified all the objects on screens are correctly displayed and readable

3. Screen Test: Pages are correctly visible in case of screen size changes - To be fixed


## Credits 

I fetched help for coding from tutorial provided by Code Institute, W3 Schools and Slack community.

Also the images are captured from open libraries available.

## Media

- The photos used on the Home and Game page are from Google Images

## Next Step

There are various ideas I can document right now to improvise this game website in future. For example
1. Allow players to choose as who will start the game
2. Allow players to choose their names to be displayed on the GUI
3. Update game to be playable by more than 2 players
4. Allow users to choose color the want to play with on the board
5. Show player movement gradually
