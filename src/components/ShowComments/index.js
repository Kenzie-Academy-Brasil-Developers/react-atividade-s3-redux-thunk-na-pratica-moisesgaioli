import { useSelector } from "react-redux";
import "./styles.css";

const ShowComments = () => {

    const showComments = useSelector(state => state.user.comments);
    const user = useSelector(state => state.user.name);

    return (
        <div className="comment-container">
            <div className="comment-title">
                <h4> Comentários: </h4>
            </div>
                {
                    showComments.map((comment, index) => {
                       return <div className='comment-text'>
                            <p className="user"> Postado por: {user} </p>
                            <p className="comment" key={index}>{comment}</p>
                        </div>
                    }) 
                }
        </div>
    )
}

export default ShowComments;