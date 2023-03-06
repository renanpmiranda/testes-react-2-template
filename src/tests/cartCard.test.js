import CartCard from "../components/Cart/CartCard";
import { render, screen } from "@testing-library/react";


const productMock = {
    id: 1,
    image:"https://imagem.png",
    title:"Produto teste",
    price: 1000,
    quantity: 1
}

const addToCartMock = jest.fn()
const removeFromCartMock = jest.fn()

describe("Cart Card", () => {
    test("deve renderizar a imagem, o título, o preço, a quantidade e o botão de remover quando o botão de compra for clicado", async () => {
        
        render(<CartCard product={productMock} removeFromCart={removeFromCartMock}/>)

        const title = screen.getByRole("heading", { name: /produto teste/i })
        const image = screen.getByRole("img", { name: /produto teste/i })
        const price = screen.getByText(/\$1000\.00/i)
        const removeBtn = getByRole("button", { name: /remove/i})

        expect(title).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(removeBtn).toBeInTheDocument()
    })
})