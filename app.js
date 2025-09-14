const inputTarea = document.getElementById("tarea")
const listadoTareas = document.getElementById("listadoTarea");
var mensajeError = 'La tarea no puede estar vacía';

function agregarTarea() {
    var tarea = inputTarea.value;
    var tareas = document.createElement("li");
    if (inputTarea.value == '') {
        inputTarea.value = mensajeError;
        inputTarea.style.color = 'red';
        setTimeout(() => {
            limpiarMensajeError();
        }, 2000)
    } else {
        tareas.innerHTML = tarea + '<i class="fas fa-solid fa-edit editar" onclick="editarTarea(this)"></i>' + '<i class="fas fa-trash-alt eliminar" onclick="eliminarTarea(this)"></i>';
        listadoTareas.appendChild(tareas);
        inputTarea.value = '';
    }
}

function editarTarea(elemento) {
    var tareaEditar = elemento.parentElement.firstChild;
    var tareaSeleccionada = tareaEditar.textContent;
    inputTarea.value = tareaSeleccionada;

    if (tareaSeleccionada) {
        elemento.parentElement.remove();
    }
}

function eliminarTarea(elemento) {
    elemento.parentElement.remove();
}

function limpiarMensajeError() {
    inputTarea.value = '';
    inputTarea.style.color = '';
}