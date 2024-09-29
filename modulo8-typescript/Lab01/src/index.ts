import { Task } from "./Task";
import { TaskList } from "./TaskList";

// Formata a linha de exibição da tarefa
const rowFormatAppend = (task: Task): void => {
    let newTr = document.createElement("tr");
    newTr.id = task.getId().toString();

    newTr.innerHTML = `
        <td class="flex-wrap">${task.getDate()} - ${task.getTime()}</td>
        <td class="flex-wrap">${task.getTitle()}</td>
        <td class="flex-wrap">${task.getLimitDate()}</td>
        <td class="flex-wrap">${task.getDescription()}</td>
        <td>
            <div class="d-flex flex-column flex-lg-row gap-2">
                <button class="btn btn-danger w-100">Apagar</button>
                <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#editaItem">Editar</button>
            </div>
        </td>
    `;
    document.querySelector("tbody")?.append(newTr);
    configButtons(); // Configura eventos após adicionar a linha
}

const taskList = new TaskList();

// Configura a data e hora atual no input de data
const setCurrentDate = () => {
    const dateInput = document.querySelector<HTMLInputElement>("#date");
    
    if (dateInput) {
        let date = new Date();
        let formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        let formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
        
        dateInput.value = `${formattedDate}-${formattedTime}`;
    }
}

// Cria uma nova tarefa a partir dos inputs
const newTask = (): void => {
    const inputs = document.querySelectorAll<HTMLInputElement>("tr input");
    let values: string[] = [];

    inputs.forEach(input => {
        if (input.value) {
            values.push(input.value);
        }
    });

    let date = new Date();
    let newTask: Task = new Task(
        `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`,
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`,
        values[1], values[2], values[3]
    );

    taskList.addTask(newTask);
    rowFormatAppend(newTask);
}

// Remove a tarefa quando o botão "Apagar" é clicado
const removeTask = (event: Event): void => {
    
    const button = event.target as HTMLElement;
    const tr = button.closest("tr");
    if (tr) {
        taskList.deleteTask(parseInt(tr.id));
        tr.remove();
    }
}

// Carrega os dados da tarefa no modal para edição
const loadModal = (event: Event): void => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-body input");
    const button = event.target as HTMLElement;
    const id = button.closest("tr")?.id; // Pega o ID da linha correspondente

    if (id) {
        let task = taskList.getTask(parseInt(id)); // Busca a tarefa pelo ID
        if (task) {
            inputs[0].value = task.getTitle();       // Preenche o título
            inputs[1].value = task.getLimitDate();   // Preenche a data limite
            inputs[2].value = task.getDescription(); // Preenche a descrição
            inputs[3].value = id; // Armazena o ID da tarefa no input hidden para referência
        }
    }
}

// Atualiza a tarefa com base nos dados do modal
const updateTaskInModal = (event: Event): void => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-body input");
    const id = parseInt(inputs[3].value); // Pega o ID armazenado no input hidden

    let task = taskList.getTask(id); // Encontra a tarefa correspondente

    if (task) {
        task.setTitle(inputs[0].value);        // Atualiza o título
        task.setLimitDate(inputs[1].value);    // Atualiza a data limite
        task.setDescription(inputs[2].value);  // Atualiza a descrição

        taskList.updateTask(id, task.getTitle(), task.getLimitDate(), task.getDescription());

        readTaskList(); // Reatualiza a lista de tarefas no DOM
    }
}

// Atualiza a lista de tarefas no DOM
const readTaskList = (): void => {
    const tbody = document.querySelector("tbody");

    if (tbody) {
        while (tbody.children.length > 1) { // Remove todas as tarefas existentes, exceto a primeira linha
            tbody.removeChild(tbody.lastChild!);
        }

        taskList.getList().forEach((task) => { // Adiciona todas as tarefas novamente
            rowFormatAppend(task);
        });
    }
}

// Configura os eventos para os botões de adicionar, apagar e editar
const configButtons = (): void => {
    document.querySelectorAll("button").forEach(btn => {
        if (btn.textContent === "Adicionar") {
            btn.removeEventListener("click", newTask); // Remove o evento anterior (evita múltiplos binds)
            btn.addEventListener("click", newTask);
        }

        if (btn.textContent === "Apagar") {
            btn.removeEventListener("click", removeTask);
            btn.addEventListener("click", removeTask);
        }

        if (btn.textContent === "Editar") {
            btn.removeEventListener("click", loadModal);
            btn.addEventListener("click", loadModal);
        }

        if (btn.textContent === "Enviar Alteração") {
            btn.removeEventListener("click", updateTaskInModal);
            btn.addEventListener("click", updateTaskInModal);
        }
    });
}

// Inicialização
setCurrentDate();
configButtons();
