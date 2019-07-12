// globalvariables
var mychar = "";
var mycharenemy = "";
var mycharValue = "";
var mycharHP, mycharAP, mycharfullName;
var enemycharValue = "";
var enemycharHP, enemycharCA, enemycharfullName;
var baseAttack = 0;
var counterAP = 1;
var cummulativeAttack = 0;
var counterattack = 0
var countClick = 0
var test

// create objects for characters. to be loaded then the characters are slected

var characters = {
    JohnSnow: {
        name: "johnSnow",
        healthPoints: 140,
        attackPower: 8,
        fullName: "Jon Snow",
        counterAttackPower: 24
    },

    DannyTag: {
        name: "dannyT",
        healthPoints: 100,
        attackPower: 10,
        fullName: "Daenerys Targaryen",
        counterAttackPower: 5
    },

    CerseiLan: {
        name: "cersieL",
        healthPoints: 150,
        attackPower: 10,
        fullName: "Cersei Lannister",
        counterAttackPower: 20
    },

    TyrionLan: {
        name: "tyrionL",
        healthPoints: 180,
        attackPower: 12,
        fullName: "Tyrion Lannister",
        counterAttackPower: 15
    },

    NightKing: {
        name: "nightKing",
        healthPoints: 80,
        attackPower: 12,
        fullName: "Night King",
        counterAttackPower: 10
    }
};

// create a reset function
function reset() {
    alert("Reset in Progress");
    $(".johnHP").html(characters.JohnSnow.healthPoints);
    $(".dannyHP").html(characters.DannyTag.healthPoints);
    $(".cersieHP").html(characters.CerseiLan.healthPoints);
    $(".tyrionHP").html(characters.TyrionLan.healthPoints);
    $(".nightHP").html(characters.NightKing.healthPoints);

    $(".youAttacked").html("")
    $(".attackedBack").html("")

    $("#picRow").show();

    //reset all initial counter variables
    baseAttack = 0;
    counterAP = 1;
    cummulativeAttack = 0;
    counterattack = 0
    countClick = 0

    mychar = "";
    mycharenemy = "";
    mycharValue = "";

    
    for (var i = 0; i < 5; i++) {
        if ($("._" + [i]).hasClass("yourCharacter")) {
            $("._" + [i]).removeClass("yourCharacter").addClass("characterCardSelect")
        }
        else {
            $("._" + [i]).removeClass("enemyCardSelect").addClass("characterCardSelect")
        }
        $(".-" + [i]).append($("._" + [i]));
        $("._" + [i]).find("img").css("filter", "grayscale(0%)")
    }
    
    $(".restart").prop("disabled", true)
    $(".attackButton").prop("disabled", false)

    // test code to append the cards to the original setting
    // for (var i = 0; i < (countClick + 1); i++) {
    //     $(".-" + [i]).append($("._" + [i]));
    //     $("._" + [i]).removeClass("yourCharacter").addClass("characterCardSelect")
    //     test = $("._" + [i]).hasClass("johnSnow")
    // }
    // countClick = 0
}

//writing each characters healthpoints to the html so they show up on the page.
$(".johnHP").html(characters.JohnSnow.healthPoints);
$(".dannyHP").html(characters.DannyTag.healthPoints);
$(".cersieHP").html(characters.CerseiLan.healthPoints);
$(".tyrionHP").html(characters.TyrionLan.healthPoints);
$(".nightHP").html(characters.NightKing.healthPoints);

