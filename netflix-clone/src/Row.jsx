import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movietrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; // where can we get this?

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	async function fetchData() {
		const request = await axios.get(fetchUrl); //syntactic sugar
		// console.log(request.data.results);
		//why only 20 movies
		setMovies(request?.data.results);
		return request;
	}
	console.log(movies)
	useEffect(() => {
		fetchData();
	}, [fetchUrl]);
	// console.log(movies)
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movietrailer(movie?.title || movie?.name || movie.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search); // little explanation
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	}; 

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	return (
		<>
			
				<div className="roww">
					<h3>{title}</h3>
				</div>
				<div className="roww__posters ">
					{movies.map((movie) => (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)} // every image click to open youtube movies
							className={`roww__poster ${isLargeRow && "roww__posterLarge"}`} // this mean if it is large row add calss name row__posterLarge
							src={`${base_url}${
								isLargeRow ? movie.poster_path : movie.backdrop_path // b/c poster has something write on the poster however backdrop path has only picture
							}`}
							alt={movie.name}
						/>
					))}
				</div>
				<div style={{ padding: "40px" }}>
					{trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
				</div>
			
		</>
	);
}

export default Row;
