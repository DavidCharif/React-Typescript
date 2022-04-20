import React, { useReducer} from "react"
import { Sub } from "../interfaces/types"

interface FormState {
  inputValues : Sub
}
interface FormProps {
  onNewSub:(subs:Sub)=> void
}
type FormReducerAction = {
  type: 'change_value',
  payload: {
    inputName: string
    inputValue: string
  } 
} | 
{
  type: 'clear_form'
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  descripcion: ''
}
const formReducer = (state:FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value':
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear_form':
      return INITIAL_STATE
 
  }
}

const Form = ({onNewSub}:FormProps)=> {

  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    handleClear()
    onNewSub(inputValues)
    
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement> )  => {
    const {name, value} = e.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
 
  }
  const handleClear = () : void => {
    dispatch({
      type: 'clear_form'
    })    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="nick" value={inputValues.nick} placeholder="Nick"/>
        <input type="number" onChange={handleChange} name="subMonths" value={inputValues.subMonths} placeholder="Subscripciones"/>
        <input type="text" onChange={handleChange} name="avatar" value={inputValues.avatar} placeholder="Avatar"/>
        <textarea  onChange={handleChange} name="descripcion" value={inputValues.descripcion} placeholder="Descripcion"/>
        <button type="button" onClick={handleClear}> Clear form</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form