//import React from "react";
import axios from "axios";
import React, { useState } from "react";

function RegisterForm() {
const [name,setName] = useState()
const [email,setEmail] = useState()
const [password, setPassword] = useState()
const [consumer_number,setConsumer_number] = useState()
const [address,setAddress] = useState()

const [status,setStatus] = useState() //status of form submission

const handleSubmit = (e) => {
e.preventDefault()
axios.post('http://localhost:8000/register',{name,email,password,consumer_number,address})
.then(result=>setStatus(result.data))
.catch(err=>setStatus(err))
}

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Sign up now!
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit}className="space-y-6">
                        <div>
                            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input onChange={(e)=>setName(e.target.value)}
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input onChange={(e)=>setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                    placeholder="hello@gmail.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input onChange={(e)=>setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="consumer_number" className="block text-sm font-medium text-gray-700">
                                Consumer Number
                            </label>
                            <div className="mt-1">
                                <input onChange={(e)=>setConsumer_number(e.target.value)}
                                    type="text"
                                    name="consumer_number"
                                    id="consumer_number"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                    placeholder="123456789"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="connection_type" className="block text-sm font-medium text-gray-700">
                                Connection Type
                            </label>
                            <div className="mt-1">
                                <select
                                    name="connection_type"
                                    id="connection_type"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                >
                                    <option value="">Select Connection Type</option>
                                    <option value="domestic">Domestic</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <div className="mt-1">
                                <input onChange={(e)=>setAddress(e.target.value)}
                                    type="text"
                                    name="address"
                                    id="address"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border bg-white text-gray-900"
                                    placeholder="123 Main St, City, Country"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Register
                            </button>
                        </div>
                        <div className="text-green-500 mt-4"> {status} </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default RegisterForm