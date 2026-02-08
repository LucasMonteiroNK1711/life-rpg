import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

const STORAGE_KEY = "lifeRpgSave"

export default function App() {
  const [player, setPlayer] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)

    return saved
    ? JSON.parse(saved)
    : {xp:0, level: 1}
  })

  function addXP(amount) {
    const newXP = player.xp + amount
    const level = Math.floor(Math.sqrt(newXP / 100)) + 1

    setPlayer({ xp: newXP, level })
  }

  // 🔥 salva automático sempre que mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(player))
  }, [player])

  return <Dashboard player={player} addXP={addXP} />
}