import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { Rueda } from "./Rueda";
import { RegistroAutomotor } from "./RegistroAutomotor";

const ruedasPrimerAuto: Rueda[] = [new Rueda(18), new Rueda(18), new Rueda(18), new Rueda(18)];
const ruedasSegundoAuto: Rueda[] = [new Rueda(15.5), new Rueda(15.5), new Rueda(15.5), new Rueda(15.5)];
const ruedasPrimerMoto: Rueda[] = [new Rueda(17), new Rueda(17)];
const ruedasPrimerCamion: Rueda[] = [new Rueda(21), new Rueda(21), new Rueda(21), new Rueda(21), new Rueda(21), new Rueda(21)];

let autoSuran : Auto = new Auto("Volkswagen", "Polo", ruedasPrimerAuto,"AC390ZZ");
let autoFiesta : Auto = new Auto("Ford", "Kuga", ruedasSegundoAuto,"B222222");
let motoHornet : Moto = new Moto("Yamaha", "FZX", "Azul plateado", ruedasPrimerMoto,"ACT999");
let camionTector : Camion = new Camion("Marcedes", "Axor", 5000, ruedasPrimerCamion,"ZZ456CC");

const registroAutomotor : RegistroAutomotor = new RegistroAutomotor("Los Teros");

registroAutomotor.agregarAuto(autoPolo);
registroAutomotor.agregarAuto(autoKuga);
registroAutomotor.agregarMoto(motoFZX);
registroAutomotor.agregarCamion(camionAxor);

console.log(registroAutomotor.getNombre() + "\n");      //get registro

console.log(registroAutomotor.getListaAutos());
registroAutomotor.eliminarAuto("B333332");              //auto
registroAutomotor.consultarAuto("B333332");

console.log(registroAutomotor.getListaMotos());
registroAutomotor.eliminarMoto("ACT899");               //moto
registroAutomotor.consultarMoto("ACT899");

console.log(registroAutomotor.getListaCamiones());
registroAutomotor.eliminarCamion("ZZ56CC")             //camion
registroAutomotor.consultarCamion("ZZ456CC")

registroAutomotor.modificarAuto("AC490ZZ", "Renault", "Suran", ruedasPrimerAuto);   //modificar auto
registroAutomotor.consultarAuto("AC390ZZ");

registroAutomotor.modificarMoto("ACT998", "Yamaha", "", "Blanca", ruedasPrimerMoto)       //modificar moto
registroAutomotor.consultarMoto("ACT999");

registroAutomotor.modificarCamion("ZZ339CC", "NuevoMarcedes", "Carga", 30000, ruedasPrimerCamion)      //modificar camion
registroAutomotor.consultarCamion("ZZ456CC");
