import { FORM_DINOSAUR, SIZE_GARGANTUAN, SIZE_HUGE } from "./constants"
import { getAttackModifier, getAthleticsModifier } from "./utils"

const baseDinosaurForms = [{
  id: 'Ankylosaurus',
  speed: 25,
  reach: 10,
  diceDamage: 7,
}, {
  id: 'Brontosaurus',
  speed: 25,
  reach: 15,
  diceDamage: 7,
}, {
  id: 'Deinonychus',
  speed: 40,
  diceDamage: 7,
  agileDiceDamage: 7,
}, {
  id: 'Stegosaurus',
  speed: 30,
  reach: 10,
  diceDamage: 9,
}, {
  id: 'Triceratops',
  speed: 30,
  diceDamage: 9,
  agileDiceDamage: 7,
  criticalDamage: 7,
}, {
  id: 'Tyrannosaurus',
  speed: 30,
  reach: 10,
  diceDamage: 6.5,
  agileDiceDamage: 5.5,
  criticalDamage: 6.5,
}]

function scaleDinosaurForm (baseForm, level) {
  const form = {
    type: FORM_DINOSAUR,
    armorClass: 18 + level,
    tempHitPoints: 15,
    senses: {
      lowLight: true,
      impreciseScent: 30
    },
    athletics: getAthleticsModifier(level, 18),
    attackModifier: getAttackModifier(level, 16),
    damageBonus: 9,
    reach: 5,
    ...baseForm
  }

  switch (true) {
    case level >= 13:
      form.size = SIZE_GARGANTUAN
      form.reach = form.Reach >= 15 ? 25 : 20
      form.tempHitPoints = 25
      form.armorClass = 21 + level
      form.attackModifier = getAttackModifier(level, 25)
      form.damageBonus = 15
      form.diceDamage *= 2
      form.athletics = getAthleticsModifier(level, 25)
      if (form.agileDiceDamage) {
        form.agileDiceDamage *= 2
      }
      break;
    case level >= 9:
      form.size = SIZE_HUGE
      form.reach = form.Reach >= 15 ? 20 : 15
      form.tempHitPoints = 20
      form.attackModifier = getAttackModifier(level, 18)
      form.damageBonus = 6
      form.diceDamage *= 2
      form.athletics = getAthleticsModifier(level, 21)
      if (form.agileDiceDamage) {
        form.agileDiceDamage *= 2
      }
  }

  return form
}

export default function scaleDinosaurForms (level) {
  return baseDinosaurForms.map(form => scaleDinosaurForm(form, level))
}