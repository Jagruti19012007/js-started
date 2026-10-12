// Immediate Invoke Function Expressions(IIFE)

(function chidshild(){
    // named iife
    console.log(`DB CONNECTED`);
}
)();
((name) => {
    console.log(`DB CONNECTED TOW ${name}`);
})('Jagruti')