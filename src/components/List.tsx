import {Sub} from "../interfaces/types"

interface Props {
  subs: Array<Sub>
}

export default function List({ subs }: Props) {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <li key={index}>
          <img src={sub.avatar} alt={sub.nick} />
          <p>{sub.nick}</p>
          <p>{sub.subMonths} meses</p>
          <p>{sub.descripcion}</p>
        </li>
      )
    })
  }
  return (
    <ul>
      {
        renderList()
      }
    </ul>
  )
}