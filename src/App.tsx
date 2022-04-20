import { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Sub} from './interfaces/types'
import List from './components/List'
import Form from './components/Form'


interface AppState {
  subs: Array<Sub>
}

const INITIAL_STATE = [{
  nick:'user1',
  subMonths : 1,
  avatar : 'https://i.pravatar.cc/300?img=15',
  descripcion: 'David es el mejor',
  aloha: 'asdas'
},{
  nick:'user2',
  subMonths : 2,
  avatar : 'https://i.pravatar.cc/300?img=2',
}]

function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const divRef = useRef<HTMLDivElement>(null)
  const handleNewSub = (newSub:Sub):void => {
    setSubs(subs => [...subs, newSub])
  }
  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])
  
  return (
    <div className="App" ref={divRef}>
      <header className="App-header">
      <h1>React TypeScript</h1>
      <h2>Subscriptores</h2>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
      </header>

    </div>
  )
}

export default App

/**
 * [{
    nick:'David',
    subMonths : 1,
    avatar : 'https://i.pravatar.cc/300?img=15',
    descripcion: 'David es el mejor'
  },{
    nick:'Yola',
    subMonths : 2,
    avatar : 'https://i.pravatar.cc/300?img=2',
  }]
 */