$(document).ready(function () {

    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function () {
            $(this).removeClass('shadow-lg');
        });

    $("body").on("click", ".characterCardSelect", function () {
        mychar = $(this)
        console.log(mychar);

        // pull the value attribute from the character card and console log 
        mycharValue = mychar.attr("value")
        console.log(mycharValue)

        // dynamically create and append the card element to the select character column 
        // Also add dynamically add remove class
        $("#yourSelectCharacter").append(mychar);
        $(mychar).removeClass("characterCardSelect").addClass("yourCharacter")
        // $(mychar).css("width", "40%")
        
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

        // load the attributes of the caracter selected to the global variables
        $("#picRow").hide();
        if (mycharValue == characters.JohnSnow.name) {
            mycharHP = characters.JohnSnow.healthPoints;
            mycharAP = characters.JohnSnow.attackPower;
            mycharfullName = characters.JohnSnow.fullName;
        }
        else if (mycharValue == characters.DannyTag.name) {
            mycharHP = characters.DannyTag.healthPoints;
            mycharAP = characters.DannyTag.attackPower;
            mycharfullName = characters.DannyTag.fullName;
        }
        else if (mycharValue == characters.CerseiLan.name) {
            mycharHP = characters.CerseiLan.healthPoints;
            mycharAP = characters.CerseiLan.attackPower;
            mycharfullName = characters.CerseiLan.fullName;
        }
        else if (mycharValue == characters.TyrionLan.name) {
            mycharHP = characters.TyrionLan.healthPoints;
            mycharAP = characters.TyrionLan.attackPower;
            mycharfullName = characters.TyrionLan.fullName;
        }
        else if (mycharValue == characters.NightKing.name) {
            mycharHP = characters.NightKing.healthPoints;
            mycharAP = characters.NightKing.attackPower;
            mycharfullName = characters.NightKing.fullName;
        }
        console.log(mycharHP, mycharAP, mycharfullName);

        // Enable the restart button
        $(".restart").prop("disabled", false)
    });

    $("body").on("click", ".enemyCardSelect", function () {

        mycharenemy = $(this);
        // console.log(mycharenemy);

        //get the attribute value of the slected enemy character and store in global variable
        enemycharValue = mycharenemy.attr("value")
        // test=$("._4");
        // console.log(test);
        // console.log(mycharenemy);
        // console.log(enemycharValue);
        // alert("enemy card selected");
        
        // prepend the card to the selected area
        $("#yourSelectEnemy").prepend(mycharenemy);
        $(mycharenemy).css({
            // "width": "40%",
            "margin-bottom": "10px"
        });

        // for the selected enemy card load attributes in global variables
        if (enemycharValue == characters.JohnSnow.name) {
            enemycharHP = characters.JohnSnow.healthPoints;
            enemycharCA = characters.JohnSnow.counterAttackPower;
            enemycharfullName = characters.JohnSnow.fullName;
        }
        if (enemycharValue == characters.DannyTag.name) {
            enemycharHP = characters.DannyTag.healthPoints;
            enemycharCA = characters.DannyTag.counterAttackPower;
            enemycharfullName = characters.DannyTag.fullName;
        }
        if (enemycharValue == characters.CerseiLan.name) {
            enemycharHP = characters.CerseiLan.healthPoints;
            enemycharCA = characters.CerseiLan.counterAttackPower;
            enemycharfullName = characters.CerseiLan.fullName;
        }
        if (enemycharValue == characters.TyrionLan.name) {
            enemycharHP = characters.TyrionLan.healthPoints;
            enemycharCA = characters.TyrionLan.counterAttackPower;
            enemycharfullName = characters.TyrionLan.fullName;
        }
        if (enemycharValue == characters.NightKing.name) {
            enemycharHP = characters.NightKing.healthPoints;
            enemycharCA = characters.NightKing.counterAttackPower;
            enemycharfullName = characters.NightKing.fullName;
        }
        console.log(enemycharHP, enemycharCA, enemycharfullName);

        countClick++
        console.log("mouse click on enemy card: " + countClick)
        $(".attackButton").prop("disabled", false)
    });

    $(".attackButton").on("click", function () {

        $(".attackedBack").fadeIn("slow");

        // check to see if the player has selected an opponent
        if ($("#yourSelectEnemy").children().length == 0) {
            alert("Please select an oponent");
            return;
        }
        // Check loosing condition
        // baseAttack variable to grind through and increase character attack after each click
        baseAttack += mycharAP
        counterattack += enemycharCA;

        // cummulative attack sum
        for (var i = 0; i < counterAP; i++) {
            cummulativeAttack += mycharAP;
            // console.log("index: "+ i,"counter: "+counterAP,cummulativeAttack);
        }

        // print the attack 
        $(".youAttacked").html(mycharfullName + " attacked " + enemycharfullName + " for " + baseAttack + " HP");
        $(".attackedBack").html(enemycharfullName + " counter attacked " + mycharfullName + " for " + enemycharCA + " HP")
        
        $("." + mycharValue).find("span").html(mycharHP - counterattack);
        $("." + enemycharValue).find("span").html(enemycharHP - cummulativeAttack);
        
        // check condition if selected characted HP is <=0 
        if ((mycharHP - counterattack) <= 0) {
            $(mychar).find("img").css("filter", "grayscale(100%)");
            $(mychar).find("span").html("0");
            alert("Sorry! You were not able to make it to the throne. Please try again");
            $(this).prop("disabled", true);
            $(".restart").prop("disabled", false);
            $(mycharenemy).find("span").html("0")
        }
        else {

            console.log(baseAttack, cummulativeAttack);

            // check winning condition for whole game
            // the first winning condition is a strict condition
            if (countClick === 4 && (enemycharHP - cummulativeAttack) <= 0) {
                alert("You have won the battle for the Iron Throne")
                $(".attackButton").prop("disabled", true)
                $(".restart").prop("disabled", false)
                $(mycharenemy).find("span").html("0")
                $(mycharenemy).find("img").css("filter", "grayscale(100%)")
                return;
            }
            // check winning condition per card
            // the counter value re-instates to the new enemy card selected 
            if ((enemycharHP - cummulativeAttack) <= 0) {
                alert("Select New Oponent");
                $(mycharenemy).find("img").css("filter", "grayscale(100%)")
                $(mycharenemy).find("span").html("0")
                $(".attackButton").prop("disabled", true)
                counterAP = baseAttack / mycharAP;
                cummulativeAttack = 0;
            }
        }

        $(".attackedBack").fadeOut(3000);
        counterAP++
    });

    $(".restart").on("click", function () {
        // reset function to restore to default
        reset();
    });

});