Object.defineProperty(Ciudad, 'arrayModificado', {
    get: function (array) {
        return Ciudad.arrayModificado = getArrayModificado;
    }
});

function getArrayModificado(array) {
    let arrayCiudadesModificadas = new Array();
    let vocal_a = 'a';
    let vocal_A = 'A';
    let number = 4;

    array.forEach(function (element) {
        element = element.split(vocal_a).join(number);
        element = element.split(vocal_A).join(number);
        arrayCiudadesModificadas.push(element);
    });

    return arrayCiudadesModificadas;
}


//EVENTOS DEL DOM
document.getElementById('nombre-ciudad-form')
    .addEventListener('submit', function (e) {

        if (Ciudad.barcelona === '' || Ciudad.madrid === ''
            || Ciudad.valencia === '' || Ciudad.malaga === ''
            || Ciudad.cadiz === '' || Ciudad.santander === '') {
            e.preventDefault();
            return;
        }

        if (isFormDisabled()) {
            UIShowArray(Ciudad.arrayModificado(Ciudad.arraySort(Ciudad.arrayCiudades)), 'Fase 3');

            e.preventDefault();
        }
    });
