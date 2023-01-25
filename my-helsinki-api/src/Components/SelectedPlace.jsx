const SelectedPlace = ({ selectedPlace }) => {
    return(
        <div>
            {selectedPlace && selectedPlace.map((p)=>(
                <p key={p.id}>
                    {p.id}
                </p>
            ))}
        </div>
    )
}

export default SelectedPlace;