import { Task } from "./Task"; 

export class TaskList {
    constructor(
        private taskList: Task[] = []
    ) {}
    // Adiciona uma nova Task à lista
    public addTask = (task: Task): void => {
        this.taskList.push(task);
    }
    // Atualiza uma Task com base no id
    public updateTask = (id: number, title: string, limitDate: string, description: string): void => {
        const task = this.taskList.find(task => task.getId() === id);
        if (task) {
            task.setTitle(title);
            task.setLimitDate(limitDate);  
            task.setDescription(description);
        } else {
            console.error(`Task com id ${id} não encontrada.`);
        }
    }    
    // Deleta uma Task com base no id
    public deleteTask = (id: number): void => {
        this.taskList = this.taskList.filter(task => task.getId() !== id);
    }
    // Retorna uma Task com base no id
    public getTask = (id: number): Task | undefined => {
        return this.taskList.find(task => task.getId() === id);
    }
    // Retorna toda a lista de Tasks
    public getList = (): Task[] => this.taskList;
    // Converte a lista de Tasks para string e imprime
    public toString = (): void => {
        if (this.taskList.length > 0) {
            this.taskList.forEach(task => {
                console.log(task.toString());
            });
        } else {
            console.error('A lista está vazia.');
        }
    }
}
