/**
 * Created by millsky on 4/13/17.
 */
/*  a.) Tokenize the inputs -> JS We can just split and get an array */
function tokenize(stringExpression) {
    /* Remove whitespaces */
    stringExpression = stringExpression.replace(/ /g,'');
    return stringExpression.split('');
}

/* Utility to Check if token is valid */
var tokens = ["(",")","^","+","-","*","/"];

/* utility to map priorities P|E|MD|AS */
var tokenPriority = {
    "(":0,
    ")":0,
    "+":3,
    "-":3,
    "*":2,
    "/":2,
    "^":1
};

/* Token associative - Used for associative mapping Left == L Right == R*/
var tokenAssociative = {
    "+":"L",
    "-":"L",
    "*":"L",
    "/":"L",
    "^":"R"
}

/* utility to map functions */
var tokenFunction = {
    "+": function (a,b) {
        return a+b;
    },
    "-":function (a,b) {
        return a-b;
    },
    "*":function (a,b) {
        return a*b;
    },
    "/":function (a,b) {
        return a/b;
    }
};

/* Utility function to check if token is a valid operation +,-/ etc. */
function isValidToken(t) {
    return tokens.indexOf(t) >= 0;
}

/*c.) Utility function to check if input is a number
 we can extend this later if needed */
function isNumber(n) {
    return !isNaN(n);
}


/* https://en.wikipedia.org/wiki/Reverse_Polish_notation */
/* Achieved via: https://en.wikipedia.org/wiki/Shunting-yard_algorithm */
function convertToPostFix(stringExporession) {
    /* Stack for operators */
    var ops = [];
    /* Tokenize the passed in string*/
    var tokenizedExpression = tokenize(stringExporession);
    /* Init an empty stack*/
    var output = [];
    for(var i=0;i<tokenizedExpression.length;i++){

        var currentToken = tokenizedExpression[i];
        if(isNumber(currentToken)){
            output.push(currentToken);
        }else{
            if(isValidToken(currentToken)){
                if(currentToken == "(" || currentToken == ")"){
                    /* If the token is a left parenthesis (i.e. "("), then push it onto the stack. */
                    if(currentToken == "("){
                        ops.push(currentToken);
                    }else {
                        /* Until the token at the top of the stack is a left parenthesis,
                        pop operators off the stack onto the output queue.*/
                        var index = ops.length;
                        while (index--) {
                            var currentOp = ops[index];
                            if(currentOp != "("){
                                var item = ops.splice(index, 1);
                                output.push(item[0]);
                                output.push(" ");
                            }else {
                                /* Pop the left parenthesis from the stack, but not onto the output queue.*/
                                ops.splice(index, 1);
                                break;
                            }
                        }
                    }
                }else {
                    output.push(" ");
                    var currentPriority = tokenPriority[currentToken];
                    var index = ops.length;
                    /* Iterate backwards to push out old ops with a lower priority */
                    while (index--) {
                        var currentOp = ops[index];
                        var opsPriority = tokenPriority[currentOp];
                        var associativeProp = tokenAssociative[currentToken];
                        if (opsPriority <= currentPriority && currentOp != "(" && currentOp != ")") {
                            /* Take associativity into account  */
                            if(associativeProp == "L" || (associativeProp == "R" && opsPriority < currentPriority)){
                                var item = ops.splice(index, 1);
                                output.push(item[0]);
                                output.push(" ");
                            }
                        }else{
                            break;
                        }
                    }
                    ops.push(currentToken);
                }


            }
        }
    }

    /* There could be some left over ops who's priorities did not
     pop b/c they did not meet the priority criteria*/

    if(ops.length > 0){
        for(var i = ops.length - 1; i >= 0; i--){
            output.push(" ");
            output.push(ops[i]);
        }
    }

    return output;
}

/* Stack based evaluation of postfix notation: http://scriptasylum.com/tutorials/infix_postfix/algorithms/postfix-evaluation/*/
function evaluatePostFixExpression(postFixArray) {
    postFixArray = postFixArray.join('').split(' ');
    var ops = [];
    for(var i=0;i<postFixArray.length;i++){
        var currentToken = postFixArray[i];
        /* Check for empty in corner case */
        if(currentToken === ""){
            return false;
        }
        if(isNumber(currentToken)){
            ops.push(Number(currentToken));
        }else{
            var op2 = ops.pop();
            var op1 = ops.pop();
            var result = tokenFunction[currentToken](op1, op2);
            ops.push(result);

        }
    }
    return ops.pop();
}

/* We can utilize regexhere to check for errors prior to evaluation
 * it is probably more efficient to catch errors during build of the postfix
 * that would be a todo less time constraints
 * */
function expressionContainsErrors(stringExpression) {
    /* WHITE LIST CHARS WE ARE USING - User cannot input alphabetic chars or ! other unicode */
    var whiteList = new RegExp('[^0-9+-/* ]');
    return whiteList.test(stringExpression);
}

function parseMath(stringExpression) {
    if(expressionContainsErrors(stringExpression)){
        return false;
    }else{
        var result = evaluatePostFixExpression(convertToPostFix(stringExpression));
        /* Catch any exceptions we missed test case 1++*/
        if(isNaN(result)){
            return false
        }else {
            return result;
        }
    }
}

export default parseMath
