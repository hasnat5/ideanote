import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddIdeas = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveIdea = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/postings", {
                title: title,
                description: description,
            });
            navigate("/ideas");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };


    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Ideas</h1>
            <h2>Add new ideas</h2>


            <form onSubmit={saveIdea}>
                <p>{msg}</p>
                <div className='grid gap-14 mb-6 max-w-xl'>
                    <div bis_skin_checked="1">
                        <label for="nama"
                            className="block mb-2 font-bold text-fourth">Judul*</label>
                        <input type="text" name="nama" required value={title} onChange={(e) => setTitle(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder="Nama judul" />
                    </div>

                    <div bis_skin_checked="1">
                        <label for="deskripsi" className="block mb-2 font-bold text-fourth">Deskripsi*</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="deskripsi" rows="4" className="block p-2.5 w-full input border-fourth border-2 rounded" placeholder="Tulis sesuatu" required></textarea>
                    </div>

                </div>

                <button type="submit"
                    class="rounded-lg py-2 px-4 w-full bg-secondary md:px-6 md:text-base md:w-auto font-bold font-Lato">Submit</button>
            </form>
        </div>
    )
}

export default FormAddIdeas;