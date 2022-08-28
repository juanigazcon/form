/* let p = new Promise ((resolve,reject) => {
let a = 1+1;

if (a === 2){
    resolve("Success");
} else {
    reject("Failed")
}

} )

p.then((message)=> {
console.log("This is in the then" + message);
}).catch((message)=>{
    console.log("This is in the catch" + message)
})
//catch para capturar errores q se generen en la ejecución del código

//hoy tenemos APIs y librerías que nos permiten no escribir el body de la promise
//APIs para hacer petición asíncrona sin sintaxis de .then y .catch

Fetch (URL donde quiero buscar el recurso).then((res)=> console.log(res.json())) 

Fetch (URL donde quiero buscar el recurso)
.then((res)=> res.json()) 
.then((data)=> console.log(data));

//con estas tres líneas de código nos podemos traer la respuesta de una promesa */