import XPBar from "./XPBar"
import TaskList from "./TaskList"

export default function Dashboard({ player, addXP }) {
  return (
    <div className="container">
      <header className="header">
        <h1>⚔ Life RPG</h1>
        <span className="level">Lv {player.level}</span>
      </header>

      <XPBar xp={player.xp} level={player.level} />

      <TaskList addXP={addXP} />
    </div>
  )
}
