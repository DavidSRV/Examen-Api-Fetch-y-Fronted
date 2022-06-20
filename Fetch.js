let render = () => {

    fetch('http://localhost:3000/api/Maquinas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderTable(data)
        })
}

render();

let renderTable = (data) => {

    const table = document.querySelector('.table');

    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody";
    table.appendChild(bodytable);

    for (let i = 0; i < data.length; i++) {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td')

        let text1 = document.createTextNode(data[i].Categoria);
        let text2 = document.createTextNode(data[i].Nombre);
        let text3 = document.createTextNode(data[i].Musculo);
        let text4 = document.createTextNode(data[i].Fabricante);
        let text5 = document.createTextNode(data[i].Precio);
        let text6 = document.createTextNode(data[i].Sede);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
   
        bodytable.appendChild(tr);
    }

}

let crearMaquina = () => {

    const Categoria = document.querySelector('#txtCategoria').value;
    const Nombre = document.querySelector('#txtNombre').value;
    const Musculo = document.querySelector('#txtMusculo').value;
    const Fabricante = document.querySelector('#txtFabricante').value;
    const Precio = document.querySelector('#txtPrecio').value;
    const Sede = document.querySelector('#txtSede').value;

    let maquinaNueva = {
        "Categoria": Categoria,
        "Nombre": Nombre,
        "Musculo": Musculo,
        "Fabricante": Fabricante,
        "Precio": Precio,
        "Sede": Sede
    };
    fetch('http://localhost:3000/api/Maquinas', { 
        method: 'POST',
        headers: {
            'Content-Type':'aplication/json'
        },
        body: JSON.stringify(maquinaNueva)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderMaquina(true)
        })
        .catch((err) => {
            renderMaquina(false)
        })
}
let renderMaquina = (result) => {
    const textMaquina = document.querySelector('#resultado');
    
    if (result) {
        textMaquina.textContent = 'Guardado Exitosamente';
    } else {
        textMaquina.textContent = 'Error al guaradar al guardar';
    }

    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();

    const tableBody = document.querySelector('tbody');
    tableBody.remove();

    render();

    debugger;

}

