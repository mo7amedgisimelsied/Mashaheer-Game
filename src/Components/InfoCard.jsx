function InfoCard(){
    return (
        <div>
        <div className="info-card" style={{margin: "1rem 0", background: "black", padding: "1rem", borderRadius: "1rem"}}>
            <img src="https://picsum.photos/300/300"style={{width: "50%", borderRadius: "0.5rem"}} />
            <h3 style={{margin: "0"}}>Walter White</h3>
            <p style={{margin: "0.5rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsa at sequi error possimus deleniti vero laudantium iure ipsum fuga!</p>
        </div>
        </div>
    )
}

export default InfoCard;