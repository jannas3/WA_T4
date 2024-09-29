//src/index.ts
import { Class } from "./Class";
import { Student } from "./Student";
import studentForm from "./StudentForm";

const loadClassData = (schoolroom:Class):Function => {
    const className = document.querySelector("#turma")!;
    className.textContent = schoolroom.name
    const update = () =>{
        if(schoolroom.stundentList.length){
            const spanvalues = document.querySelectorAll("span")

            spanvalues.forEach(span =>{
                if(span.id == "numAlunos"){
                    span.firstChild!.nodeValue = schoolroom.getNumStudents().toString()
                }else if(span.id == "mediaIdades"){
                    span.firstChild!.nodeValue = schoolroom.getEvarageAges().toFixed(0).toString()
                }else if(span.id == "mediaAlturas"){
                    span.firstChild!.nodeValue = schoolroom.getEvarageHeight().toFixed(2).toString()
                }else if(span.id == "mediaPesos"){
                    span.firstChild!.nodeValue = schoolroom.getEvarageWeights().toFixed(2).toString()
                }
            })

            const showHtmlData = document.querySelector("#dadosEstatistica")! as HTMLElement
            showHtmlData.hidden = false;

            const tbody = document.querySelector("tbody")!
            tbody.innerHTML = "";
            schoolroom.stundentList.forEach(student => {
                const tr = document.createElement("tr")
                tr.id = student.id.toString()
                tr.innerHTML = studentForm(student)
                tbody?.append(tr)
            })
        }else{
            const showHtmlData = document.querySelector("#dadosEstatistica")! as HTMLElement
            showHtmlData.hidden = true;
            const tbody = document.querySelector("tbody")!
            tbody.innerHTML = "";
        }
        setupButtons()
    }
    return update
}

const addStudent = () =>{
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-body input");
    studentClass.insertStudent(new Student(
        inputs[0].value,
        parseInt(inputs[1].value),
        parseFloat(inputs[2].value.replace(",", ".")),
        parseFloat(inputs[3].value.replace(",", ".")),
    ))

    updateHtml()
}

const removeStudent = (event:Event) =>{
    const row = event.target as HTMLElement
    const thStudent = row.closest("tr")!;
    const idStudent = parseInt(thStudent.textContent!);

    studentClass.deleteStudent(idStudent);
    updateHtml();
}


const setupButtons = () =>{
    const btns = document.querySelectorAll("button")
    btns.forEach(btn => {
        if(btn.textContent == "Editar"){
            btn.addEventListener("click", loadModal)
        }else if(btn.textContent == "Remover"){
            btn.addEventListener("click", removeStudent)
        }else if(btn.textContent == "Confirmar cadastro"){
            btn.addEventListener("click", addStudent)
        }else if(btn.textContent == "Confirmar Edição"){
            btn.addEventListener("click", updateStundent)
        }
    })
}


const loadModal = (event:Event) =>{
    const row = event.target as HTMLElement
    const thStudent = row.closest("tr")!;
    const idStudent = parseInt(thStudent.textContent!);
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-edit input");

    if(inputs){
        let student = studentClass.getStudent(idStudent);
        inputs[0].value = student.completeName
        inputs[1].value = student.age.toString(),
        inputs[2].value = student.height.toString(),
        inputs[3].value = student.weight.toString()
        inputs[4].id = idStudent.toString()
    }

}


const updateStundent = (event:Event) =>{
    const inputs = document.querySelectorAll<HTMLInputElement>(".modal-edit input");
    const studentId = inputs[4].id

    const student = studentClass.getStudent(parseInt(studentId))

    if(student){
        student.completeName = inputs[0].value
        student.age = parseInt(inputs[1].value)
        student.height = parseFloat(inputs[2].value)
        student.weight = parseFloat(inputs[3].value)
        studentClass.updateStundent(student);
        updateHtml();
    }
    
}



const studentClass = new Class("Educação Fisica");
const updateHtml = loadClassData(studentClass);

studentClass.insertStudent(new Student("Janaina dos Santos Ferreira", 27, 1.30, 82))

updateHtml()
setupButtons();