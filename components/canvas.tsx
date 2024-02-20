import React from "react"
import TicketDemo from "./ticket"


export default function TicketCanvas() {

    const canvasRef = React.useRef(null)

    React.useEffect(() => {
        const canvas = canvasRef.current
        // @ts-ignore
        const context = canvas?.getContext('2d')
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return (
       <>
        <canvas ref={canvasRef} className="">
            <TicketDemo />
        </canvas>
        <button onClick={() => {
            const canvas = canvasRef.current
            // @ts-ignore
            const image = canvas?.toDataURL("image/png").replace("image/png", "image/octet-stream")
            const a = document.createElement('a')
            a.href = image
            a.download = 'ticket.png'
            a.click()
        } }>Download</button>
       </>
    )
}