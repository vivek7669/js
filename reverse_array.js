
let a = [1,2,4,7,9,0]
let j=0;
let swap ;
for(let i=a.length-1 ; i>=0 ; i--){
       if(j<i){
       swap = a[i]
       a[i] = a[j]
       a[j] = swap;
        j++;
       }
}
 console.log(a);
 