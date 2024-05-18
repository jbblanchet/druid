export function getAttackModifier (attackModifier, base) {
  if (attackModifier > base) {
    return attackModifier + 2
  }
  return base
}