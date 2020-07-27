const harold = {
  nombre: 'Harold',
  apellido: 'Sanchez',
  edad: 32,
  sexo: 'Masculino',
}

const korben = {
  nombre: 'Korben',
  apellido: 'Sanchez',
  edad: 4,
  sexo: 'Macho alfa',
}

const miArray=[harold, korben];
for(let i=0; i<miArray.length; i++){
  console.log(`Persona ${i+1}`);
  console.log(miArray[i]);
}