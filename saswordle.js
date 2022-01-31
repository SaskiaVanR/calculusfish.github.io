//javascript
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var words = []

var currentSquare = 1;
var waiting = false;
var currentGuess = "";
var badGuess = [];
var okayGuess = [];
var goodGuess = [];
var targetWord = "";
var won = false;
var lost = false;

fetch('https://raw.githubusercontent.com/calculusfish/saswordle/main/wordlewords.txt')
.then(response => response.text()) 
.then(textString => {

    words = textString.toUpperCase().split('\r\n');
    getTargetWord();
});

fetch('https://raw.githubusercontent.com/calculusfish/saswordle/main/allwords5.txt')
.then(response => response.text()) 
.then(textString => {

    allwords = textString.toUpperCase().split('\r\n');
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTargetWord(){
	targetWord =  words[getRandomInt(0, words.length-1)];
};


function addLetter(letter){
	if (waiting){
		return;
	};

	$("#s"+currentSquare).text(letter);
	if (currentSquare%5==0){
		currentGuess +=letter;
		currentSquare +=1;
		waiting = true;
	} else {
		currentGuess +=letter;
		currentSquare +=1;
	}
	
};

function undoLetter(){
	if (currentGuess ==""){
		return;
	} else {
		currentGuess = currentGuess.substring(0,currentGuess.length-1);
		currentSquare -= 1;
		waiting= false;
		$("#s"+currentSquare).text("");
		


	}
}

function guessWordAlt(){
if (currentGuess.length==5){
		if(!allwords.includes(currentGuess)){
			$("#subtext").text("!!! NOT A WORD !!!");
			return 
		}
		var remainingTargets = targetWord;
		var remainingGuess = currentGuess;
		var greens = [];
		for (let i=0; i<5;i++){
			if (currentGuess[i]==targetWord[i]){
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("goodGuess");
				$("#s"+(currentSquare-(5-i))).addClass("goodGuess");
				$("#"+currentGuess[i]).children().children().addClass("goodGuess");
				$("#"+currentGuess[i]).addClass("goodGuess");
				$("#"+currentGuess[i]).children().children().removeClass("okayGuess");
				$("#"+currentGuess[i]).removeClass("okayGuess");
				goodGuess+=[currentGuess[i]];
				remainingTargets = remainingTargets.replace(currentGuess[i],"");
				remainingGuess = remainingGuess.replace(currentGuess[i],"");
				greens += [i];
			}
		}
		for (let i=0; i<5;i++){
			if (greens.includes(i)){
				continue;
			}
			if(remainingTargets.includes(currentGuess[i])) {
				if (!goodGuess.includes(currentGuess[i])){
					$("#"+currentGuess[i]).children().children().addClass("okayGuess");
					$("#"+currentGuess[i]).addClass("okayGuess");
					okayGuess+=[currentGuess[i]];
				};
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("okayGuess");
				$("#s"+(currentSquare-(5-i))).addClass("okayGuess");
				remainingTargets = remainingTargets.replace(currentGuess[i],"");
			} else {
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("badGuess");
				$("#s"+(currentSquare-(5-i))).addClass("badGuess");
				$("#"+currentGuess[i]).children().children().addClass("badGuess");
				$("#"+currentGuess[i]).addClass("badGuess");
				badGuess+=[currentGuess[i]];
			}
		}
		if (currentGuess==targetWord){
			won = true;
			$("#subtext").text("CONGRATULATIONS! PRESS ENTER FOR A NEW WORD");
		};
		waiting = false;
		currentGuess = "";
		if (currentSquare==31){
			$("#subtext").text("ANSWER: "+targetWord +" - PRESS ENTER FOR A NEW WORD");
			lost = true;
		}
	}		
}

function guessWord(){
	if (currentGuess.length==5){
		if(!allwords.includes(currentGuess)){
			$("#subtext").text("!!! NOT A WORD !!!");
			return 
		}
		var remainingTargets = targetWord;
		var remainingGuess = currentGuess;

		for (let i=0; i<5;i++){
			if (currentGuess[i]==targetWord[i]){
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("goodGuess");
				$("#s"+(currentSquare-(5-i))).addClass("goodGuess");
				$("#"+currentGuess[i]).children().children().addClass("goodGuess");
				$("#"+currentGuess[i]).addClass("goodGuess");
				$("#"+currentGuess[i]).children().children().removeClass("okayGuess");
				$("#"+currentGuess[i]).removeClass("okayGuess");
				goodGuess+=[currentGuess[i]];
			} else if(targetWord.includes(currentGuess[i])) {
				if (!goodGuess.includes(currentGuess[i])){
					$("#"+currentGuess[i]).children().children().addClass("okayGuess");
					$("#"+currentGuess[i]).addClass("okayGuess");
					okayGuess+=[currentGuess[i]];
				};
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("okayGuess");
				$("#s"+(currentSquare-(5-i))).addClass("okayGuess");

				
			} else {
				$("#s"+(currentSquare-(5-i))).parent().parent().addClass("badGuess");
				$("#s"+(currentSquare-(5-i))).addClass("badGuess");
				$("#"+currentGuess[i]).children().children().addClass("badGuess");
				$("#"+currentGuess[i]).addClass("badGuess");
				badGuess+=[currentGuess[i]];
			}
		}
		if (currentGuess==targetWord){
			won = true;
			$("#subtext").text("CONGRATULATIONS! PRESS ENTER FOR A NEW WORD");
		};
		waiting = false;
		currentGuess = "";
		if (currentSquare==31){
			$("#subtext").text("ANSWER: "+targetWord +" - PRESS ENTER FOR A NEW WORD");
			lost = true;
		}
	}		
}


function newBoard(){
	$(".key").removeClass("badGuess");
	$(".key").removeClass("goodGuess");
	$(".key").removeClass("okayGuess");
	$(".key").removeClass("hoverkey");
	$(".key").removeClass("hoverkeysmall");
	$(".keyb").removeClass("badGuess");
	$(".keyb").removeClass("goodGuess");
	$(".keyb").removeClass("okayGuess");
	$(".keyb").removeClass("hoverkey");
	$(".keyb").removeClass("hoverkeysmall");
	$(".squarebox").removeClass("badGuess");
	$(".squarebox").removeClass("goodGuess");
	$(".squarebox").removeClass("okayGuess");
	$(".square").removeClass("badGuess");
	$(".square").removeClass("goodGuess");
	$(".square").removeClass("okayGuess");
	$(".square").text("");
	currentSquare = 1;
	waiting = false;
	currentGuess = "";
	badGuess = [];
	okayGuess = [];
	goodGuess = [];
	won = false;
	lost = false;
	getTargetWord();
	$("#subtext").text("GUESS THE WORD");


}
$(".key").mousedown(function(){
	if (won){
		if ("Enter"==$(this).attr('id') ){
			newBoard();
		} else {
			return;
		}
	} else if (lost) {
		$("#subtext").text("ANSWER: "+targetWord +" - PRESS ENTER FOR A NEW WORD");
		if ("Enter"==$(this).attr('id') ){
			newBoard();
		}
		return;
	}
	$("#subtext").text("GUESS A WORD");
	if ("Enter"==$(this).attr('id') ){
		guessWordAlt();
	} else if ("Undo"==$(this).attr('id') ) {
		undoLetter();
	} else {
		var letter = $(this).attr('id');
		addLetter(letter);
	}

});





$(".key").mouseenter(function(){
	if (["Enter", "Undo"].includes($(this).attr('id')) ){
		$(this).children().children().addClass("hoverkeysmall");
	} else {
		$(this).children().children().addClass("hoverkey");
	}

	$(this).addClass("hoverkey");
});

$(".key").mouseleave(function(){
	$(this).children().children().removeClass("hoverkey");
	$(this).children().children().removeClass("hoverkeysmall");
	$(this).removeClass("hoverkey");
});


   
// /* 
//  * To change this license header, choose License Headers in Project Properties.
//  * To change this template file, choose Tools | Templates
//  * and open the template in the editor.
//  */

// var treats = 0;
// var dogposition = [300,300];
// var dogs = [];
// var sinceLastDog = 3000;
// var items = [];
// var dist = 10;
// var multi = [1, 50, 1000];
// var clickers = [0,0,0];
// var clickernames = ['ovens', 'bakeries', 'factories'];
// var costnames = ['ovenCost', 'bakeryCost', 'factoryCost'];
// var initcosts = [10,500,10000];
// var perSecond = 0;

// function Dog(){
//     this.dogposition = [300,300];
//     this.d = document.createElement("IMG");
//     this.d.src = "acecutout.jpg";
//     this.d.style.position = "absolute";
//     this.d.style.left = this.dogposition[0];
//     this.d.style.top = this.dogposition[1];
//     this.d.style.display = "inline";
//     this.d.style.height = "50px";
//     this.d.style.width = "50px";
//     this.direction = 3;
//     document.getElementById("doggotime").appendChild(this.d);
// }

// function Item(itemname, itemcost, upgradetype, upgrademulti){
//     this.itemname = itemname;
//     this.itemcost = itemcost;
//     this.upgradetype = upgradetype;
//     this.upgrademulti = upgrademulti;
// }

// function newItem(itemname, itemcost, upgradetype, upgrademulti){
//     var newitem = new Item(itemname, itemcost, upgradetype, upgrademulti);
//     items.push(newitem);
// }

// function addMulti(item, multi){
//     multi[item.upgradetype]=multi[item.upgradetype]*item.upgrademulti;
//     updatePerSecond();
// }

// function multiClick(){
//     addMulti(items[0], multi);
// }

// function newDog(){
//     var newdog = new Dog();
//     dogs.push(newdog);
// }

// function treatClick(number){
//     treats = treats + number;
//     document.getElementById("treats").innerHTML = "Treats: "+ Math.round(treats);
// }

// function treatDown(){
//     document.getElementById("treatbutton").style.backgroundColor = "#ecccff";
// }

// function treatUp(){
//     document.getElementById("treatbutton").style.backgroundColor = "#f6e6ff";
// }

// function buyFactory(type){
//     var clickerCost = Math.floor(initcosts[type]*Math.pow(1.1,clickers[type]));
//     if (treats>=clickerCost){
//         clickers[type] = clickers[type]+1;
//         treats = treats - clickerCost;
//         document.getElementById(clickernames[type]).innerHTML = clickers[type];
//         document.getElementById('treats').innerHTML = "Treats: "+Math.round(treats);
        
        
//     }
//     var nextCost = Math.floor(initcosts[type]*Math.pow(1.1,clickers[type]));
//     document.getElementById(costnames[type]).innerHTML = nextCost;
//     updatePerSecond();
// }



// function updatePerSecond(){
//     perSecond = clickers[0]*multi[0]+clickers[1]*multi[1]+clickers[2]*multi[2];
//     document.getElementById('perSecond').innerHTML = perSecond;
// }

// function moveDog(dog){
//     direct = Math.floor(Math.random()*3);
//     console.log(direct+" "+dog.direction);
//     if (direct===0){
//         if (dog.direction===0){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]+dist];
//             dog.direction = 3;
//         } else if (dog.direction===1){
//             dog.dogposition = [dog.dogposition[0]-dist,dog.dogposition[1]];
//             dog.direction = 0;
//         } else if (dog.direction===2){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]-dist];
//             dog.direction = 1;
//         } else if (dog.direction===3){
//             dog.dogposition = [dog.dogposition[0]+dist,dog.dogposition[1]];
//             dog.direction = 2;
//         }
        
//     } else if (direct===1){
//         if (dog.direction===0){
//             dog.dogposition = [dog.dogposition[0]-dist,dog.dogposition[1]];
//             dog.direction = 0;
//         } else if (dog.direction===1){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]-dist];
//             dog.direction = 1;
//         } else if (dog.direction===2){
//             dog.dogposition = [dog.dogposition[0]+dist,dog.dogposition[1]];
//             dog.direction = 2;
//         } else if (dog.direction===3){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]+dist];
//             dog.direction = 3;
//         }
        
//     } else if (direct===2){
//         if (dog.direction===0){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]-dist];
//             dog.direction = 1;
//         } else if (dog.direction===1){
//             dog.dogposition = [dog.dogposition[0]+dist,dog.dogposition[1]];
//             dog.direction = 2;
//         } else if (dog.direction===2){
//             dog.dogposition = [dog.dogposition[0],dog.dogposition[1]+dist];
//             dog.direction = 3;
//         } else if (dog.direction===3){
//             dog.dogposition = [dog.dogposition[0]-dist,dog.dogposition[1]];
//             dog.direction = 0;
//         }
        
//     }
//     if (dog.dogposition[0]<300){
//         dog.dogposition[0]=300;
//     }
//     if (dog.dogposition[1]<300){
//         dog.dogposition[1]=300;
//     }
//     if (dog.dogposition[0]>600){
//         dog.dogposition[0]=600;
//     }
//     if (dog.dogposition[1]>600){
//         dog.dogposition[1]=600;
//     }
//     dog.d.style.left = dog.dogposition[0]+ 'px';
//     dog.d.style.top = dog.dogposition[1]+'px';
// }

// var isdog = false;
// newItem("Rolling Pin", 100, 0, 2);
// newItem("Cookie Cutter", 200, 0, 2);
// newItem("Super Oven 3000", 1000, 1, 2);
// newItem("Super Oven 4000", 2000, 1, 2);

// window.setInterval(function(){
//     treatClick(clickers[0]*multi[0]/10);
//     treatClick(clickers[1]*multi[1]/10);
//     treatClick(clickers[2]*multi[2]/10);
//     if (perSecond>=1){
//         if (sinceLastDog>=2000){
//             newDog();
            
//             document.getElementById("numdogs").innerHTML = dogs.length;
//             sinceLastDog = 0;
//         } else {
//             sinceLastDog +=100;
//         }
//     }
//     for (i = 0; i<dogs.length;i++){
//         moveDog(dogs[i]);
//     }
    
//     if (!isdog && perSecond>=1){
//         isdog = true;
//         document.getElementById("numdogstext").style.display = "inline";
//         document.getElementById("numdogs").innerHTML = dogs.length;
        
//     }
//     if (dogs.length===2){
//         document.getElementById("dogplural").innerHTML = "Doggos";
//     }
// }, 100);
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Loading complete