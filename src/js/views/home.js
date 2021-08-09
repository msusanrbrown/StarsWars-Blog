import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Favorites } from "./favorites";
import { Navbar } from "../component/navbar";
import cover from "../../img/cover.jpeg";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<img src={cover} />
		</div>
	);
};
