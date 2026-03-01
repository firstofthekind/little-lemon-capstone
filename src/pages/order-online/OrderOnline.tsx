import { Dessert, Salad } from "../../components"

const OrderOnline = () => {
  return (
    <main className="py-6 bg-light">
      <div className="container">
        <Salad />
        <Dessert />
      </div>
    </main>
  )
}

export default OrderOnline
