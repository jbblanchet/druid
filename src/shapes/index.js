import scaleDinosaurForms from "./dinosaur"
import scaleAnimalForms from "./animal"
import scaleAerialForms from "./aerial"
import scaleDragonForm from "./dragon"

function getBaseAttackModifiers (level) {
  const proficiency = 4
  let strength = 4
  let rune = 2

  if (level >= 15) {
    strength++
  }

  if (level >= 16) {
    rune++
  }

  return level + proficiency + strength + rune
}

function getBaseAthleticsModifiers (level) {
  const proficiency = 2
  let strength = 4

  if (level >= 15) {
    strength++
  }

  return level + proficiency + strength
}


export default function listForms (level) {
  const attackModifier = getBaseAttackModifiers(level)
  const athleticsModifier = getBaseAthleticsModifiers(level)

  return [
    ...scaleAnimalForms(level, attackModifier, athleticsModifier),
    ...scaleAerialForms(level, attackModifier, athleticsModifier),
    ...scaleDinosaurForms(level, attackModifier, athleticsModifier),
    scaleDragonForm(level, attackModifier, athleticsModifier),
  ]
}