import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
function Footer() {
	const listes = [
		"FAQ",
		"Media Center",
		"Redeem gift cards",
		"Terms of Use",
		"Corporate information",
		"Legal Guarantee",
		"Help Center",
		"Investor Relations",
		"Buy gift cards",
		"Privacy",
		"Contact Us",
		"Legal Notices",
		"Account",
		"Jobs",
		"Ways to Watch",
		"Cookie Preferences",
		"Speed Test",
		"Only on Netflix",
	];
	return (
		<div className="footer container ">
			<div className="footer_telephone my-5">Questions? Call 80 25 12 50</div>

			<ul className="footer_listes container row">
				{listes.map((item, index) => (
					<li className="col-4" key={index}>
						{item}
					</li>
				))}
			</ul>

			<select name="" id="lg">
				<option value="English" className="">
					English
				</option>
				<option value="Dansk" className="">
					Dansk
				</option>
			</select>

			<h5 className="mt-4 pb-5 fs-6">Netflix Denmark</h5>
			<h4 className="text-center pb-5 nati">
				Built by:- Natnael M. Gashaw (Nati)
			</h4>
		</div>
	);
}

export default Footer;


