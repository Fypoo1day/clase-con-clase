// crear las clases Edificio, Piso y Departamento aquí
// HOLA ESTOY EDITANDO DESDE GITHUB!!!
// HOLA ME EDITARON DE NUEVO QLP
class Departamento {
    nombreDeDepartamento:string;
    constructor(nombre:string) {
        this.nombreDeDepartamento = nombre;
    }

    getName(){
        return this.nombreDeDepartamento;
    };
}

class Piso {
    nombreDePiso:string;
    deptos:Departamento[] = [];
    
    constructor(nombre:string) {
        this.nombreDePiso = nombre;
        
    }
    pushDepartamento(unDepartamento:Departamento){
       return this.deptos.push(unDepartamento);
    };
    getDepartamentos():Departamento[]{
        return this.deptos;
    };
}

class Edificio {
    pisos:Piso[];
    constructor(pisos:Piso[]) {
        this.pisos = pisos;
    }

    addDepartamentoToPiso(nombre:string, departamento:Departamento){
        const pisoEncontrado = this.pisos.find((pi)=> pi.nombreDePiso == nombre);
        return pisoEncontrado.pushDepartamento(departamento);

    }

    getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
        const pisoEncontrado = this.pisos.find((pi)=> pi.nombreDePiso == nombreDePiso );
        return pisoEncontrado.getDepartamentos();
        
    }
}

// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();
