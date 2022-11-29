
const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ]
///1
const a=item.sort((a, b) => a.price - b.price)[0];
console.log(a)

//2
const b=item.sort((a, b) => b.price - a.price)[0];
console.log(b)
////3
let amount=0;
item.forEach(i=>{
    amount+=i.price
})
console.log(amount)

//4
let amount2=0
item.forEach(i=>{
    if(i.price>5){
        amount2+=i.price
    }
})
console.log(amount2)