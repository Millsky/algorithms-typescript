/* BST - Node class */
class node {
    value: any
    left: any
    right: any
    height: number
    /* Function to compute the balance factor which we will use later */
    balanceFactor(){
        var bf = (this.right.height) - (this.left.height);

    }
    constructor(v,h) {
        this.value = v;
        this.height = h;
    }
}

/* BST - Main class */
class bst {
    root: node

    addValue(v) {

        /* IF ROOT NOT INIT ADD IT */

        if (!this.root) {
            this.root = new node(v,0);
            return;
        }

        var currentNode = this.root;
        var height = 0;

        while (currentNode) {
            /* We want to store the height as we add so we can more easily compute the balance factor */
            height++;
            /* If less go left */
            if (v < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left =  new node(v,height);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                /* If more go right */
                if (!currentNode.right) {
                    currentNode.right = new node(v,height);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
            /* If node has value we want to continue to check it's children so we
            recursively perform operation on the left or rightmost node*/
        }

    }

}

