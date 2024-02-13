function max2(a,b)
{
    if(a>b)
    return a
    else 
    return b
}
console.log(max2(5,8))
console.log(max2(15,8))
console.log(max2(15,15))

console.log("bonjour")

function verif()
{
A=document.getElementById('A').value;
B=document.getElementById('B').value;
alert(Number(A)+Number(B))
}


console.log(somme(1,3))
function sommeDeuxInputs(){
    let a=Number(prompt("entrer nombre:"));
    let b=Number(prompt("entrer nombre:"));
    alert("la somme est"+(a+b));
}