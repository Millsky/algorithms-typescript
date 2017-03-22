/**
 * Created by millsky on 3/21/17.
 */
class Point{
    x:number
    y:number
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

function NearestNeighbor(P:Array<Point>){
    var initialPoint = P[0];
    /* POP FIRST ITEM OUT */
    P = removeItemAtIndex(0,P);
    findNextPoint(initialPoint,P);

}


function initArrayPoints(){
    var pointsList = new Array<Point>();
    for(var i=0;i<10;i++){
        var p = new Point(Math.random(),Math.random());
        pointsList.push(p);
    }
    return pointsList;
}

/* Simple 2D distance calculation */
function calcDistance(p1:Point,p2:Point){
   return Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2));
}

function findNextPoint(p1:Point,P:Array<Point>){

}

function removeItemAtIndex(index:number,A:Array<any>){
    return A.splice(index,1);
}