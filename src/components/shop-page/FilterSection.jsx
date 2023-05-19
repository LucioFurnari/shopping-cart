import { useState } from "react"

export function FilterSection() {
  const [select, setSelect] = useState({hasSelect: false, selectValue: 'Feature'});

  const handleSelector = () => setSelect({...select, hasSelect: !select.hasSelect});
  const handleSelectValue = (ev) => setSelect({...select, selectValue: ev.target.getAttribute('value')})

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-around py-6">
      <input type="text" className="bg-slate-400"></input>
      <div className="relative  min-w-[14rem]">
        <span>Sort by </span>
        <span className="hover:border-slate-600 border-slate-600  border-2 cursor-pointer px-4 select-none min-w-[11rem]" onClick={handleSelector}>{select.selectValue}</span> 
        <ul className={`${select.hasSelect && 'h-32'} transition-[height] absolute top-7 h-0 overflow-y-scroll bg-slate-100 shadow-zinc-700 shadow-lg`}>
          <ListItem handleValue={handleSelectValue} name='Feature' value='Feature' state={select.selectValue}/>
          <ListItem handleValue={handleSelectValue} name='Alphabetically, A-Z' value='A-Z' state={select.selectValue}/>
          <ListItem handleValue={handleSelectValue} name='Alphabetically, Z-A' value='Z-A' state={select.selectValue}/>
          <ListItem handleValue={handleSelectValue} name='Price, low to high' value='Price low to high' state={select.selectValue}/>
          <ListItem handleValue={handleSelectValue} name='Price, high to low' value='Price high to low' state={select.selectValue}/>
        </ul>
      </div>
    </section>
  )
}

function ListItem(props) {
  const {handleValue, name, value, state} = props

  return (
    <li onClick={handleValue} className={`${state == value && 'bg-yellow-900'} cursor-pointer p-2 w-40 active:bg-yellow-900 select-none hover:bg-yellow-700`} value={value}>
      {name}
    </li>
  )
}