//javascript

fetch('wordlewords.txt')
.then(response => response.text()) 
.then(textString => {
    console.log(textString);
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