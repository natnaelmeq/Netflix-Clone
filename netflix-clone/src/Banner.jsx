import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MovingIcon from "@mui/icons-material/Moving";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";

function Banner() {
	const [movie, setMovie] = useState([]);
	async function fetchBanner() {
		const response = await axios.get(requests.fetchNetflixOriginals);
		// console.log(response.data.results[Math.floor(Math.random() * 2)]);
		setMovie(response?.data.results[Math.floor(Math.random() * 20)]);
	}

	useEffect(() => {
		fetchBanner();
	}, []);
	// console.log(movie)

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	} // this part use for to minimize the description ...
	return (
		<section className="row fluid-container">
			<div className="col-1 bg-black text-white mt-5 pt-5 text-center fs-2 position-fixed search ">
				<p>
					<SearchIcon />
				</p>
				<p>
					<HomeIcon />
				</p>
				<p>
					<MovingIcon c />
				</p>
				<p>
					<TvIcon />
				</p>
				<p>
					<MovieIcon />
				</p>
			</div>
			<header
				className="bannerr "
				style={{
					backgroundSize: "cover",
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
					backgroundPosition: "center top",
					marginLeft: "150px",
				}}
			>
				<div className="bannerr__contents">
					<h1 className="bannerr__title">
						{movie?.title || movie?.name || movie.original_name}
					</h1>
					<div className="search"></div>

					<div className="bannerr__buttons">
						<button className="bannerr__button">Play</button>
						<button className="bannerr__button">My List</button>
					</div>
					<div className="banner_static bannerr__buttons">
						<p className="year bannerr__button">
							{new Date(movie.first_air_date).getFullYear()}
						</p>

						<p className="ranking bannerr__button">{movie.vote_average}</p>
						<p className="language bannerr__button">
							{movie.original_language}
						</p>
					</div>

					<h3 className="bannerr__description">
						{truncate(movie?.overview, 160)}
					</h3>
					<div className="bannerr__fadeBottom"></div>
				</div>
			</header>
		</section>
	);
}

export default Banner;
