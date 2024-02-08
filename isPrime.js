function isPrime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
            
        }
        
    }
    return true;
}
console.log(`${isPrime(7)? "YES" : "NO"}`);
console.log(`${isPrime(6)? "YES" : "NO"}`);
console.log(`${isPrime(11)? "YES" : "NO"}`);
console.log(`${isPrime(4)? "YES" : "NO"}`);

