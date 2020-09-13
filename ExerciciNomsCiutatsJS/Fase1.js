var Ciudad = {
    barcelona: '',
    madrid: '',
    valencia: '',
    malaga: '',
    cadiz: '',
    santander: ''
};

function definePropertysCiudad() {
    Object.defineProperty(Ciudad, 'barcelona', {
        get: function () { return document.getElementById('barcelona').value; }
    });
    Object.defineProperty(Ciudad, 'madrid', {
        get: function () { return document.getElementById('madrid').value; }
    });
    Object.defineProperty(Ciudad, 'valencia', {
        get: function () { return document.getElementById('valencia').value; }
    });
    Object.defineProperty(Ciudad, 'malaga', {
        get: function () { return document.getElementById('malaga').value; }
    });
    Object.defineProperty(Ciudad, 'cadiz', {
        get: function () { return document.getElementById('cadiz').value; }
    });
    Object.defineProperty(Ciudad, 'santander', {
        get: function () { return document.getElementById('santander').value; }
    });
}


//UI
function UIShowMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container-fluid');
    const app = document.querySelector('#app');
    container.insertBefore(div, app);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}


function UIShowNombreCiudad(ciudadObject) {
    const divCiudad = document.getElementById('nombre-ciudad');

    var inputForm = document.getElementById('barcelona');
    if (!inputForm.disabled) {
        let propertyName = 'barcelona';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }

    inputForm = document.getElementById('madrid');
    if (!inputForm.disabled) {
        let propertyName = 'madrid';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }

    inputForm = document.getElementById('valencia');
    if (!inputForm.disabled) {
        let propertyName = 'valencia';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }

    inputForm = document.getElementById('malaga');
    if (!inputForm.disabled) {
        let propertyName = 'malaga';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }

    inputForm = document.getElementById('cadiz');
    if (!inputForm.disabled) {
        let propertyName = 'cadiz';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }

    inputForm = document.getElementById('santander');
    if (!inputForm.disabled) {
        let propertyName = 'santander';
        addCiudad(ciudadObject, propertyName, divCiudad, inputForm);
    }
}

function addCiudad(ciudadObject, propertyName, divCiudad, inputForm) {
    if (ciudadObject[propertyName].toUpperCase() === propertyName.toUpperCase()) {
        var divNombreCiudad = document.createElement('div');
        divNombreCiudad.className = 'alert alert-success text-center';
        divNombreCiudad.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject[propertyName]}</strong>
                </div>           
            `;
        divCiudad.appendChild(divNombreCiudad);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject[propertyName]
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function resetAll() {
    if (confirm('Esta seguro que quiere borrar todo?')) {
        let ciudad = document.getElementById('nombre-ciudad');
        while (ciudad.firstChild) {
            ciudad.removeChild(ciudad.firstChild);
        }

        let contenido = document.getElementById('content');
        while (contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);
        }

        let elements = document.getElementById('nombre-ciudad-form').elements;
        for (let i = 0, element; element = elements[i++];) {
            if (element.type === "text") {
                element.value = '';
                element.disabled = false;
            }
        }

        document.getElementById('submit-btn').disabled = false;
    }

}

function isFormDisabled() {
    let isFormDisabled = true;
    let elements = document.getElementById('nombre-ciudad-form').elements;

    for (let i = 0, element; element = elements[i++];) {
        if (element.type === "text" && element.disabled !== true) {
            isFormDisabled = false;
            break;
        }
    }

    return isFormDisabled;
}


//EVENTOS DEL DOM
document.getElementById('nombre-ciudad-form')
    .addEventListener('submit', function (e) {

        definePropertysCiudad();

        if (Ciudad.barcelona === '' || Ciudad.madrid === ''
            || Ciudad.valencia === '' || Ciudad.malaga === ''
            || Ciudad.cadiz === '' || Ciudad.santander === '') {
            UIShowMessage('Complete todos los campos, por favor', 'danger');
            e.preventDefault();
            return;
        }

        UIShowNombreCiudad(Ciudad);
        if (isFormDisabled()) {
            document.getElementById('submit-btn').disabled = true;
        }

        e.preventDefault();

    });

document.getElementById('nombre-ciudad-form').onreset = function (e) {
    resetAll();
    e.preventDefault();
};
