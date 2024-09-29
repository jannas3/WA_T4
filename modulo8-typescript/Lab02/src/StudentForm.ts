//src/StudentForm.ts
import { Student } from "./Student";

const studentForm = (student : Student) => {
    return`
    <th scope="row">${student.id}</th>
    <td>${student.completeName}</td>
    <td>${student.age}</td>
    <td>${student.height}</td>
    <td>${student.weight}</td>
    <td>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editarAluno">Editar</button>
        <button class="btn btn-danger">Remover</button>
    </td>
    `
}


export default studentForm