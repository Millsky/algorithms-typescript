/**
 * Created by millsky on 3/26/17.
 */
/* BST - Node class */
class node {
    value: any
    left: any
    right: any
    parent: node
    /* Store height to reduce run time */
    height: number
    balanceFactor() {
        /* BalanceFactor(N) := –Height(LeftSubtree(N)) + Height(RightSubtree(N)) */
        var rightHeight = this.getHeight(this.right) || 0;
        var leftHeight =  this.getHeight(this.left) || 0;
        return (-1 * leftHeight) + (rightHeight);
    }
    isOffBalance(){
        if(this.balanceFactor() > 1 || this.balanceFactor() < -1){
            return true;
        }else{
            return false;
        }
    }
    /* Recursive height calculation - need to find way to store this information */
    getHeight(node:node) {
        if (node == null){
            return -1;
        }else{
            return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        }
    }

    constructor(v, h) {
        this.value = v;
        this.height = h;
        this.right = null;
        this.left = null;
    }
}
function rotateLeft(treeNode: node) {

    let Pivot = treeNode.right;

    treeNode.right = Pivot.left;

    Pivot.left = treeNode;

    //Pivot.left = this.updateLinkedNodeHeights(Pivot.left, 1);

    treeNode = Pivot;

    //treeNode.right = this.updateLinkedNodeHeights(treeNode.right, -1);

    //treeNode.height = treeNode.height - 1;

    return treeNode;
}
function rotateRight(treeNode: node) {
    let Pivot = treeNode.left;

    treeNode.left = Pivot.right;

    Pivot.right = treeNode;

    //Pivot.right = this.updateLinkedNodeHeights(Pivot.right, 1);

    treeNode = Pivot;

    //treeNode.left = this.updateLinkedNodeHeights(treeNode.left, -1);

    treeNode.height = treeNode.height - 1;

    return treeNode;
}
function balance(treeNode:node){
    if (treeNode.isOffBalance()) {
        console.log("NODE IS OFF BALANCE");
        if(treeNode.balanceFactor() > 1){
            console.log("Right Off Balance - rotate left ");
            if(treeNode.right.balanceFactor() < 0){
                treeNode.right = rotateRight(treeNode.right);
            }
            return rotateLeft(treeNode);
        }
        if(treeNode.balanceFactor() < -1){
            console.log("Left Off Balance - rotate right");
            if(treeNode.left.balanceFactor() > 0){
                treeNode.left = rotateRight(treeNode.left);
            }
            return rotateRight(treeNode);
        }
    }else{
        return treeNode;
    }
}
function insert(treeRoot:node,v:number) {

    /* IF ROOT NOT INIT ADD IT */

    if (!treeRoot) {
        return new node(v, 0);
    }

    if(v < treeRoot.left){
        treeRoot.left = insert(treeRoot.left,v)
    }else{
        treeRoot.right = insert(treeRoot.right,v)
    }

    /* Always return balance */
    return balance(treeRoot);
};