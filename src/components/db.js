import chocolateBar from '../assets/images/chocolatebarra.jpg'
import chocolateMani from '../assets/images/chocolatemani.jpg'
import chocolateMenta from '../assets/images/chocolatementa.jpg'
import icedCoffe from '../assets/images/cafehelado.jpg'
import espresso from '../assets/images/espresso.jpg'
const dataBase = [
  {
    name: 'Chocolate-Bar',
    description: "Here's a chocolate bar that will make your taste buds go wild. Made of dark chocolate and coated in premium cocoa butter, this bar is sure to give you a sweet experience that will leave you wanting more. Whether you're looking for a quick snack or something to satisfy your cravings all day long, this chocolate bar is perfect for you.",
    type: 'Chocolate',
    price: 100,
    img: chocolateBar,
    id: 1,
    stock: 25,
  },
  {
    name: 'Chocolate-with-peanuts',
    description: '',
    type: 'Chocolate',
    price: 120,
    img: chocolateMani,
    id: 2,
    stock: 21,
  },
  {
    name: 'Mint-chocolate',
    description: '',
    type: 'Chocolate',
    img: chocolateMenta,
    price: 175,
    id: 3,
    stock: 30,
  },
  {
    name: 'Iced-coffee',
    description: '',
    type: 'Coffee',
    img: icedCoffe,
    price: 120,
    id: 4,
    stock: 40,
  },
  {
    name: 'Espresso',
    type: 'Coffee',
    description: '',
    img: espresso,
    price: 120,
    id: 5,
    stock: 45,
  }
]

export default dataBase;