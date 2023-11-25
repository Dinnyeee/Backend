import React, { useEffect, useState } from 'react';
import {
    getAllAssistants, 
    getAssistantById, 
    deleteAssistant, 
    updateAssistant,
    createAssistant} from './AssistantApi.js'


const TestComponent = () => {
    const [assistants, setAssistants] = useState([]);
    const [assistant, setAssistant] = useState({});

    useEffect(() => {
        getAllAssistants().then((res) => {
            setAssistants(res.data);
        });
    }, []);

    useEffect(() => {
        getAssistantById(1).then((res) => {
            setAssistant(res.data);
        });
    }, []);

    return (
        <div>
            <h1>Test</h1>
            <ul>
                {assistant && assistants.map((assistant) => (
                    <li key={assistant.id}>{assistant.name}</li>
                ))}
            </ul>
        </div>
    );
}
