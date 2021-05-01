
// All 3 subway lines intersect at UnionSq
/* Find out the number of stops from point A to point B and in which order.
Meaning indexof() point A and indexof() point B, and the difference between.
Use for loop if coming from back of line. Which also means that idOf(B)- idOf(A) === "positive"
^ to test for positive, can use Math.sign(-19); output: -1. Math.sign(10); output: 1. Math.sign(0); output: 0.
If negative for (i = trainLine.length-1; i <= 0; i--). Should work.
If positive for (i = 0; i <= trainLine.length; i++). Should work.

I plan to use array.includes() to find out whether point A exist in either of the 3 lines.
So if it point A exist, then I'll search for point B.
If both are true. Then I will run the single line code.
If they are not true, I will run a single line to UnionSq.
 Then code to test for where point A(which is now UnionSq) and point B are in the array.
 If array exist, continue to plot using single line code.
      If not, then keep searching.
*/


const N = ["TimesSq", "34th", "28th", "23rd", "Union Square", "8th"];
const L = ["8th", "6th", "Union Square", "3rd", "1st"];
const Six = ["GrandCentral", "33rd", "28th", "23rd", "Union Square", "AstorPl"];

function whichStopsToShow(startFromWhichLine, IDOfpointA, IDOfpointB) {
    //Prepare to show stops in order.
    let arrToShowStopsInOrder = [];
    //testing for forward travel or backwards travel, so as to display the output accordingly
    let differenceInIDAandIDB = IDOfpointA - IDOfpointB
    while (IDOfpointA !== IDOfpointB)  {
        //backwards, right to left.
        if (Math.sign(differenceInIDAandIDB) > 0 ) {
            arrToShowStopsInOrder.push(startFromWhichLine[IDOfpointA]);
            IDOfpointA = IDOfpointA - 1;

        } else if (Math.sign(differenceInIDAandIDB)< 0) { //forward, left to right.
            arrToShowStopsInOrder.push(startFromWhichLine[IDOfpointA]);
            IDOfpointA++;

        } else {
            return "NO STOPS HAHAHAHAHHAHA";
        }
    }
    arrToShowStopsInOrder.push(startFromWhichLine[IDOfpointB])
    return arrToShowStopsInOrder;
}

// console.log(whichStopsToShow(nLine, 5, 0))

//Trying out with arrow functions now. Not used to it kinda, but it's same right?

let planTrip = (startMRT, startStation, endMRT, endStation) => {
    //have to redefine some stuff so can reuse later but differentiate so can tell.
    let idOfpointA = startMRT.indexOf(startStation);
    let idOfpointB = endMRT.indexOf(endStation);
    let differenceInIDAandIDB = idOfpointA - idOfpointB
    let makePositive = Math.abs(differenceInIDAandIDB)

    let idofUnionSqStart = startMRT.indexOf("Union Square")
    let idofUnionSqEnd = endMRT.indexOf("Union Square")

    //cause I'm stupid, I don't know how to make this part efficient. hahahahaha
    let renamedStartMRT;
    if (startMRT == N) {
        renamedStartMRT = "N"
    } else if (startMRT == L) {
            renamedStartMRT = "L"
    } else if (startMRT == Six) {
            renamedStartMRT = "Six"
    }
    let renamedEndMRT;
    if (endMRT == N) {
        renamedEndMRT = "N"
    } else if (endMRT == L) {
        renamedEndMRT = "L"
    } else if (endMRT == Six) {
        renamedEndMRT = "Six"
    }

        let newArrToShowStops = [];
        let newArrToShowStops2 = [];
        let stringToDescribe = "";

        if (startMRT !== endMRT) {

            newArrToShowStops = whichStopsToShow(startMRT, idOfpointA, idofUnionSqStart)
            newArrToShowStops2 = whichStopsToShow(endMRT, idofUnionSqEnd, idOfpointB)
            stringToDescribe = "Change to " + renamedEndMRT + " line at Union Square.\nYour journey continues through the following stops: " + newArrToShowStops2 + "\n" + makePositive + " stops in total";

        } else {
            newArrToShowStops = whichStopsToShow(startMRT, idOfpointA, idOfpointB);
            stringToDescribe = makePositive + " stops in total.";

        }

        console.log("You must travel through the following stops on the " + renamedStartMRT + " line: " + newArrToShowStops)

        console.log(stringToDescribe)

        console.log("I'M A GENIUS!!!!! WOOHOOOOOO")
}

