# Game of Thrones - Unit 4 HW

Welcome to the Game of Thrones. Can Cersie retain the throne or Danny be the new Queen of Westeros. 

You must defeat all the characters to win the game. Here is a link to the [game](https://anw1986.github.io/unit-4-game-2/)

## Getting Started

This is a Game of Thrones RPG. In this game the user needs to select a character, & then an oponent. Once selected click on **Dracarys** (Attack), to start attacking your enemy. The enemy counterttacks with a certain damage. Once an enemy is defeated, select other opponents and repeat. Once all oponnents are defeated **AND** your character has health remaining, your the person sitting on the Iron Throne.

Screen shot of the initial page load
![game og thrones](./assets/images/Capture.jpg)


## Game Design Notes & User Tests

Every effort has been put in to design & capture user exceptions including
* Four **On Click** functions have been created
* For each character, the attack power will increase by it **base** attack power
* The attack button is **disabled** until an opponent is selected
* Restart button is disabled until the player selects a charcter
* Once an opponent is selected the user cannot go back
* Once an opponent is defeated, the **cummulative** attack power is retained & the attack button is disabled until a new oponent is selected
* Restart button to reinstate variables and counter at default values

### Coding tests

The code has been thorougly checked but exceptions are always there. This HW has heavy uses of jquery. 

Classes have been indexed to provide ease of use for jquery. Dynamic classes/elements are created using jquery as seen from the code below

'''
        // Remaining characters are appended to the "Enemies available to attach"
        // using two counters i & j to identify and append correctly the remaining enemies
        // removing class "characterCardSelect" when moved to the new area, this helps with the On Click function
        // dynamically adding a class "enemyCardSelect"
        var j = 0
        for (i = 0; i < 5; i++) {
            if ($("._" + [i]).is(mychar)) {
                continue;
            } else {
                $("._" + [i]).appendTo("#enemies" + [j]);
                $("._" + [i]).removeClass("characterCardSelect").addClass("enemyCardSelect")
                j++;
            }
        }
'''

Different Jquery methods have been used in this HW to accomplish the task.

'''
        // dynamically create and append the card element to the select character column 
        // Also add dynamically add remove class
        $("#yourSelectCharacter").append(mychar);
        $(mychar).removeClass("characterCardSelect").addClass("yourCharacter")

                // print the attack 
        $(".youAttacked").html(mycharfullName + " attacked " + enemycharfullName + " for " + baseAttack + " HP");
        $(".attackedBack").html(enemycharfullName + " counter attacked " + mycharfullName + " for " + enemycharCA + " HP")
        
        $("." + mycharValue).find("span").html(mycharHP - counterattack);
        $("." + enemycharValue).find("span").html(enemycharHP - cummulativeAttack);


'''


## Built With

* [Bootstrap](https://getbootstrap.com/) - To build responsive website

## Authors

* **Ahmed Waheed** - *Unit 4 HW* - [Github Profile](https://github.com/anw1986) -[Portfolio](https://anw1986.github.io/Basic-Portfolio/)

## Acknowledgments

* Inspiration - Game of Thrones website