//*DESAFIO 1*//

const tareas = [
    {
      Titulo: "Estudiar html",
      Estado: "Terminado",
    },
    {
      Titulo: "Estudiar css",
      Estado: "En progreso",
    },
    {
      Titulo: "Estudiar js",
      Estado: "Pendiente",
    },
    {
      Titulo: "Practicar js",
      Estado: "En progreso",
    },
  ];
  

    console.log (tareas) 
    

//DESAFIO 2//

const crearTarea = (titulo, estado) =>{
    tareas.push ({Titulo: titulo, Estado: estado})
    return tareas
}
console.log (crearTarea("Hacer ejercicios de Mumuki", "En progreso"))
console.log (tareas)
   
//DESAFIO 3//

const filtrarTareas = (estado) => {
for(const tarea of tareas){ // itero para que busque el estado --- mi constante tarea 
    if (tarea.Estado ===  estado) {  // Si el estado de todos los parametros es igual a estado 
        tareas.filter(tar => tar.Estado === estado)  // le pido que me filtre por todas esas tareas q estoy buscando
            return  tarea        
      }
    }
   
      return tareas
  } 
   console.log(filtrarTareas("En progreso"))
   
  
//DESAFIO 4//

const agregarTarea = (titulo, estado) =>{
    for (let index = 0; index < tareas.length; index++) {
        if(tareas[index].Titulo === titulo) {
            return "Error, ya existe esa tarea"
        }
    }
} 
 console.log(agregarTarea("Hacer ejercicios de Mumuki", "Pendiente"))

//DESAFIO 5//
/*Existe tarea?

Crear una funcion que devolvera las tareas en donde el titulo coincida con el parametro dado. 
Ejemplo: existeTarea(“js”) // Devera devolver el array con los objetos que coincidan con el string sin importar su estado
*/
const existeTarea = (str) => {
const tareasFiltradas = []
tareas. forEach(tareita => {
    if(tareita.Titulo.includes(str)) {
        tareasFiltradas.push(tareita)
    }
})
return tareasFiltradas
}

console.log(existeTarea("js"))
  