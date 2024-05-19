export function getAttackModifier (attackModifier, base) {
  if (attackModifier > base) {
    return attackModifier + 2
  }
  return base
}

export function getAthleticsModifier (modifier, base) {
  return modifier > base ? modifier : base
}
