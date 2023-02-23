import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you an opportunity to see a lot.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Luzon Island is the largest in the Philippines and the 15th largest
      island in the world, with an area of 109,965 square kilometres.
      Located in the northern part of the Philippines (south of Taiwan,
      north of the Visayas Islands, east of the South China Sea, and west
      of the Philippine Sea), is home to the capital Manila. Luzon is also
      one of the three major administrative regions of the Philippines,
      which also includes the Batanes and Babuyan Islands in the north,
      and the Marinduque and Masbate islands in the south as well as
      Catanduanes, Mindoro and Palawan."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daluldul,Batanas"
        text="
      Located in the northern part of the Philippines (south of Taiwan,
      north of the Visayas Islands, east of the South China Sea, and west
      of the Philippine Sea), is home to the capital Manila. Luzon is also
      one of the three major administrative regions of the Philippines,
      which also includes the Batanes and Babuyan Islands in the north,
      and the Marinduque and Masbate islands in the south as well as
      Catanduanes, Mindoro and Palawan.Luzon Island is the largest in the Philippines and the 15th largest
      island in the world, with an area of 109,965 square kilometres."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
