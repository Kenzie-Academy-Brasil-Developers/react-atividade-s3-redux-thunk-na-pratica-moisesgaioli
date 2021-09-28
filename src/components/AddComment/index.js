import { useState } from "react";
import { useDispatch } from "react-redux"
import { addCommentThunk } from "../../store/modules/user/thunk";
import "./styles.css";


const AddComment = () => {

    const [newComment, setNewComment] = useState();
    const dispatch = useDispatch(); 

    const handleClick = () => {
        dispatch(addCommentThunk(newComment))
    }

    return (    
        <div className ="form">
            <textarea className="text" placeholder="Digite seu comentáriio" rows="10" onChange={e => setNewComment(e.target.value)} />
            <button className="btn" onClick={handleClick}> Enviar </button>
        </div>
    )
}

export default AddComment;