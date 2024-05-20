export function getAttackModifier (level, formValue) {
  const attackModifier = getBaseAttackModifiers(level)
  if (attackModifier > formValue) {
    return attackModifier + 2
  }
  return formValue
}

export function getDexAttackModifier (level, formValue) {
  const attackModifier = getBaseDexAttackModifiers(level)
  if (attackModifier > formValue) {
    return attackModifier + 2
  }
  return formValue
}

export function getAthleticsModifier (level, formValue) {
  const modifier = getBaseAthleticsModifiers(level)
  return modifier > formValue ? modifier : formValue
}

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

function getBaseDexAttackModifiers (level) {
  const proficiency = 4
  let dexterity = 4
  let rune = 2

  if (level >= 20) {
    dexterity++
  }

  if (level >= 16) {
    rune++
  }

  return level + proficiency + dexterity + rune
}

function getBaseAthleticsModifiers (level) {
  const proficiency = 2
  let strength = 4

  if (level >= 15) {
    strength++
  }

  return level + proficiency + strength
}