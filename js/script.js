console.log('Hello my friends');

function Meldung() {
    alert('Klappt!')
}

var changeAlignment = function () {
    document.getElementById('div').className = 'center right';
}

var changeAlignment2 = function () {
    document.getElementById('div2').className = 'test lol';
}

var reset = function() {
    document.getElementById('div').className = 'center';
    document.getElementById('div2').className = 'test';
}

// var vs = function() {
//     var vss = document.getElementById('div3').className;
//     if (vss == 'jap') {
//         alert('geht')
//     }else {
//         alert('geht nicht')
//     }
// }

var reset = function(){
    var status = document.getElementById('div3').className;
    if (status == 'jap') {
        document.getElementById('div3').className = 'jap jep'
    }else{
        document.getElementById('div3').className = 'jap'
    }
}

// var car = {
//     firm: 'VW',
//     type: 'Polo',
//     color: 'blue',
//     doors: '5',
//     isOn: true,
//     seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
//     turnOn: function () {
//         this.isTurnedOn = false;
//         alert('CT status has been changed')
//     },
//     switchCar: function(isOn) {
//         console.log('turn car ' + isOn)
//         if (isOn == true) {
//             this.isOn = true;
//         } else {
//             this.isOn = false;
//         }
//     }

// }

 
// console.log('Hello there')
// var favColor = 'red';
// var myFavColors = ['blue', 'red', 'white'];
// var numOfFavColors = 3
// var doYouLikeDonuts = true
// var doYouLikeCalamari = 0
//     // True -> 1 ; False -> 0

// var Object = {
//     var firstName: 'Oli',
//     var lastName: 'Seider',
//     var isMale = true,
//     var Adress: 'rue de la Hoss',
//     var favBrand: ['Apple', 'Hoepfner']
// }

// function whatIsMyFavoriteColor () {
//     console.log('do Something!!!')
// }

// var whatIsMyFavoriteIceCream = function() {
//     return 'Cocos';
//         //everything after return dosent run!

// }
// function area (H, B) {
//     return H * B;
// }
//     // area(5,2) -> 10

// function fullName (firstName, lastName) {
//     return firstName + ' ' + lastName;

// }

// var n1 = 10;
// var n2 = 5;
// if (n1>n2) {
//     alert('Hello World')

// }else {
//     alert ('Neiiiiin')
// };

 