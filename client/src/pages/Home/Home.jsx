import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { MainContainer, TitleContainer } from "../../components/container/Container";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";
import { Footer } from "../../components/Footer/Footer";


export const Home = () => {
    const [data, setData] = useState();
   

    const fetchData = async () => {
        const response = await axios("http://localhost:3000/api/resorts");
        console.log("response = ", response);
        setData(response.data.resorts);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="home-container">
            <TitleContainer />
            <MainContainer>
                <div className="intro-container">
                    <video autoPlay loop playsInline muted>
                        <source src="/video/introvideo.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                        <h1>Grey Stone Valley</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores voluptas libero voluptate
                            veritatis enim voluptatibus non at dolor odit labore, neque dolorem quis nisi.
                        </p>
                    </div>
                </div>
                <div className="location-container" id="location">
                    <h2>Locations</h2>
                    <div className="card-main-container">
                    {data?.map((value,index)=>(<Card data={value} key={index}/>))}
                    </div>
                </div>
                <Footer/>
            </MainContainer>
        </div>
    );
};
