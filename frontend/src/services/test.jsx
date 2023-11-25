import React, { useEffect, useState } from 'react';
import {
    getAllAssistants, 
    getAssistantById, 
    deleteAssistant, 
    updateAssistant,
    createAssistant} from './AssistantApi.js'



const Assistant = {
    id: '',
    name: '',
    email: '',
    praxisId: ''
}

function TestComponent () {
    const [assistants, setAssistants] = useState([]);
    const [selectedAssistant, setSelectedAssistant] = useState(Assistant);

    useEffect(() => {
        fetchAssistants();
    }, []);

    const fetchAssistants = async() => {
        const res = await getAllAssistants();
        setAssistants(res);
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
           
                {selectedAssistant.name &&  <p key={selectedAssistant.id}>{selectedAssistant.name}</p>}


            <button onClick={() => handleFetchAssistantById(2203)}>Fetch Assistant</button>
            <button onClick={() => handleDeleteAssistant({/*id*/})}>Delete Assistant</button>

            <button onClick={() => handleUpdateAssistant()}>Update Assistant</button>
            <button onClick={() => handleCreateAssistant()}>Create Assistant</button>
        </div>
    );
}

export default TestComponent;
