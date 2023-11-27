import React, { useEffect, useState } from 'react';
import {
    getAllAssistants, 
    getAssistantById, 
    deleteAssistant, 
    updateAssistant,
    createAssistant} from './AssistantApi.js'
import {
    getAllDoctors
} from './DoctorApi.js'
import { login, loginFetch } from './AuthApi.js'



const Assistant = {
    id: '',
    name: '',
    email: '',
    praxisId: ''
}

function TestComponent () {
    const [assistants, setAssistants] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedAssistant, setSelectedAssistant] = useState(Assistant);
    const [loginka, setLogin] = useState({email: '', password: ''});

    useEffect(() => {
        //fetchDoctors();

        /*const LoginJSON = {
            'email': 'doctor2@example.com',
            'password': 'doctorPassword'
        }
        console.log("fetch json: " + LoginJSON);
        login(LoginJSON);*/
    }, []);

    const fetchAssistants = async() => {
        const res = await getAllAssistants();
        setAssistants(res);
    }

    const fetchDoctors = async() => {
        const res = await getAllDoctors();
        setDoctors(res);
    }

    const handleFetchAssistantById = async(id) => {
        const res = await getAssistantById(id);
        console.log(res);
        setSelectedAssistant(res);
    }

    const handleDeleteAssistant = async(id) => {
        await deleteAssistant(id);
        fetchAssistants();
    }

    const handleUpdateAssistant = async() => {
        const UpdateJSON = {
            "id": "2403", 
            "name": 'Aszi4', 
            "email": 'aszi4@gmail.com', 
            "password": 'asdasd', 
            "praxisId": "2453"
        }
        await updateAssistant(UpdateJSON);
        fetchAssistants();
    }

    const handleCreateAssistant = async(assistant) => {
        const CreateJSON = {
            "name": 'Aszi5', 
            "email": 'aszi4@gmail.com', 
            "password": 'asdasd', 
        }
        await createAssistant(CreateJSON);
        fetchAssistants();
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        const LoginJSON = {
            'email': loginka.email,
            'password': loginka.password
        }
        console.log("submit json " + LoginJSON);
        console.log("Hello");
        await loginFetch(LoginJSON);
    }

    const handleInputChange = async (event) => {
        await setLogin({
            ...loginka,
            [event.target.name]: event.target.value
        });
    }
    
    
    return (
        <div>
            <h1>Test</h1>
            <ul>
                {assistants && assistants.map((assistant) => (
                    <li key={assistant.id}>
                        <ul>{assistant.id} | {assistant.name} | praxis: {assistant.praxisId}</ul>
                    </li>
                ))}
            </ul>
           
            <ul>
                {doctors && doctors.map((doctor) => (
                    <li key={doctor.id}>
                        <ul>{doctor.id} | {doctor.name} | praxis: {doctor.praxisId}</ul>
                    </li>
                ))}
            </ul>
            
                {selectedAssistant.name &&  <p key={selectedAssistant.id}>{selectedAssistant.name}</p>}
            

            <button onClick={() => handleFetchAssistantById(2203)}>Fetch Assistant</button>
            <button onClick={() => handleDeleteAssistant({/*id*/})}>Delete Assistant</button>

            <button onClick={() => handleUpdateAssistant()}>Update Assistant</button>
            <button onClick={() => handleCreateAssistant()}>Create Assistant</button>

            <form>
                <input type="text" name="email" placeholder="Email" value={loginka.email} onChange={handleInputChange}/>
                <input type="text" name="password" placeholder="Password" value={loginka.password} onChange={handleInputChange}/>
                <button type="submit" onClick={handleLogin}>Submit</button>
            </form>
        </div>
    );
}

export default TestComponent;
