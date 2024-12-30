import globe from "../assets/globe.svg"
export default function Header() {
    return (
        <header className="header">
            <img src={globe} className="logo" alt="globe logo" />
            <h1>my travel journal</h1>
        </header>
    )
}