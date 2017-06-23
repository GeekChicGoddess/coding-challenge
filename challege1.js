/**
 * Created by melodytempleton on 6/22/17.
 */
$("#multiply").click(function(){
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();
    var result = num1 * num2;
    $("#result").html(result);
});

$("#divide").click(function(){
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();
    var result = num1 / num2;
    $("#result").html(result);
});


var highlowfunc = [75,89,35,-3,0,-23,90,-90];

function findHighAndLow (arr) {

    var high = arr[0];
    var low =  arr[0];

    for(var i=0; i <= arr.length; i++){
        if (arr[i] > high) {high = arr[i]}
        if (arr[i] < low) { low = arr[i]}
    }
    console.log("Answer find High Low: " + low + ", " + high);

}

findHighAndLow(highlowfunc);

function findGreatestCommonDivisor (num1, num2){
    var biggerNum =0;
    var smallerNum = 0;
    var greatestDivisor = 0;
    if ((num1 !=0 )&& (num2 != 0)) {
        if (num1 > num2) {
            biggerNum = num1;
            smallerNum = num2
        }
        else {
            biggerNum = num2;
            smallerNum = num1;
        }

        for (i=1; i <= smallerNum; i++){

            if ((biggerNum % i === 0) && (smallerNum % i === 0)){

                greatestDivisor = i;
            }

        }
          console.log("Answer find greatest divisor: " + greatestDivisor);
            }
        else {
        console.log("Please enter non-zero numbers");
    }
}

// findGreatestCommonDivisor(9,3);
// findGreatestCommonDivisor(12, 13);
findGreatestCommonDivisor(2, 10);


function findLongestWord(str) {

    var longword =[];
    var tempLongWord = [];
    str.toLowerCase();

    // str.split("");

    for (var i = 0; i < str.length; i++){
        if(str[i].charCodeAt(0) == 32) {
            console.log("space");
            if (tempLongWord.length > longword.length) {
                longword = tempLongWord;
                tempLongWord=[];
            }
        }
        if((str[i].charCodeAt(0) > 96) && (str[i].charCodeAt(0) < 123)){
        tempLongWord.push(str[i]);
        console.log(str[i]);
        console.log(tempLongWord);

        }
    }



    longword = longword.join(" ");
    console.log("Answer to find longest word is...... " + longword );
}

findLongestWord("!!1hel!lo you!!");