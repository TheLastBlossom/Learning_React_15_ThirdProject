import { useForm } from '../../hooks/useForm';
import { useState } from 'react'
import { CONSTANS } from '../../helpers/constans';
import { AjaxRequest } from '../../helpers/AjaxRequest';
export const CreateArticle = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [status, setStatus] = useState(null);
    const { change, model } = useForm();
    const createArticle = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        const url_create_article = CONSTANS.url + "create-article";
        let { response } = await AjaxRequest(url_create_article, "POST", model);    
        setStatus(response.status);
        if(response.status == 200){
            let _id = response.body._id;
            let fileInput = document.querySelector("#file");            
            let formData = new FormData();            
            let url_upload_image = CONSTANS.url + "upload-image/"+_id;            
            formData.append('image', fileInput.files[0]);
            let result = await AjaxRequest(url_upload_image, "POST", formData, true);
            console.log(result.response);
            setIsSaving(false);
        }
    }
    return (
        <div className='page'>
            <h2 className='title'>Create Article</h2>
            <p className='description'>Form to create article</p>
            <pre>{JSON.stringify(model)}</pre>
            <strong>
                {status == 200 ? "Guardado con exito" :
                    status == 400 ? "Datos invalidos" : ""}
            </strong>
            <form className='form' onSubmit={createArticle}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={change} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea name='content' id='content' onChange={change}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="file">Image</label>
                    <input type="file" name="file" id="file" />
                </div>
                {isSaving ? <input type="submit" value="Saving ... " readOnly className='btn btn-success' /> :
                    <input type="submit" value="Create" className='btn btn-success' />}
            </form>
        </div>
    )
}
