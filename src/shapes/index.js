import scaleDinosaurForms from "./dinosaur"
import scaleAnimalForms from "./animal"
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

export default function listForms (level) {
  const attackModifier = getBaseAttackModifiers(level)

  return [
    ...scaleAnimalForms(level, attackModifier),
    ...scaleDinosaurForms(level, attackModifier),
    scaleDragonForm(level, attackModifier),
  ]
}