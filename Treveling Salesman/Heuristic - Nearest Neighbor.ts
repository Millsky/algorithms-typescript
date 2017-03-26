/**
 * Created by millsky on 3/21/17.
 */
class Point {
    x: number
    y: number
    distance:number
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.distance = null;
    }
}

var path = [];
var distances = [];
var index = -1;

function NearestNeighbor(P: Array<Point>,point:Point) {
    /* POP FIRST ITEM OUT */
    if(path.length == 0){
        addToPath(P[0]);
        distances.push(0);
        removeItemAtIndex(0,P);

    }

    while(P.length > 0){
        P = findNextPoint(path[index],P);
    }
}



function initArrayPoints() {
    var pointsList = new Array<Point>();
    for (var i = 0; i < 10; i++) {
        var p = new Point(Math.random(), Math.random());
        pointsList.push(p);
    }
    return pointsList;
}

/* Simple 2D distance calculation */
function calcDistance(p1: Point, p2: Point) {
    return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}

function findNextPoint(p1: Point, P: Array<Point>) {
    /* CALC DISTANCE FOR EACH POINT */
    var PointsWithDistance = P.map((p2) => {
        p2.distance = calcDistance(p1,p2);
        return p2;
    });
    /* PICK SMALLEST */
    var smallest = PointsWithDistance.sort(function (a:Point,b:Point) {
        a.distance > b.distance;
    });
    /* GET POINT IT BELONGS TO */
    addToPath(smallest[0]);
    distances.push(smallest[0].distance);
    removeItemAtIndex(0,smallest);
    return smallest;
}

function addToPath(p:Point){
    path.push(p);
    index++;
}

function removeItemAtIndex(index: number, A: Array<any>) {
    return A.splice(index, 1);
}

