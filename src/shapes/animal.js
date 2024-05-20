import { FORM_ANIMAL, SIZE_HUGE } from "./constants"
import { getAttackModifier, getAthleticsModifier } from "./utils"

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
  id: 'Bull',
  speed: 30,
  diceDamage: 9,
}, {
  id: 'Canine',
  speed: 40,
  diceDamage: 9,
}, {
  id: 'Cat',
  speed: 40,
  diceDamage: 7,
  agileDiceDamage: 5.5,
}, {
  id: 'Deer',
  speed: 50,
  diceDamage: 7,
}, {
  id: 'Frog',
  speed: 25,
  swim: 25,
  reach: 15,
  diceDamage: 7,
  agileDiceDamage: 5,
}, {
  id: 'Shark',
  speed: 0,
  swim: 35,
  diceDamage: 9,
}, {
  id: 'Snake',
  speed: 20,
  climb: 20,
  diceDamage: 8.5,
}]

function scaleAnimalForm (baseForm, level, attackModifier, athleticsModifer) {
  const form = {
    type: FORM_ANIMAL,
    armorClass: 16 + level,
    tempHitPoints: 5,
    senses: {
      lowLight: true,
      impreciseScent: 30
    },
    athletics: getAthleticsModifier(athleticsModifer, 9),
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
      form.athletics = getAthleticsModifier(athleticsModifer, 20)
  }

  return form
}

export default function scaleAnimalForms (level, attackModifier, athleticsModifer) {
  return baseAnimalForms.map(form => scaleAnimalForm(form, level, attackModifier, athleticsModifer))
}