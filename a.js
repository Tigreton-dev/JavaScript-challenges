const fs = require('fs');

let index = 1;

// Lee el JSON desde un archivo
fs.readFile('./data/challenges3.json', 'utf8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo JSON:', error);
        return;
    }

    try {
        const objetos = JSON.parse(data);
        for (const element in objetos) {
            objetos[element].refNumber = index;
            objetos[element].platform = 'algoExpert';
            index++;
        }

        // Guarda los objetos actualizados en un nuevo archivo
        const objetosActualizadosJSON = JSON.stringify(objetos, null, 2);
        fs.writeFileSync('tu-archivo-actualizado.json', objetosActualizadosJSON, 'utf8');

        console.log('Se ha añadido la propiedad "platform" a cada objeto y se ha guardado en un nuevo archivo.');
    } catch (parseError) {
        console.error('Error al analizar el JSON:', parseError);
    }
});

