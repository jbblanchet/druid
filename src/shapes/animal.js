import { FORM_ANIMAL, SIZE_LARGE, SIZE_HUGE } from "./constants"
import { getAttackModifier } from "./utils"

const baseAnimalForms = [{
  id: 'Ape',
  speed: 25,
  climb: 20,
  diceDamage: 7,
}, {
  id: 'Bear',
  speed: 30,
  diceDamage: 9,
  agileDiceDamage: 4.5,
}, {
  id: 'Cat',
  speed: 40,
  diceDamage: 7,
  agileDiceDamage: 5.5,
}]

function scaleAnimalForm (baseForm, level, attackModifier) {
  const form = {
    type: FORM_ANIMAL,
    size: SIZE_LARGE,
    armorClass: 18 + level,
    tempHitPoints: 15,
    senses: {
      lowLight: true,
      impreciseScent: 30
    },
    athletics: 18,
    attackModifier: getAttackModifier(attackModifier, 9),
    damageBonus: 1,
    reach: 5,
    ...baseForm,
  }

  switch (true) {
    case level >= 9:
      form.size = SIZE_HUGE
      form.reach = 15
      form.tempHitPoints = 20
      form.armorClass = 18 + level
      form.attackModifier = getAttackModifier(attackModifier, 18)
      form.damageBonus = 7
      form.diceDamage *= 2
      if (form.agileDiceDamage) {
        form.agileDiceDamage *= 2
      }
  }

  return form
}

export default function scaleAnimalForms (level, attackModifier) {
  return baseAnimalForms.map(form => scaleAnimalForm(form, level, attackModifier))
}