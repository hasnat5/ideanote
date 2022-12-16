import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TrashIcon, PencilSquareIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
    };

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };

    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Users</h1>
                    <h2>List of user</h2>
                </div>

                <div class="grid items-center gap-2">
                    <Link to='/users/add' class="inline-block text-fourth text-base font-Inter font-semibold items-center md:text-lg">
                        <div class="flex items-center">
                            <PlusCircleIcon className="h-6 w-6 text-fourth stroke-2" />
                            <span class="ml-1">Add user</span>
                        </div>
                    </Link>
                </div>
            </div>

            <section className='mt-6'>
                {/* tabel user */}
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg" bis_skin_checked="1">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">
                                    No
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Role
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <span class="sr-only">Edit</span>
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    <span class="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.uuid} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td class="py-4 px-6">
                                        {user.name}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.email}
                                    </td>
                                    <td class="py-4 px-6">
                                        {user.role}
                                    </td>

                                    {/* edit */}
                                    <td class="py-4 px-6 text-right">
                                        <Link to={`/users/edit/${user.uuid}`} class="inline-block font-medium text-secondary font items-center">
                                            <div class="flex items-center">
                                                <PencilSquareIcon className="h-4 w-4 stroke-2" />
                                                <span class="ml-1 hover:underline">Edit</span>
                                            </div>
                                        </Link>
                                    </td>

                                    {/* delete */}
                                    <td class="py-4 px-6 text-right">
                                        <button onClick={() => deleteUser(user.uuid)} class="inline-block font-medium text-red-500 font items-center">
                                            <div class="flex items-center">
                                                <TrashIcon className="h-4 w-4 stroke-2" />
                                                <span class="ml-1 hover:underline">Delete</span>
                                            </div>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    )
}

export default UserList