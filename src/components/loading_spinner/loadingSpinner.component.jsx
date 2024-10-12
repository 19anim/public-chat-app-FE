import small_spinner from "../../assets/small_loading_spinner.svg";
import medium_spinner from "../../assets/medium_loading_spinner.svg";

const LOADING_SPINNER_SIZE = {
  SMALL: "s",
  MEDIUM: "m",
};

const LoadingSpinner = ({ size = "s" }) => {
  switch (size) {
    case LOADING_SPINNER_SIZE.SMALL:
      return (
        <div>
          <img src={small_spinner} />
        </div>
      );
    case LOADING_SPINNER_SIZE.MEDIUM:
      return (
        <div>
          <img src={medium_spinner} />
        </div>
      );
  }
};

export default LoadingSpinner;
