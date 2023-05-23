import { useState, useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { shopContext, shopDispatchContext, filterContext } from '../ShopContext';

export function FilterSection() {
  // Shop dispatch // 
  const shopDispatch = useContext(shopDispatchContext);

  const [select, setSelect] = useState({hasSelect: false, selectValue: 'Feature'});
  const [input, setInput] = useState('');

  const handleInput = (ev) => setInput(ev.target.value)
  const handleFilter = (ev) => {
    ev.preventDefault();
    shopDispatch({type: 'FILTER-SHOP', name: input})
  };

  const handleSelector = () => setSelect({...select, hasSelect: !select.hasSelect});
  const handleSelectValue = (ev) => setSelect({...select, selectValue: ev.target.value})

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-evenly py-6">
      <form className='relative' onSubmit={handleFilter}>
        <input onChange={handleInput} type="text" placeholder='Search' className="bg-slate-400 border-b-2 pr-4 border-black bg-transparent focus:outline-2 rounded-t-md focus:outline-orange-500 outline-none peer "></input>
        <AiOutlineSearch className='absolute right-0 top-0 w-4 h-auto transition-[width] peer-focus:w-6' aria-labelledby='Search button'/>
        <button className='absolute right-0 top-0 w-6 h-6' title='Search button' type='submit'></button>
      </form>
      <div className="relative  min-w-[14rem] md:m-0 mt-6">
        <span className='select-none'>Sort by </span>
        <button className="active:bg-yellow-800 border-slate-600  border-2 cursor-pointer select-none min-w-[11rem]" onClick={handleSelector} name="Selected filter" title='Selected filter' aria-label={`Sort by ${select.selectValue}`}>
          {select.selectValue}
        </button> 
        <ul className={`${select.hasSelect && 'h-32'} transition-[height] absolute top-7 right-0 h-0 overflow-y-scroll bg-slate-100 shadow-zinc-700 shadow-lg`}>
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
    <li>
      <button onClick={handleValue} className={`${state == value && 'bg-yellow-900'} cursor-pointer p-2 w-40 active:bg-yellow-900 select-none hover:bg-yellow-700`} value={value}>
        {name}
      </button>
    </li>
  )
}