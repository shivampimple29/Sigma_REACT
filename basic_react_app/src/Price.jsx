function Price({newPrice,oldPrice}){

    let oldStyles={
        textDecorationLine:"line-through",
    }

    let newStyles={
        fontWeight:"bold",
    }

    let styles={
        backgroundColor:"#e0c367",
        marginTop:"2rem",
        marginBottom:"0",
        display:"flex",
        justifyContent:"center",
        height:"1.5rem",
        borderBottomLeftRadius:"0.9rem",
        borderBottomRightRadius:"0.9rem",
    };
    return(
        <div style={styles}>
        <div style={oldStyles}>{oldPrice}</div>&nbsp;&nbsp;&nbsp;
        <div style={newStyles}>{newPrice}</div>
        </div>
    );

}

export default Price;