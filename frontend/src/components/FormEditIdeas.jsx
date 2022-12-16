import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditIdeas = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getPostingById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/postings/${id}`
                );
                setTitle(response.data.title);
                setDescription(response.data.description);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getPostingById();
    }, [id]);

    const updateIdea = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/postings/${id}`, {
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
            <form onSubmit={updateIdea}>
                <p>{msg}</p>
                <div className='grid gap-14 mb-6 max-w-xl'>
                    <div bis_skin_checked="1">
                        <label for="nama"
                            className="block mb-2 font-bold text-fourth">Judul*</label>
                        <input type="text" name="nama" required value={title} onChange={(e) => setTitle(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder="Nama judul" />
                    </div>

                    <div bis_skin_checked="1">
                        <label for="deskripsi" className="block mb-2 font-bold text-fourth">Deskripsi*</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="deskripsi" rows="4" class="block p-2.5 w-full input border-fourth border-2 rounded" placeholder="Tulis sesuatu" required></textarea>
                    </div>

                </div>

                <button type="submit"
                    class="rounded-lg py-2 px-4 w-full bg-secondary md:px-6 md:text-base md:w-auto">Update</button>
            </form>

        </div>
    )
}

export default FormEditIdeas;