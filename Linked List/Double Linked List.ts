/**
 * Created by millsky on 3/28/17.
 */
class node{
    item:any
    previous:node
    next:node
    constructor(v){
        this.item = v;
        this.next = null;
        this.previous = null;
    }
}


/* DOUBLE LINKED LIST */
/*
* 1.) The linked list shall have a successor node
* 2.) The linked list shall have a predessesor node
* 3.) This is unsorted so insertions can happen anywhere as so the insertion is quick
*
* */


class DoubleLinkedList{
    length:number
    head:node
    tail:node
    add(v){
        /* Check for special case of no nodes */
        if(this.head == null){
            this.head = new node(v);
            this.tail = this.head;
            this.length++;
        }else{
            /* Add node to the *first nodes pointer */
            /* Create temp node */
            var temp = new node(v);
            temp.next = this.head;
            this.head.previous = temp;
            this.head = temp;
            this.length++;
        }
    }

    remove(v){
        var current = this.head;
        if(current == null){
            return;
        }else{
            while(current){
                console.log(current.item);
                if(current.item == v){
                    console.log("REMOVING");
                    /* Remove Node Here */

                    /* IS NODE HEAD */
                    if(current.previous == null){
                        this.head = current.next;
                        this.length--;
                        break;
                    }
                    /* IF NODE IS TAIL */
                    if(current.next == null){
                        current.previous.next = null;
                        current.previous = null;
                        current = null;
                        this.length--;
                        break;
                    }
                    current.previous.next = current.next;
                    current.next.previous = current.previous;
                    this.length--;
                    break;
                }else{
                    current = current.next;
                }

            }
        }
    }

    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
}