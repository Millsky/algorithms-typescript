/**
 * Created by millsky on 4/3/17.
 */
import  {describe,it,before} from "mocha";
import {should,expect,assert} from "chai";
import heap from '../../Heap/heap';

describe('Heap',function () {

    it('Should have the properties length and heap',function () {
        let h = new heap();
        assert.property(h,'length');
        assert.property(h,'heap');
    });

    describe('#length',function () {
       let h = new heap();
       it('Should return 0 when instantiated',function () {
           assert.equal(h.length,0);
       });
       it('Should return 1 after adding an item',function () {
           h.insert(100);
           assert.equal(h.length,1);
        });
    });

    describe('#insert()',function () {
        let h = new heap();
        it('Should add the given value to the heap',function () {
            h.insert(62);
            assert.equal(h.heap.indexOf(62) >= 0,true);
        });
        it('Should Always Keep Smallest Value at Index 0',function () {
            h.insert(62);
            h.insert(68);
            h.insert(2);
            h.insert(20);
            h.insert(3);
            h.insert(1);
            h.insert(80);
            assert.equal(h.heap.indexOf(1),0);
        });
    });

    describe('#swap()',function () {
        it('Should swap first and last item',function(){
            let h = new heap();
            h.insert(10);
            h.insert(20);
            h.insert(30);

            h.swap(0,2);

            let firstItem = h.heap[0];
            let lastItem  = h.heap[h.length -1];

            assert.equal(firstItem,30);
            assert.equal(lastItem,10);

        });
    });

    describe('#getParentIndex(i)',function () {
        /* TODO: ADD LOGIC HERE */
        it('Should return 0 when the length is < 3 && > 0',function () {
            let h = new heap();
            h.insert(1);
            h.insert(2);
            assert.equal(h.getParentIndex(1),0);
        });

        it('Should return 1 when i is between 3 and 4',function () {
            let h = new heap();
            h.insert(1);
            h.insert(2);
            h.insert(3);
            h.insert(4);
            assert.equal(h.getParentIndex(3),1);
        });
    });

    describe('#delete()',function () {
        it('Should remove the first item from the heap',function () {
           let h = new heap();
           h.insert(1);
           h.insert(2);
           h.insert(3);
           h.delete();
           assert.equal(h.heap[0],2);
        });
    });
});

