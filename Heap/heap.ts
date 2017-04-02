/**
 * Created by millsky on 3/30/17.
 */
/*  heap is a specialized tree-based data structure that satisfies the heap property:
If A is a parent node of B, then the key (the value) of node A is ordered with respect
to the key of node B with the same ordering applying across the heap. */

/* MIN HEAP */

class heap{

    heap:Array<any>

    /* store the length to make things easier on us*/
    length:number

    /* Get Min */
    /*  Min heap property ensures 0th will always be the min*/
    getMin(){
        return this.heap[0];
    }


    /* Ccmputations for calculating parent and child relationships */

    getParentIndex(i:number){
        if(i >= 2 && i%2 == 0) {
            return (i - 2) / 2;
        }else{
            if(i%2 != 0){
                return (i -1) /2;
            }
            if(i<2){
                return 0;
            }
        }
    }

    getChildLeftIndex(i:number){
        return i*2 + 1;
    }

    getChildRightIndex(i:number){
        return i*2 + 2;
    }

    /* Checks to simplify the process */

    hasLeft(i:number){
        return this.getChildLeftIndex(i) < this.length;
    }

    hasRight(i:number){
        return this.getChildRightIndex(i) < this.length;
    }

    hasParent(i:number){
        return i > 0;
    }

    /* swap method to swap two values in the array */
    /* swaps can be child -> parent || parent -> child  */
    swap(index1:number,index2:number){

        var temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;

    }


    insert(v){
        /* Base case no values in heap */
        if(this.heap.length == 0) {
            this.heap.push(v);
            this.length++;
            return;
        }
        this.heap.push(v);
        this.length++;
        this.balanceTraverseUp();
    }

    delete(){
        /* Swap last and first element */
        this.swap(0,this.length -1);
        /* Delete the last Element */
        this.heap.pop();
        this.length--;
        this.balanceTraverseDown();
    }

    balanceTraverseUp(){
        /* Start @ last index and traverse up */
        var traverseStart = this.length - 1;
        /* While has parent to swap with and the v < parent value */
        while(this.hasParent(traverseStart) && this.heap[traverseStart] < this.heap[this.getParentIndex(traverseStart)]){
            /* Swap with parent */
            this.swap(this.getParentIndex(traverseStart),traverseStart);
            /* make current index parent index */
            traverseStart = this.getParentIndex(traverseStart);
        }
    }

    /* Use this case when removing an element */
    balanceTraverseDown(){
        /* If the heap has one item || no items no need to perform the operation  */
        if(this.length == 0 || this.length == 1){
            return;
        }
        /* start at the largest value which is now @ index 0*/
        var traverseStart = 0;
        while(true){
            var currentValue = this.heap[traverseStart];
            var lv = null;
            var rv = null;
            /* Get the left and right values */
            if(this.hasLeft(traverseStart)){

                lv = this.heap[this.getChildLeftIndex(traverseStart)];
            }
            if(this.hasRight(traverseStart)){
                rv = this.heap[this.getChildRightIndex(traverseStart)];
            }

            if(lv == null && rv == null){
                /* DOES NOT HAVE LEFT OR RIGHT BREAK */
                break;
            }

            /* Pick the smaller of the two and swap*/
            if(lv < currentValue || rv < currentValue) {
                if (lv < rv) {
                    /* SWAP CURRENT WITH LEFT */
                    this.swap(traverseStart, this.getChildLeftIndex(traverseStart));
                    traverseStart = this.getChildLeftIndex(traverseStart);
                } else {
                    /* SWAP CURRENT WITH RIGHT */
                    this.swap(traverseStart, this.getChildRightIndex(traverseStart));
                    traverseStart = this.getChildRightIndex(traverseStart);
                }
            }else{
                break;
            }
        }

    }

    constructor(){
        this.heap = [];
        this.length = 0;
    }
}
