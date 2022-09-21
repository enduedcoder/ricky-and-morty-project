import { useState, useEffect, useCallback } from "react";
import "./CharacterLocation.css";

export interface CharacterLocationProps {
  url: string;
}

export interface LocationDetails {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

const CharacterLocation = ({ url }: CharacterLocationProps): JSX.Element => {
  const [locationDetails, setLocationDetails] = useState<LocationDetails>();

  const fetchLocationDetails = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setLocationDetails(data);
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  }, [url]);

  useEffect(() => {
    fetchLocationDetails();
  }, [fetchLocationDetails]);

  return (
    <div className="character-location">
      <h3>
        <strong>Location Details:</strong>
      </h3>
      <p data-testid="location-name">
        <b className="sub-heading">Name :</b>{" "}
        {locationDetails ? locationDetails.name : "N/A"}
      </p>
      <p data-testid="location-type">
        <b className="sub-heading">Type :</b>{" "}
        {locationDetails ? locationDetails.type : "N/A"}
      </p>
      <p data-testid="location-dimension">
        <b className="sub-heading">Dimension :</b>{" "}
        {locationDetails ? locationDetails.dimension : "N/A"}
      </p>
      <p data-testid="location-residents">
        <b className="sub-heading">Total residents :</b>{" "}
        {locationDetails ? locationDetails.residents.length : "N/A"}
      </p>
    </div>
  );
};

export default CharacterLocation;
