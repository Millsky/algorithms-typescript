/**
 * Created by millsky on 3/27/17.
 */
class node{
    item:any
    next:node
    constructor(v){
        this.item = v;
        this.next = null;
    }
}

function createFromArray(A){
    var m = new linkedList();
    for(let j=0;j<A.length;j++){
        m.add(A[j]);
    }
    return m;
}


class linkedList{
    add(n:any){
        if(!this.list){
            this.list = new node(n);
        }else {
            var c = this.list;
            while(c) {
                if (c.next == null) {
                    c.next = new node(n);
                    break;
                }else{
                    c = c.next;
                }
            }
        }
    }
    list:any;

    constructor(){
        this.list = null;
    }
}