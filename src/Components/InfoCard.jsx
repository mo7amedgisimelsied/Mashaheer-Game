function InfoCard(props){
    return (
         <div>
        <div className="info-card" style={{margin: "1rem 0", background: "#353535", padding: "1rem", borderRadius: "1rem"}}>
            <img src={props.selected.pic} style={{width: "7rem", height: "7rem" , borderRadius: "0.5rem", objectFit: "cover"}} />
            <h3 style={{margin: "0"}}>{props.selected.name}</h3>
            <p style={{margin: "0.5rem 0"}}>{props.selected.description}</p>
        </div>
        </div>
    )
}

export default InfoCard;