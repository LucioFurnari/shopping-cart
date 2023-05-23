import { AiOutlineFileSearch } from 'react-icons/ai' 

export function NotFoundCard() {
  return (
    <div className="lg:col-start-2 lg:col-end-4 ">
      <h2 className="text-center text-4xl">Item not found</h2>
      <AiOutlineFileSearch className=' mx-auto w-96 h-auto'/>
    </div>
  )
}