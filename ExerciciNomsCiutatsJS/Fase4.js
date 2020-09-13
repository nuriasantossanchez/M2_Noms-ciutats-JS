Object.defineProperties(Ciudad, {
    'arrayBarcelona': {
        get: function () {
            var arrayBarcelona = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'barcelona') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arrayBarcelona.push(chr);
                    });
                    return arrayBarcelona;
                }
            }
        }
    },
    'arrayMadrid': {
        get: function () {
            var arrayMadrid = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'madrid') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arrayMadrid.push(chr);
                    });
                    return arrayMadrid;
                }
            }
        }
    },
    'arrayValencia': {
        get: function () {
            var arrayValencia = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'valencia') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arrayValencia.push(chr);
                    });
                    return arrayValencia;
                }
            }
        }
    },
    'arrayMalaga': {
        get: function () {
            var arrayMalaga = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'malaga') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arrayMalaga.push(chr);
                    });
                    return arrayMalaga;
                }
            }
        }
    },
    'arrayCadiz': {
        get: function () {
            var arrayCadiz = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'cadiz') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arrayCadiz.push(chr);
                    });
                    return arrayCadiz;
                }
            }
        }
    },
    'arraySantander': {
        get: function () {
            var arraySantander = new Array();
            for (var [key, value] of Object.entries(Ciudad)) {
                if (key === 'santander') {
                    Array.prototype.forEach.call(value, function (chr) {
                        arraySantander.push(chr);
                    });
                    return arraySantander;
                }
            }
        }
    }
});


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
            UIShowArray(Ciudad.arrayBarcelona.reverse(), 'Fase 4');
            UIShowArray(Ciudad.arrayMadrid.reverse(), '');
            UIShowArray(Ciudad.arrayValencia.reverse(), '');
            UIShowArray(Ciudad.arrayMalaga.reverse(), '');
            UIShowArray(Ciudad.arrayCadiz.reverse(), '');
            UIShowArray(Ciudad.arraySantander.reverse(), '');

            e.preventDefault();
        }
    });