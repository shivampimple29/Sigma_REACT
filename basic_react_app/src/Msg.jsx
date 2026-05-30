function Msg({username,textColor}){

    return(
        <>
            <p style={{color:textColor}}>Hello {username} !</p>
        </>
    )
}
export default Msg;