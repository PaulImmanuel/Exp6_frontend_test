import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';

function Dashboard() {
    const [products, setProducts] = useState([]);

    const viewProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/viewProducts');
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        viewProducts();
    }, []);

    const deleteProduct = async (id) => {
        const isConfirmed = confirm('Are you sure you want to delete this product?');
        
        if (isConfirmed) {
            try {
                const response = await axios.delete(`http://localhost:8000/deleteProduct/${id}`);
                toast.success(response.data.message);
                viewProducts(); //refresh after delete
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div  className="w-full flex justify-center">
            <div >
                <h1 className="text-black text-center font-bold text-xl mb-4">Stock Details</h1>
                <table className="border border-gray-400 w-[100%] mx-auto mt-8">
                <caption className="text-lg font-semibold my-2">
                    <Link to="/addproducts" className="text-blue-500 underline">Add New Product</Link>
                </caption>
                <thead>
                    <tr className="bg-green-400 border border-gray-400 font-bold">
                        <th className="border border-gray-400 px-3 py-3">Sl.No</th>
                        <th className="border border-gray-400 px-3 py-3">Name</th>
                        <th className="border border-gray-400 px-3 py-3">Quantity</th>
                        <th className="border border-gray-400 px-3 py-3">Price</th>
                        <th colSpan={2} className="border border-gray-400 px-3 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => (
                        <tr className="text-lg text-gray-700" key={index}>
                            <td className="border border-gray-400 px-3 py-2">{index + 1}</td>
                            <td className="border border-gray-400 px-3 py-2">{item.name}</td>
                            <td className="border border-gray-400 px-3 py-2">{item.quantity}</td>
                            <td className="border border-gray-400 px-3 py-2">{item.price}</td>
                            <td className="border border-gray-400 px-3 py-2 text-blue-500 underline">
                                <Link to={`/editproduct/${item._id}`}>Edit</Link>
                            </td>
                            <td className="border border-gray-400 px-3 py-2">
                            <button className="text-red-500 underline bg-transparent border-none p-0" 
                            onClick={() => deleteProduct(item._id)}>Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

                <ToastContainer 
                    position="top-left" 
                    autoClose={3000} 
                    hideProgressBar={false} 
                    closeOnClick={true} 
                    transition={Bounce} 
                    theme="colored" 
                />
            </div>
        </div>
    );
}

export default Dashboard;
