/**
 * Created by millsky on 4/3/17.
 */
import  {describe,it,before} from "mocha";
import {should,expect,assert} from "chai";
import heap from '../../Heap/heap';

describe('Heap',function () {
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
    });
});