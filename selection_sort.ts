// Genterates an array of random integers
let random = (function () {
    let arr: number[] = new Array();
    return function fn(target: number = 10) {
        arr.push(Math.round(Math.random() * 100))
        if (target > 0) {
            --target
            fn(target)
        }
        return arr;
    }
}());

// Selection Sort
function selection_sort(unsorted: number[]) {
    let sorted: number[] = [],
        len: number = unsorted.length

    function sorter(list: number[]) {
        if (len > 0) {
            let smallestInLoop = findSmallest(list)
            sorted.push(smallestInLoop);
            list.splice(list.indexOf(smallestInLoop), 1)
            --len;
            sorter(list);
        }
        return sorted
    }

    function findSmallest(arr: number[]) {
        let smallest = Number.MAX_VALUE,
            len = arr.length
        for (var index = 0; index < len; index++) {
            if (arr[index] < smallest) {
                smallest = arr[index]
            }      
        }
        return smallest
    }
    return sorter(unsorted);
}


let randomNums = random(30);
console.log(randomNums);
console.log(selection_sort(randomNums));
