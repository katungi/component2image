import './style.css'

export default function TicketDemo() {
	return (
		<>
			<div className="ticket created-by-anniedotexe">
				<div className="left">
					<div className="image">
						<p className="admit-one">
							<span>ADMIT ONE</span>
							<span>ADMIT ONE</span>
							<span>ADMIT ONE</span>
						</p>
						<div className="ticket-number">
							<p>
								#20030220
							</p>
						</div>
					</div>
					<div className="ticket-info">
						<p className="date">
							<span>TUESDAY</span>
							<span className="june-29">JUNE 29TH</span>
							<span>2021</span>
						</p>
						<div className="show-name">
							<h1>SOUR Prom</h1>
							<h2>Olivia Rodrigo</h2>
						</div>
						<div className="time">
							<p>8:00 PM <span>TO</span> 11:00 PM</p>
							<p>DOORS <span>@</span> 7:00 PM</p>
						</div>
						<p className="location"><span>East High School</span>
							<span className="separator"><i className="far fa-smile"></i></span><span>Salt Lake City, Utah</span>
						</p>
					</div>
				</div>
				<div className="right">
					<p className="admit-one">
						<span>ADMIT ONE</span>
						<span>ADMIT ONE</span>
						<span>ADMIT ONE</span>
					</p>
					<div className="right-info-container">
						<div className="show-name">
							<h1>SOUR Prom</h1>
						</div>
						<div className="time">
							<p>8:00 PM <span>TO</span> 11:00 PM</p>
							<p>DOORS <span>@</span> 7:00 PM</p>
						</div>
						<div className="barcode">
							<img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code" />
						</div>
						<p className="ticket-number">
							#20030220
						</p>
					</div>
				</div>
			</div>
		</>
	)
}