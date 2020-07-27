const harold = {
  nombre: 'Harold Alirio',
  apellido: 'Sanchez',
  edad: 32,
  sexo: 'Macho Beta',
}

const korben = {
  nombre: 'Korben Alirio',
  apellido: 'Sanchez Urrego',
  edad: 4,
  sexo: 'Macho alfa',
}

const giova = {
  nombre: 'Giovanna',
  apellido: 'Urrego',
  edad: 36,
  sexo: 'Femenino'
}

const miArray=[harold, korben, giova];
for(let i=0; i<miArray.length; i++){
  console.log(`Persona ${i+1}`);
  console.log(miArray[i]);
}