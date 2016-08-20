var charsArray = [];
var charDiv;
var heroChar;
var enemyChar;
var yourHealth;
var yourAttack;
var enemyHealth;
var enemyAttack;
var heroChosen = false;
var enemyChosen = false;

function character(name, HP, attack){
	this.name = name
	this.HP = HP,
	this.attack = attack
}

/*var obi = new character("obiWan", "120", "8" );
var luke = new character("Luke Walker", "100", "5");
var maul = new character("Darth Maul", "180", "25");
var sidious = new character("Darth Sidious", "150", "20");

charsArray.push(obi, luke, maul, sidious) */

$(document).ready(function(){
$(".character").on("click", function(){
	if (heroChosen == false && enemyChosen == false) {
		heroChar = $(this).addClass("chosen");
		$( ".chosen" ).appendTo( $( ".you" ) );
		$(".errythang").children().addClass("enemy");
		heroChosen = true;
    yourHealth = $(this).data("health");
    yourAttack = $(this).data("damage");
	}
	else if (heroChosen == true && enemyChosen == false) {
		enemyChar = $(this).addClass("enemyfight");
		$(".enemyfight").appendTo ( $(".ring"));
		enemyChosen = true;
    enemyHealth = $(this).data("health");
    enemyAttack = $(this).data("damage");
	};

});

$("#attack").on("click", function(){
  enemyHealth -= yourAttack;
  yourHealth -= enemyAttack;
  yourAttack *= 2;
  $("#yourattack").html("YOU ATTACKED FOR " + yourAttack + " DAMAGE");
  $("#enemyattack").html("YOU WERE ATTACKED FOR " + enemyAttack + " DAMAGE");
  $(".chosen h5").html(yourHealth);
  $(".enemyfight h5").html(enemyHealth);
  if (enemyHealth <= 0) {
    $(".ring").empty();
    enemyChosen = false;
  };
  if (yourHealth <= 0) {
    $(".you").empty();
    alert("Game over. You suck.");
  };
});

$(".reset").on("click", function(){
  location.reload();
});

});
