/* BST - Node class */
class node {
    value: any
    left: any
    right: any
    /* Store height to reduce run time */
    height: number
    /* Function to compute the balance factor which we will use later */
    balanceFactor() {
        var bf = (this.right.height) - (this.left.height);

    }

    constructor(v, h) {
        this.value = v;
        this.height = h;
    }
}

/* BST - Main class */
class bst {


    rotationTest() {
        /* TEST VALUES FOR ROTATION */
        var b = new bst();
        b.addValue(10);
        b.addValue(3);
        b.addValue(11);
        b.addValue(12);
        b.addValue(15);
        return b.rotateLeft(b.root);
    }

    updateLinkedNodeHeights(treeNode: node, delta: number) {
        var currentNode = treeNode;
        console.log("Updating height of:");
        console.log(treeNode);

        currentNode.height = currentNode.height + delta;

        /* Set current Node update both right and left heights */
        /* if left set current node to left repeat */
        /* if right set current node to right repeat */


        if (currentNode.left) {
            console.log("Recursing Left");
            //currentNode.left.height = currentNode.left.height + delta;
            let tempNode = currentNode;
            currentNode.left = this.updateLinkedNodeHeights(tempNode.left, delta);
        }
        if (currentNode.right) {
            console.log("Recursing Right");
            //currentNode.right.height = currentNode.right.height + delta;
            let tempNode = currentNode;
            currentNode.right = this.updateLinkedNodeHeights(tempNode.right, delta);
        }


        return currentNode;
    }

    /* Rotation is basically copying existing nodes and inserting them */
    rotateLeft(treeNode: node) {

        let Pivot = treeNode.right;

        treeNode.right = Pivot.left;

        Pivot.left = treeNode;

        Pivot.left = this.updateLinkedNodeHeights(Pivot.left, 1);

        treeNode = Pivot;

        treeNode.right = this.updateLinkedNodeHeights(treeNode.right, -1);

        treeNode.height = treeNode.height - 1;

        return treeNode;
    }

    rotateRight(treeNode: node) {
        let Pivot = treeNode.left;

        treeNode.left = Pivot.right;

        Pivot.right = treeNode;

        Pivot.right = this.updateLinkedNodeHeights(Pivot.right, 1);

        treeNode = Pivot;

        treeNode.left = this.updateLinkedNodeHeights(treeNode.left, -1);

        treeNode.height = treeNode.height - 1;

        return treeNode;
    }

    root: node

    addValue(v) {

        /* IF ROOT NOT INIT ADD IT */

        if (!this.root) {
            this.root = new node(v, 0);
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
                    currentNode.left = new node(v, height);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                /* If more go right */
                if (!currentNode.right) {
                    currentNode.right = new node(v, height);
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

var m = new bst();
m.root = m.rotationTest();
