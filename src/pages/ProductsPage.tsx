import {useProducts} from "../hooks/products";
import {useContext} from "react";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loading} from "../components/Loading";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Model} from "../components/Model";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const CreateHandler = (product:IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            { loading && <Loading />}
            { error && <ErrorMessage error={error} /> }
            { products.map(product => <Product product={product} key={product.id}/>) }

            {modal && <Model title="Create new product" onClose={() => close()}>
                <CreateProduct onCreate={CreateHandler}/>
            </Model>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
                onClick={() => open()}
            >+</button>
        </div>
    )
}