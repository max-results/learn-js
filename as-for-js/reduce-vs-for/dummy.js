var doMain = (
    () => {
        "use strict";

        var arr = Array.from( { length: 10_000 }, ( theThing, theIndex ) => theIndex );
        var summator = 0;
        var repeat = 1_000_000;

        // var length = arr.length;

        var doReduce = ( theAcc, theEl ) => ( theAcc + theEl );

        while (repeat--) {
            // case 1
            // summator += arr.reduce( ( theAcc, theEl ) => ( theAcc + theEl ), 0 );

            for ( var i = 0; i < arr.length; ++i ) summator += arr[i];

            // case 3
            // arr.reduce( ( theAcc, theEl ) => ( theAcc + theEl ), summator );

            // case 4
            // summator += arr.reduce( doReduce, 0 );

        }

        return summator;

    }
);

console.log(doMain());

