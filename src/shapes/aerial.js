import { FORM_AERIAL, SIZE_MEDIUM, SIZE_HUGE, SIZE_LARGE } from "./constants"
import { getAthleticsModifier, getDexAttackModifier } from "./utils"

const baseAerialForms = [{
  id: 'Bat',
  speed: 20,
  fly: 30,
  senses: {
    echolocation: 40,
  },
  diceDamage: 9,
  agileDiceDamage: 7,
}, {
  id: 'Bird',
  speed: 10,
  fly: 50,
  diceDamage: 9,
  agileDiceDamage: 5.5,
}, {
  id: 'Pterosaur',
  speed: 10,
  fly: 40,
  senses: {
    impreciseScent: 30,
  },
  diceDamage: 10.5,
}, {
  id: 'Wasp',
  speed: 20,
  fly: 40,
  diceDamage: 11.5,
}]

function scaleAerialForm (baseForm, level) {
  const form = {
    type: FORM_AERIAL,
    size: SIZE_MEDIUM,
    armorClass: 18 + level,
    tempHitPoints: 5,
    senses: {
      lowLight: true,
      ...(baseForm.senses || {}),
    },
    attackModifier: getDexAttackModifier(level, 16),
    athletics: getAthleticsModifier(level, 0),
    damageBonus: 5,
    reach: 5,
    ...baseForm,
  }

  switch (true) {
    case level >= 11:
      form.size = SIZE_HUGE
      form.fly += 15
      form.reach = 10
      form.armorClass = 21 + level
      form.tempHitPoints = 15
      form.attackModifier = getDexAttackModifier(level, 21)
      form.damageBonus = 4
      form.diceDamage *= 2
      if (form.agileDiceDamage) {
        form.agileDiceDamage *= 2
      }
      break;
    case level >= 9:
      form.size = SIZE_LARGE
      form.fly += 10
      form.tempHitPoints = 10
      form.attackModifier = getDexAttackModifier(level, 18)
      form.damageBonus = 8
      break;
  }

  return form
}

export default function scaleAerialForms (level) {
  return baseAerialForms.map(form => scaleAerialForm(form, level))
}