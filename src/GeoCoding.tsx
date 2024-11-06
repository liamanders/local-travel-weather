import { useContext, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { LocationContext } from "./LocationContext";

function GeoCoding() {
  const { setLocation } = useContext(LocationContext);

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invalidErr, setInvalidErr] = useState("");

  const handleGeocode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:8080/geocode", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address }),
        });
        if (!response.ok) {
          throw new Error("Invalid address");
        }
        const data = await response.json();
        setCoordinates(data);
        setInvalidErr("");

        setLocation({
          latitude: data.latitude,
          longitude: data.longitude,
        });

        setAddress("");
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        if (error)
          setInvalidErr("Invalid Address! Please enter a valid address.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <img src={logo} className="loadingLogo" alt="Loading Logo" />
          <h2>Loading...</h2>
        </div>
      )}
      <div>
        <div className="header">
          <div className="logo">
            <a href="/">
              <img className="logoImg" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="title">
            <h1>
              <span className="local">Local, </span>
              <span className="travel">Travel and Weather</span>
            </h1>
          </div>
        </div>
        <div className="searchBar">
          <form className="search-form" onSubmit={handleGeocode}>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Your Address"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Loading ..." : "SEARCH"}{" "}
              <i className="fa fa-search"></i>
            </button>
            <h3>{invalidErr}</h3>
          </form>
        </div>
      </div>
    </>
  );
}

export default GeoCoding;
