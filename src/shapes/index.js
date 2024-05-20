import scaleDinosaurForms from "./dinosaur"
import scaleAnimalForms from "./animal"
import scaleAerialForms from "./aerial"
import scaleDragonForm from "./dragon"

export default function listForms (level) {
  return [
    ...scaleAnimalForms(level),
    ...scaleAerialForms(level),
    ...scaleDinosaurForms(level),
    scaleDragonForm(level),
  ]
}