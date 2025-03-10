import { useState } from "react";

type ProfileCardProps = {
    image: string,
    name: string,
    bio: string,
    like: any,
}

function ProfileCard(dataProfilecards: ProfileCardProps) {
    const { image, name, bio, like } = dataProfilecards;

    return(
        <>
            <div className="card">
                    <img src={image} alt="Avatar" />
                <p>
                    Name: {name}<br/>
                    Bio: {bio}
                    <br/>{like}
                </p>
            </div>
        </>
    )
}

export default ProfileCard;