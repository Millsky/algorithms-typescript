/**
 * Created by millsky on 3/27/17.
 */

function selectionSort(A){
    for(var j=0;j<A.length;j++) {
        /* Find the smallest */
        var index    =  j;
        var smallest = A[j];
        for (var i = j; i < A.length; i++) {
            if (A[i + 1] < smallest) {
                /* WHAT's the index??*/
                smallest = A[i + 1];
                index    = i +1;
            }
        }
        /* SWAP */
        /* Smallest */
       var temp1 = A[index];
       var temp2 = A[j];

       A[j] = temp1;
       A[index] = temp2;

    }
    return A;
}