import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loading">
      <ClipLoader />
      Loading...
    </div>
  );
}

export default Loader;
