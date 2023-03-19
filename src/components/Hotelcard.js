

function Hotelcard({hotel}){
    const { name, address1, city, shortDescription, tripAdvisorRating, lowRate } = hotel;
    return (
        <div style={{display: "flex", width: "600px", marginTop: "15px"}}>
            <div>
                <img style={{borderRadius: "8px", objectFit: "cover"}} src="https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg" width={200} height={200}/>
            </div>
            <div style={{textAlign: "left", display: "flex", marginLeft: "10px"}}>
                <div style={{position: "relative"}}>
                    <div style={{fontSize: "17px"}}><b>{name}</b></div>
                    <div style={{fontSize: "14px"}}>{address1}, {city}</div>
                    <div style={{fontSize: "14px", marginTop: "14px"}}>{shortDescription}</div>
                    <div style={{fontSize: "14px", marginTop: "14px", position: "absolute", bottom: "18px"}}>Wifi, Pool, Topview pool, Gym</div>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div > <b>{tripAdvisorRating} </b></div>
                    <div style={{flex: 1, fontSize: "14px"}}>
                        44 Reviews
                    </div>
                    <div style={{marginBottom: "18px"}}><b>{lowRate}rs</b></div>
                </div>
            </div>
        </div>
    )
}

export default Hotelcard;