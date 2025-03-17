import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={handleClick}>Back</button>
    </>
  );
}

export default GoBack;
