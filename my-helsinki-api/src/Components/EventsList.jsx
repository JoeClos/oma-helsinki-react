const EventsList = ({ events }) => {
    return (
        <div>
            {events && events.data.map((event) => {
                <div>
                    <h3 key={event.id}>{event.name.en}</h3>
                    <a href={event.info_url} target="_blank" rel="noopener noreferrer">
                        <p>{event.info_url}</p>
                    </a>
                </div>
            })}
        </div>
    )
}

export default EventsList;