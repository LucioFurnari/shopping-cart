import Card from "./Card"
import Header from "./ui/Header"

export default function Shop(props) {
  const {dataBase} = props
  return (
    <div className="min-h-screen">
      <Header section='Collection' link='/' routeName='Home' item='Products'/>
      <div className=" grid-container p-12 pt-20 gap-6 justify-center items-center grid grid-cols-1 md:grid-col-2  lg:grid-cols-4 lg:grid-rows-2">
        {dataBase.map((item,index) => {
          const { id } = item;
          return <Card {...item} key={id} id={index} />
          })
        }
      </div>
    </div>
  )
}