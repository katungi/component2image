import React from "react";
import TicketDemo from "./ticket";
import html2canvas from 'html2canvas';

export default function TicketCanvas() {
    const ticketRef = React.useRef(null);

    const downloadImage = () => {
        const ticketElement = ticketRef.current;
        // @ts-ignore
        html2canvas(ticketElement).then((canvas) => {
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            const a = document.createElement('a');
            a.href = image;
            a.download = 'ticket.png';
            a.click();
        });
    };

    return (
        <>
            <div ref={ticketRef}>
                <TicketDemo />
            </div>
            <button onClick={downloadImage}>Download</button>
        </>
    );
}
