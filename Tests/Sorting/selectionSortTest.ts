/**
 * Created by millsky on 4/6/17.
 */
import  {describe,it,before} from "mocha";
import {should,expect,assert} from "chai";
import selectionSort from "../../sorting/selection sort";

const selectionSortTests = describe('SelectionSort',function () {
    it('Should place smallest item at index 0',function () {
        let m = selectionSort([9,0,1,2,3,9,5]);
        /* 0 Should be at 0 */
        assert.equal(m[0],0);

        m = selectionSort([1]);
        /* 1 Should be at 0 */
        assert.equal(m[0],1);
    });

    it('Should sort items smallest to largest',function () {
        let m = selectionSort([1,3,2,4]);
        /* Hacky way - but will work*/
        assert.equal(m.toString(),[1,2,3,4].toString());
    });
});

export default selectionSortTests;