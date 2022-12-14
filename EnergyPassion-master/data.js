module.exports = function () {
  var data = {
  clientes:
  [
    {
      id:10001,
      name: "Luis Rodriguez",
      age: 28,
      nickname: "L_rodri",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "luisa@gmail.com",
      enfermedadesExistenciales: true,
      enfermedades:"Diabetes II",
      talla: 1.84 ,
      peso: 114,
      tiempoDisponible: "mañana",
      condicion: "sobrePeso",
      idSuscribcion: 40001,
      metaPrincipal: "bajar peso",
      idRutina: 50001
      },
      {
      id:10002,
      name: "Luisa Driguez",
      age: 25,
      nickname: "L_DriW",
      sexo: "femenino",
      UsuarioPremium: false,
      email: "luisRo@gmail.com",
      enfermedadesExistenciales: true,
      enfermedades:"Diabetes III",
      talla: 1.64 ,
      peso: 64,
      tiempoDisponible: "tarde",
      condicion: "PesoIdeal",
      idSuscribcion: 40002,
      metaPrincipal: "aumentar masa",
      idRutina: 50002
      },
      {
      id:10003,
      name: "Liz Roncoz",
      age: 25,
      nickname: "Liz_ronz",
      sexo: "femenino",
      UsuarioPremium: false,
      email: "lizRonz@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades: "",
      talla: 1.92 ,
      peso: 75,
      tiempoDisponible: "tarde",
      condicion: "bajo peso",
      idSuscribcion: 40003,
      metaPrincipal: "aumentar masa",
      idRutina: 50003
      },
      {
      id:10004,
      name: "Bruce Wane",
      age: 34,
      nickname: "BWane",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "Bwane@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades:"",
      talla: 1.97 ,
      peso: 108,
      tiempoDisponible: "mañana",
      condicion: "peso ideal",
      idSuscribcion: 40004,
      metaPrincipal: "aumentar masa",
      idRutina: 50004
      },
    {
    id:10005,
      name: "Peter Parker",
      age: 22,
      nickname: "P_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pparker@gmail.com",
      enfermedadesExistenciales: false,
      enfermedades:"",
      talla: 1.74 ,
      peso: 78,
      tiempoDisponible: "noche",
      condicion: "sobrePeso",
      idSuscribcion: 40005,
      metaPrincipañ: "bajar peso",
      idRutina: 50005
    },
    {
     id:12124,
       name: "Renzo Alfredo",
       edad: "25",
        nickname: "R_Alfredo",
        email: "renzoalfredo@gmail.com"	   ,       
        UsuarioPremium: true,
        sexo: "masculino",   
        idCalificacion: 55225,
	enfermedadesexistente: true,
	enfermedades: "problema de tiroides",
	talla:1.72,
	peso:75.5,
	tiempoDisponible:"mañanas",
	condicion:"peso ideal",
	idSubscripcion:21323,
	metaPrincipal:"Ganar resistencia, Masa Muscular",
	idRutina: 23423
      },
      {
        id:97252,
        name: "Haliban Huligan",
       edad: "25",
        nickname: "H_Huligan",
        email: "huligan@gmail.com"	   ,       
        UsuarioPremium: true,
        sexo: "masculino",   
        idCalificacion: 29898,
	enfermedadesexistente: true,
	enfermedades: "problemas de respiración",
	talla:1.68,
	peso:80.5,
	tiempoDisponible:"tarde y noche",
	condicion:"un poco de sobrepeso",
	idSubscripcion:12453,
	metaPrincipal:"Ser más fuerte y grande",
	idRutina: 35565
},
      {
        id:85722,
         name: "Alexandra Fernandes",
       edad: "34",
        nickname: "A_Fernandes",
        email: "afernandes@gmail.com"	   ,       
        UsuarioPremium: false,
        sexo: "femenino",
        idCalificacion: 53434,
	enfermedadesexistente: true,
	enfermedades: "dolor en las articulaciones",
	talla:1.56,
	peso:68,
	tiempoDisponible:"noche",
	condicion:"sobrepeso",
	idSubscripcion:14534,
	metaPrincipal:"bajar de peso",
	idRutina: 34324
},
{
	id:76786,
    	name: "Casimodo Carnel",
        edad: "29",
        nickname: "C_Carnel",
        email: "carnel@gmail.com"	   ,       
        UsuarioPremium: true,
        sexo: "masculino",   
        idCalificacion: 65713,
	enfermedadesexistente: false,
	enfermedades: "",
	talla:1.80,
	peso:80.5,
	tiempoDisponible:"tarde",
	condicion:"un poco de sobrepeso",
	idSubscripcion:21323,
	metaPrincipal:"Ganar resistencia, Masa Muscular",
	idRutina: 23423
	},
  {
	id:68575,
    	name: "Garmel Garcia",
      	edad: "43",
        nickname: "G_Garcia",
        email: "garmelgarcia@gmail.com"	   ,       
        UsuarioPremium: false,
        sexo: "masculino",   
        idCalificacion: 43456,
	enfermedadesexistente: true,
	enfermedades: "Problemas del corazon",
	talla:1.74,
	peso:60.0,
	tiempoDisponible:"mañanas",
	condicion:"delgado",
	idSubscripcion:27873,
	metaPrincipal:"Preparación maratón",
	idRutina: 23423
	}
    
  ],
/*

*/
  trainers:
  [
    {
      id:20001,
      name: "Peter Parker",
      age: 22,
      nickname: "P_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pparker@gmail.com",
      horario: 1,
      idCalificacion: 70001
    },
    {
      id:20002,
      name: "PEdro García",
      age: 22,
      nickname: "P_García",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "pGarcía@gmail.com",
      horario: 1,
      idCalificacion: 70002
    },
    {
      id:20003,
      name: "FErnando Parker",
      age: 22,
      nickname: "F_Parker",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "fparker@gmail.com",
      horario: 1,
      idCalificacion: 70003
    },
    {
      id:20004,
      name: "Esquivel Lour",
      age: 22,
      nickname: "E_Per",
      sexo: "masculino",
      UsuarioPremium: false,
      email: "E_Lour@gmail.com",
      horario: 1,
      idCalificacion: 70004
    },
    {
        id:34234,
       name: "Richard Alvarez",
       edad: "22"  ,
        nickname: "R_Alvarez",
        email: "richardalva@gmail.com",
	          
        UsuarioPremium: true,
        sexo: "masculino",
        horario: 2,
        idCalificacion: 55225
      },
      {
        id:23443,
       name: "Stewart Tapia",
       edad:"24"	,
        nickname: "Fitness Tapia",
        email: "stewarttapia@gmail.com",
	            
        UsuarioPremium: false,
        sexo: "masculino",
        horario:3,
        idCalificacion: 45252
},
      {
        id:10034,
        name: "Alvaro",
        edad:"21" ,
        nickname: "Alvagod",
        email: "alvaro@gmail.com",
	       	  
        UsuarioPremium: false,
        sexo: "masculino",
        horario: 3,
        idCalificacion: 82572
},
{
	id:56931,
    name: "Maria Melgar",
    age: 32,
    nickname: "María Fitness",
    sexo: "femenino",
    UsuarioPremium: false, 
    email: "maria@gmail.com",
    horario: 1,
    idCalificacion: 65666
	},
  {
	id:12525,
    name: "Anakin Skywalker",
    age: 22,
    nickname: "Anakin Trainer",
    sexo: "masculino",
    UsuarioPremium: false, 
    email: "anakin@gmail.com",
    horario: 3,
    idCalificacion: 34434
	},
  ],
calificacion:
  [
    {
      id:70001,

      calificacion: 5,

      idTrainer: 20001

    },
    {
      id: 70002,

      calificacion: 3,

      idTrainer: 20002

    },
    {
      id: 70003,

      calificacion: 4,

      idTrainer: 20003
    },
    {
      id: 70004,

      calificacion: 4 ,

      idTrainer:20004
    },
    {
      id: 55225,

      calificacion:5,

      idTrainer:34234
    },
    {
      id:45252,

      calificacion:3,

      idTrainer:23443
    },
    {
      id:82572,

      calificacion:2,

      idTrainer:10034
    },
    {
      id:65666,

      calificacion:5,

      idTrainer:56931
    },
    {
      id:34434,

      calificacion:5,

      idTrainer:12525
    }
  
  ]
}
 return data
  }
 
  

  

