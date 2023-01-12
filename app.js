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
   console.log (crearTarea("Hacer ejercicios de Mumuki", "En proceso"))
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
   
  
//