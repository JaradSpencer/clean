
import Slider from '@mui/material/Slider';

export default function Speech() {
    return (
        <>
        <nav className="speech">
            <div className="speech-text">

            </div>
            <div className="speech-slider">
                
                <Slider defaultValue={30} aria-label="Slider" orientation="vertical"/>
            </div>
            <button>Mute</button>
        </nav>
        </>
    )
}