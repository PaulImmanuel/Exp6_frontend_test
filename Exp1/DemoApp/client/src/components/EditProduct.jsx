import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

function EditProduct(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const { id } = useParams();
    
    const findProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/findProduct/${id}`);
            setName(response.data.name);
            setQuantity(response.data.quantity);
            setPrice(response.data.price);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        findProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/editProduct/${id}`, { name, quantity, price });
            toast.success(response.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">Update Product Details</h3>
            <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back</Link>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Product Name</label>
                    <input type="text" value={name} required
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Quantity</label>
                    <input type="number" value={quantity} required
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Price</label>
                    <input type="number" value={price} required
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">Update Product</button>
                </div>
            </form>

            <ToastContainer position="top-left" autoClose={2000} hideProgressBar={false}
                closeOnClick={true} transition={Bounce} theme="dark" />
        </div>
    );
}

export default EditProduct;
