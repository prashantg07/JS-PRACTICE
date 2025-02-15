// Immediately Invoked Function Expresssions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('prashant')