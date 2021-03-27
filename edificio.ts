// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  departamento: string;
  constructor(depto: string) {
    this.departamento = depto;
  }
  getName() {
    return this.departamento;
  }
}

class Piso {
  nombreDePiso: string;
  departamentos: Departamento[] = [];

  constructor(piso: string) {
    this.nombreDePiso = piso;
  }

  pushDepartamento(depto: Departamento) {
    return this.departamentos.push(depto);
  }

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}

class Edificio {
  cantPisos: Piso[];
  constructor(arrayDePisos: Piso[]) {
    this.cantPisos = arrayDePisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.cantPisos.find((f) => {
      return f.nombreDePiso == nombreDePiso;
    });
    return pisoEncontrado.pushDepartamento(departamento);
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const devolvemeElPiso = this.cantPisos.find((f) => {
      return f.nombreDePiso == nombreDePiso;
    });
    return devolvemeElPiso.getDepartamentos();
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
  // const primeroB = new Departamento("1B");
  // const segundoA = new Departamento("2A");
  // const primerPiso = new Piso("Primer Piso");
  // const segundoPiso = new Piso("Segundo Piso");
  // const unEdificio = new Edificio([primerPiso, segundoPiso]);
  // console.log(unEdificio);
  // const resultado = unEdificio.addDepartamentoToPiso("Primer Piso", primeroB);
  // const result = unEdificio.getDepartamentosByPiso("Primer Piso");
  // console.log(resultado);
  // console.log(result);
}
main();
