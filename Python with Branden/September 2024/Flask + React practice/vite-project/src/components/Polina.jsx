import { useState, useEffect } from "react";
import axios from "axios";

function Polina() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");  // State for input field
  const [error, setError] = useState(null);

  // Fetch default name from Flask server on initial load
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/default-name")
      .then((response) => {
        setName(response.data.name);
        setInputName(response.data.name);  // Set initial input value
      })
      .catch((error) => {
        console.error("Error fetching default name:", error);
        setError("Failed to load default name");
      });
  }, []);

  // Fetch career info when name changes
  useEffect(() => {
    if (name) {
      axios.get(`http://127.0.0.1:8080/api/${name}`)
        .then((response) => {
          setData(response.data);
          setError(null);  // Clear any previous errors
        })
        .catch((error) => {
          console.error("Error fetching career info:", error);
          setData(null);  // Clear previous data
          setError("Failed to load career info");
        });
    }
  }, [name]);

  // Handle input field change
  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form behavior
    setName(inputName);  // Update name and trigger data fetch
  };

  // Render loading state
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  // Render error message if any
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  // Render the data once it's available
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputName}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <button type="submit">Get Info</button>
      </form>

      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Date: {data.date}</p>
          <p>Career: {data.career}</p>
        </div>
      )}
    </>
  );
}

export default Polina;
