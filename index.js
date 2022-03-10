function countdown(n){
 if (n <= 0){
     return "Liftoff!"
 }else {
     console.log(`${n}, `)
     return `${n}, ` + countdown(n-1)
      
     
 }

}
module.exports = countdown