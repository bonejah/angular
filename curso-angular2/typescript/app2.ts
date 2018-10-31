import { Spacecraft, ContainerShip } from "./base-ship";
import { MillenniumFalcon } from "./starfighters";
import * as _ from 'lodash'

console.log(_.pad("Typescript Examples", 40, "="))

let ship = new Spacecraft("hyperdrive");
ship.jumpIntoHyperSpace();
 
let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(
  `Is falcon good for the job? ${goodForTheJob(falcon) ? "YES" : "NO"}`
);
