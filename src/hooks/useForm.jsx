import { useState } from 'react'

export const useForm = (initObject = {})=>{
    const [model, setModel] = useState(initObject);
    const save = (e)=>{
        e.preventDefault();        
        let jmodel = modelForm(e.target);
        setModel(jmodel);     
    }
    const change = ({target})=>{
        const {name, value} = target;
        setModel({
            ...model,
            [name]: value
        })
    }
    const modelForm = (form)=>{
        const formData = new FormData(form);
        let lmodel = {};
        for(let [name, value] of formData){
            lmodel[name] = value;
        }
        return lmodel;

    }
    return {
        save,
        change,
        model
    };
}