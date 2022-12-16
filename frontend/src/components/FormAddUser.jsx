import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role,
            });
            navigate("/users");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div className='mt-4 mb-3 w-full md:mb-6'>
            <h1 class="font-rflex text-xl font-bold uppercase sm:text-2xl">Users</h1>
            <h2>Add new users</h2>

            <form onSubmit={saveUser}>
                <p>{msg}</p>
                <p>{msg}</p>
                <div className='grid gap-14 mb-6 max-w-xl'>
                    <div bis_skin_checked="1">
                        <label for="nama"
                            className="block mb-2 font-bold text-fourth">Nama</label>
                        <input type="text" name="nama" required value={name} onChange={(e) => setName(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder="Nama judul" />
                    </div>

                    <div class="mb-6" bis_skin_checked="1">
                        <label for="email" className="block mb-2 font-bold text-fourth">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder="name@gmail.com" />
                    </div>

                    <div class="mb-6" bis_skin_checked="1">
                        <label for="password" className="block mb-2 font-bold text-fourth">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder='*****' />
                    </div>

                    <div class="mb-6" bis_skin_checked="1">
                        <label for="password" className="block mb-2 font-bold text-fourth">Confirm password</label>
                        <input type="password" id="password" value={confPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded py-2 px-4 border-fourth border-2" placeholder='*****' />
                    </div>

                    <div bis_skin_checked="1">
                        <label for="prodi" className="block mb-2 font-bold text-fourth">Role</label>
                        <select role={role} onChange={(e) => setRole(e.target.value)} name="prodi" class="border-2 border-fourth text-fourth text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>

                            <option value="admin">admin</option>
                            <option value="user">user</option>

                        </select>
                    </div>

                </div>

                <button type="submit"
                    class="rounded-lg py-2 px-4 w-full bg-secondary md:px-6 md:text-base md:w-auto font-bold font-Lato">Submit</button>
            </form >
        </div >
    )
}

export default FormAddUser