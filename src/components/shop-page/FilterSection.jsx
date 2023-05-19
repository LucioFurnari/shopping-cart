export function FilterSection() {
  return (
    <section className="flex justify-around py-6">
      <input type="text" className="bg-slate-400"></input>
      <select>
        <option>Alphabetically, A-Z</option>
        <option>Alphabetically, Z-A</option>
        <option>Price, low to high</option>
        <option>Price, high to low</option>
      </select>
    </section>
  )
}