import { FORM_DRAGON, SIZE_LARGE, SIZE_HUGE } from "./constants"
import { getAttackModifier } from "./utils"

export default function scaleDragonForm (level, attackModifier) {
  const form = {
    id: 'Dragon',
    type: FORM_DRAGON,
    size: SIZE_LARGE,
    speed: 40,
    fly: 100,
    armorClass: 18 + level,
    tempHitPoints: 10,
    senses: {
      darkvision: true,
      lowLight: true,
      impreciseScent: 60
    },
    athletics: 23,
    attackModifier: getAttackModifier(attackModifier, 22),
    damageBonus: 6,
    diceDamage: 20,
    agileDiceDamage: 16.5,
    reach: 5
  }

  if (level >= 15) {
    form.size = SIZE_HUGE
    form.fly = 120
    form.reach = 10
    form.tempHitPoints = 15
    form.armorClass = 21 + level
    form.attackModifier = getAttackModifier(attackModifier, 28)
    form.damageBonus = 12
    form.athletics = 28
  }

  return form
}