import { useMemo, useState } from "react"
import { Slider, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import listForms from "./shapes"

const columns = [
  { field: 'id', headerName: 'Name', width: 130 },
  { field: 'size', headerName: 'Size', width: 130 },
  { field: 'attackModifier', headerName: 'Attack Modifier', width: 130, type: 'number' },
  { field: 'damage', headerName: 'Damage', width: 130, type: 'number',
    valueGetter: (_, row) => row.diceDamage + row.damageBonus },
  { field: 'armorClass', headerName: 'Armor Class', width: 130, type: 'number' },
  { field: 'athletics', headerName: 'Athletics Modifier', width: 130, type: 'number' },
  { field: 'tempHitPoints', headerName: 'Temp Hit Points', width: 130, type: 'number' },
  { field: 'speed', headerName: 'Land Speed', width: 130, type: 'number' },
  { field: 'fly', headerName: 'Fly Speed', width: 130, type: 'number' },
  { field: 'swim', headerName: 'Swim Speed', width: 130, type: 'number' },
  { field: 'burrow', headerName: 'Burrow Speed', width: 130, type: 'number' },
];

const minLevel = 11
const maxLevel = 20
const marks = [];
for (var level = minLevel; level <= maxLevel; level++) {
  marks.push({ value: level, label: `${level}` })
}

function App() {
  const [level, setLevel] = useState(11)
  const forms = useMemo(() => listForms(level), [level])

  return <>
    <div style={{ maxWidth: 400, padding: 20 }}>
      <Typography>Level</Typography>
      <div style={{ paddingLeft: 10, marginTop: 10 }} >
      <Slider
        aria-label="level"
        aria-valuetext={`${level}`}
        value={level}
        valueLabelDisplay="off"
        marks={marks}
        min={minLevel}
        max={maxLevel}
        onChange={(_, newLevel) => setLevel(newLevel)}
      />
      </div>
    </div>

    <DataGrid
      rows={forms}
      columns={columns}
      hideFooter />
  </>
}

export default App
