const articulos = {
    nombre:'cama',
    size: 'grande',
    color:'blanca',
    precio:'$35.00',
    peso: '60kg',
    modelo: 'RD0144'
}

const persona = {
    nombre: 'Nara',
    apellido: 'Smith',
    edad: '24',
    sexo: 'femenino',
    estado_civil: 'soltera',
    pasatiempos: 'correr'
}

document.querySelector('#atributos').innerHTML = articulos.nombre;
document.querySelector('#atributos2').innerHTML = articulos.size;
document.querySelector('#atributos3').innerHTML = articulos.color;
document.querySelector('#atributos4').innerHTML = articulos.precio;
document.querySelector('#atributos5').innerHTML = articulos.peso;
document.querySelector('#atributos6').innerHTML = articulos.modelo;


//persona
document.querySelector('#atributos2-1').innerHTML = persona.nombre;
document.querySelector('#atributos2-2').innerHTML = persona.apellido;
document.querySelector('#atributos2-3').innerHTML = persona.edad;
document.querySelector('#atributos2-4').innerHTML = persona.sexo;
document.querySelector('#atributos2-5').innerHTML = persona.estado_civil;
document.querySelector('#atributos2-6').innerHTML = persona.pasatiempos;

    