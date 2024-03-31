function addTarefa(){
    var tarefaInput = document.getElementById('tarefa');
    var tarefa = tarefaInput.value.trim();
    if (tarefa !== ''){
        var listaTarefas = document.getElementById('listaTarefas');
        var novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = '';
    }
}

addTarefa()