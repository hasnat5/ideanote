import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const IdeaList = () => {
    const [ideas, setIdeas] = useState([]);

    useEffect(() => {
        getIdeas();
    }, []);

    const getIdeas = async () => {
        const response = await axios.get("http://localhost:5000/ideas");
        setIdeas(response.data);
    };

    const deleteIdeas = async (ideaId) => {
        await axios.delete(`http://localhost:5000/ideas/${ideaId}`);
        getIdeas();
    };
    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Ideas</h1>
            <h2>List of idea</h2>
            <Link to='/ideas/add'>add new</Link>

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
                                    Title
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Created by
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
                            {ideas.map((posting, index) => (
                                <tr key={posting.uuid} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td class="py-4 px-6">
                                        {posting.title}
                                    </td>
                                    <td class="py-4 px-6">
                                        {posting.description}
                                    </td>
                                    <td class="py-4 px-6">
                                        {posting.user.name}
                                    </td>

                                    {/* edit */}
                                    <td class="py-4 px-6 text-right">
                                        <Link to={`/ideas/edit/${posting.uuid}`} class="inline-block font-medium text-secondary font items-center">
                                            <div class="flex items-center">
                                                <PencilSquareIcon className="h-4 w-4 stroke-2" />
                                                <span class="ml-1 hover:underline">Edit</span>
                                            </div>
                                        </Link>
                                    </td>

                                    {/* delete */}
                                    <td class="py-4 px-6 text-right">
                                        <button onClick={() => deleteIdeas(posting.uuid)} href="daftar-kelas.html" class="inline-block font-medium text-red-500 font items-center">
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

export default IdeaList;