planTrip(N,"TimesSq", Six,"23rd")



//Code runs, able to complete requirements but unable to show stops in between.
//Also realised I need to differentiate the 2 repeated stops on N & 6, so logic is wrong...
//Stupid uh never read now need to re-write code


// let nLine: ["TimesSq", "34th", "28th", "23rd", "UnionSq", "8th"];
// let lLine = ["8th", "6th", "UnionSq", "3rd", "1st"];
// let sixLine = ["GrandCentral", "33rd", "28th", "23rd", "UnionSq", "AstorPl"];

//To test on single line travel

// function singleLineMeasure(pointA, pointB, startFromWhichMRTLine) {
//     let idOfPointA = startFromWhichMRTLine.indexOf(pointA);
//     let idOfPointB = startFromWhichMRTLine.indexOf(pointB);
//     let differenceInIdAMinusB = idOfPointA - idOfPointB
//     let differenceInIdBMinusA = idOfPointB - idOfPointA
//     let newArrToShowStopsInOrder = []
//     if (Math.sign(differenceInIdAMinusB) > 0) {
//
//         console.log("You are " + differenceInIdAMinusB + " stops away");
//
//         for (let i = idOfPointA; i >= idOfPointB ; i--) {
//
//             newArrToShowStopsInOrder.push(startFromWhichMRTLine[i]);
//
//         }
//     } else if (Math.sign(differenceInIdBMinusA) > 0){
//
//         console.log("You are " + differenceInIdBMinusA + " stops away");
//
//         for (let x = idOfPointA; x <= idOfPointB; x++) {
//
//             newArrToShowStopsInOrder.push(startFromWhichMRTLine[x])
//         }
//
//     } else {
//         console.log("Aiyah you're lost la! Don't waste my time.")
//     }
//     console.log("These are the stops you'll be passing from " + newArrToShowStopsInOrder + ".")
// }


/*
function multiLineMeasure (from, to) {
    let newArrToShowStopsInOrder = [];
    let numOfStops = 0;

    if (from === to) {
        console.log("Aiyah you're lost la! Don't waste my time.")

    } else if ((nLine.includes(from)) && (nLine.includes(to))){
        singleLineMeasure(from, to, nLine);
        console.log("You must travel through the following stops on the N Line: " + newArrToShowStopsInOrder)
        console.log("You also don't need to change train. If got seat can sit all the way!")

    } else if ((lLine.includes(from)) && (lLine.includes(to))) {
       return singleLineMeasure(from, to, lLine)
        console.log("You must travel through the following stops on the L Line: " + newArrToShowStopsInOrder)
        console.log("You also don't need to change train. If got seat can sit all the way!")

    } else if ((sixLine.includes(from)) && (sixLine.includes(to))) {
       return singleLineMeasure(from,to, sixLine)
        console.log("You must travel through the following stops on the Six Line: " +newArrToShowStopsInOrder)
        console.log("You also don't need to change train. If got seat can sit all the way!")

    } else if (nLine.includes(from)) {
         singleLineMeasure(from, "UnionSq", nLine)
        console.log("You must travel through the following stops on the N Line: ")
        console.log("Don't be a Square, Change at Union Square.")

        if (lLine.includes(to)){
            singleLineMeasure("UnionSq", to, lLine)
            console.log("Your journey continues through the following stops: " + newArrToShowStopsInOrder);

        } else if (sixLine.includes(to)) {
            singleLineMeasure("UnionSq", to, sixLine)
        }


    } else if (lLine.includes(from)){
        singleLineMeasure(from, "UnionSq", lLine)
        console.log("You must travel through the following stops on the N Line: ")
        console.log("Don't be a Square, Change at Union Square.")
        if (nLine.includes(to)){
            singleLineMeasure("UnionSq", to, nLine)

        } else if (sixLine.includes(to)) {
            singleLineMeasure("UnionSq", to, sixLine)

        }
        console.log("You must travel through the following stops on the L Line: "  )

    } else if (sixLine.includes(from)) {
            return singleLineMeasure(from, "UnionSq", sixLine)

            if (nLine.includes(to)) {
                singleLineMeasure("UnionSq", to, nLine)

            } else if (lLine.includes(to)) {
                singleLineMeasure("UnionSq", to, lLine)

            }
        console.log("You must travel through the following stops on the Six Line: ")
    }

}


console.log(multiLineMeasure("TimesSq", "GrandCentral"));
*/


