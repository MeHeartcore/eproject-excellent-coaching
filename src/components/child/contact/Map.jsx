// import { useMemo } from "react";
// import { GoogleMap, useLoadScript} from "@react-google-maps/api";

import "./Style.css"

function Map() {
	return (
		<div className="map-container">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27692.900100196424!2d-95.4259154627884!3d29.817737017370522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c770a5aa885b%3A0x18e3a96da215d35e!2sALDI!5e0!3m2!1svi!2s!4v1696437685834!5m2!1svi!2s"
				width="600"
				height="450"
				style={{border:0}}
				allowfullscreen=""
				aria-hidden="false"
				tabIndex="0"
			>
			</iframe>
		</div>
	)
}

export default Map