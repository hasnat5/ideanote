import React from 'react'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const UserList = () => {
    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Users</h1>
            <h2>List of user</h2>

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
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="py-4 px-6">
                                    Sliver
                                </td>
                                <td class="py-4 px-6">
                                    Laptop
                                </td>
                                <td class="py-4 px-6">
                                    $2999
                                </td>

                                {/* edit */}
                                <td class="py-4 px-6 text-right">
                                    <a href="daftar-kelas.html" class="inline-block font-medium text-secondary font items-center">
                                        <div class="flex items-center">
                                            <PencilSquareIcon className="h-4 w-4 stroke-2" />
                                            <span class="ml-1 hover:underline">Edit</span>
                                        </div>
                                    </a>
                                </td>

                                {/* delete */}
                                <td class="py-4 px-6 text-right">
                                    <a href="daftar-kelas.html" class="inline-block font-medium text-red-500 font items-center">
                                        <div class="flex items-center">
                                            <TrashIcon className="h-4 w-4 stroke-2" />
                                            <span class="ml-1 hover:underline">Delete</span>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    )
}

export default UserList