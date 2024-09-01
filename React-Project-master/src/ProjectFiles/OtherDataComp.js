import { useState, useEffect } from 'react';

const frameStyle = {
  border: '3px solid',
  borderColor: 'gray',
  padding: '20px',
  borderRadius: '30px',
  width: 'fit-content', 
  margin: '10px auto' // Center the div horizontally
};

function OtherDataComp(props) {
  const [City, setCity] = useState("");
  const [Street, setStreet] = useState("");
  const [ZipCode, setZipCode] = useState("");


  useEffect(() => {
    setCity(props.props.city);
    setStreet(props.props.street);
    setZipCode(props.props.zipcode);
  }, [props.city, props.street, props.zipcode]);

  return (
    <div className="App" style={frameStyle}>
      Steet:{" "}<input value={Street} onChange={(e) => setStreet(e.target.value)} /><br />
      City:{" "}<input value={City} onChange={(e) => setCity(e.target.value)} /><br />
      ZipCode:{" "}<input value={ZipCode} onChange={(e) => setZipCode(e.target.value)} /><br />
    </div>
  );
}

export default OtherDataComp;
