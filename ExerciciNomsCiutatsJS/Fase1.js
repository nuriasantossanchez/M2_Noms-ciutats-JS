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

    return Object.entries(Ciudad);
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
    const inputFormBcn = document.getElementById('barcelona');

    if (!inputFormBcn.disabled) {
        addBarcelona(ciudadObject, divCiudad, inputFormBcn);
    }

    const inputFormMdr = document.getElementById('madrid');
    if (!inputFormMdr.disabled) {
        addMadrid(ciudadObject, divCiudad, inputFormMdr);
    }

    const inputFormVal = document.getElementById('valencia');
    if (!inputFormVal.disabled) {
        addValencia(ciudadObject, divCiudad, inputFormVal);
    }

    const inputFormMlg = document.getElementById('malaga');
    if (!inputFormMlg.disabled) {
        addMalaga(ciudadObject, divCiudad, inputFormMlg);
    }

    const inputFormCdz = document.getElementById('cadiz');
    if (!inputFormCdz.disabled) {
        addCadiz(ciudadObject, divCiudad, inputFormCdz);
    }

    const inputFormStd = document.getElementById('santander');
    if (!inputFormStd.disabled) {
        addSantander(ciudadObject, divCiudad, inputFormStd);
    }
}

function addBarcelona(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.barcelona.toUpperCase() === new String('Barcelona').toUpperCase()) {
        var divCiudadBcn = document.createElement('div');
        divCiudadBcn.className = 'alert alert-success text-center';
        divCiudadBcn.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.barcelona}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadBcn);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.barcelona
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function addMadrid(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.madrid.toUpperCase() === new String('Madrid').toUpperCase()) {
        var divCiudadMdrd = document.createElement('div');
        divCiudadMdrd.className = 'alert alert-success text-center';
        divCiudadMdrd.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.madrid}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadMdrd);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.madrid
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function addValencia(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.valencia.toUpperCase() === new String('Valencia').toUpperCase()) {
        var divCiudadVlnc = document.createElement('div');
        divCiudadVlnc.className = 'alert alert-success text-center';
        divCiudadVlnc.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.valencia}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadVlnc);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.valencia
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function addMalaga(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.malaga.toUpperCase() === new String('Malaga').toUpperCase()) {
        var divCiudadMlg = document.createElement('div');
        divCiudadMlg.className = 'alert alert-success text-center';
        divCiudadMlg.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.malaga}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadMlg);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.malaga
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function addCadiz(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.cadiz.toUpperCase() === new String('Cadiz').toUpperCase()) {
        var divCiudadCdz = document.createElement('div');
        divCiudadCdz.className = 'alert alert-success text-center';
        divCiudadCdz.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.cadiz}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadCdz);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.cadiz
            + '\' no es correcto', 'danger');
        inputForm.value = '';
    }
}

function addSantander(ciudadObject, divCiudad, inputForm) {
    if (ciudadObject.santander.toUpperCase() === new String('Santander').toUpperCase()) {
        var divCiudadStdr = document.createElement('div');
        divCiudadStdr.className = 'alert alert-success text-center';
        divCiudadStdr.innerHTML = `
                <div class='card-header mt-2'> 
                        <strong>${ciudadObject.santander}</strong>
                </div>           
            `;
        divCiudad.appendChild(divCiudadStdr);
        inputForm.disabled = true;
    }
    else {
        UIShowMessage('El nombre de ciudad introducido \'' + ciudadObject.santander
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

        const barcelona = document.getElementById('barcelona').value;
        const madrid = document.getElementById('madrid').value;
        const valencia = document.getElementById('valencia').value;
        const malaga = document.getElementById('malaga').value;
        const cadiz = document.getElementById('cadiz').value;
        const santander = document.getElementById('santander').value;
        Ciudad.barcelona = barcelona;
        Ciudad.madrid = madrid;
        Ciudad.valencia = valencia;
        Ciudad.malaga = malaga;
        Ciudad.cadiz = cadiz;
        Ciudad.santander = santander;

        if (Ciudad.barcelona === '' || Ciudad.madrid === ''
            || Ciudad.valencia === '' || Ciudad.malaga === ''
            || Ciudad.cadiz === '' || Ciudad.santander === '') {
            UIShowMessage('Complete todos los campos, por favor', 'danger');
            e.preventDefault();
            return;
        }

        UIShowNombreCiudad(Ciudad);
        if (isFormDisabled()) {
            definePropertysCiudad();
            document.getElementById('submit-btn').disabled = true;
        }

        e.preventDefault();

    });

document.getElementById('nombre-ciudad-form').onreset = function (e) {
    resetAll();
    e.preventDefault();
};
