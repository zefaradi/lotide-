// FUNCTION IMPLEMENTATION
const assertEqual = function(array) {
    if (array.length === 0){
        console.log('undefined')
    }else{
        console.log(array[0])
    }
};

// TEST CODE
assertEqual([]);
assertEqual(["Hello", "Lighthouse", "Labs"]);
assertEqual(["1", "2", "2"]);