import { useState } from "react";

const ButtonLikeUnlike = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const handleCountClick = () => {
        if(!like) {
            setCount(count + 1);
        }else{
            setCount(count - 1);
        }
        setLike(!like);
    }

    return (
        <>
            <div className="button-like">
                <img 
                    src={like ? "./src/assets/like.png" : "./src/assets/unlike.png"} 
                    alt={like ? "like" : "unlike"} 
                    onClick={handleCountClick} 
                    style={{ width: "35px", height: "35px", marginTop: "8px", cursor: "pointer" }} 
                /> 
                <p>{count}</p>
            </div>
        </>
    )
}
export default ButtonLikeUnlike;