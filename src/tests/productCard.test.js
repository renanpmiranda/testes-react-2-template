import ProductCard from "../components/ProductsList/ProductCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const productMock = {
    id: 1,
    image:"https://imagem.png",
    title:"Produto teste",
    price: 1000
}

const addToCartMock = jest.fn()

describe("Product Card", () => {
    test("deve renderizar o card de produto", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)     
    })

    test("deve renderizar o título, imagem, preço e botão de compra", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const title = screen.getByRole("heading", { name: /produto teste/i })
        const image = screen.getByRole("img", { name: /produto teste/i })
        const price = screen.getByText(/\$1000\.00/i)
        const buyBtn = screen.getByRole("button", { name: /buy/i })

        expect(title).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(buyBtn).toBeInTheDocument()
    })

    test("deve chamar a função de adicionar ao carrinho quando o botão de compra for clicado", async () => {
        const user = userEvent.setup()

        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)
        
        const buyBtn = screen.getByRole("button", { name: /buy/i })

        await user.click(buyBtn)

        expect(addToCartMock).toBeCalled()

        expect(addToCartMock).toBeCalledTimes(1)

        expect(addToCartMock).toBeCalledWith(productMock)
    })
})