
type ProfileCardProps = {
    image: string,
    name: string,
    bio: string
}

function ProfileCard(dataProfilecards: ProfileCardProps) {
    const { image, name, bio } = dataProfilecards;

    return(
        <>
            <div className="card">
                    <img src={image} alt="Avatar" />
                <p>
                    Name: {name}<br/>
                    Bio: {bio}
                </p>
            </div>
        </>
    )
}

export default ProfileCard;