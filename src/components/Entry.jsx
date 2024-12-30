import marker from "../assets/marker.png"
export default function Entry(props) {
    return (
        <article className="entry">
            <div className={"entry_img_container"}><img src={props.img.src} className="loc-image" alt={props.img.alt} /></div>
            <div className="entry_details">
                <div className="entry_details_info">
                    <img src={marker} className={"marker"} alt="location-marker"/>
                    <span className={"country"}>{props.country}</span>
                    <a href={props.googleMapsLink} className={"location"}>View on Google Maps</a>
                </div>
                <h2 className={"place"}>{props.title}</h2>
                <p className={"dates"}>{props.dates}</p>
                <p className={"desc"}>{props.text}</p>
            </div>
        </article>
    );
}