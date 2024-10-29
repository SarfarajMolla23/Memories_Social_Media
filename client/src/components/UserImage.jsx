import { Box } from "@mui/material";
import PropTypes from "prop-types";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};
UserImage.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
};
export default UserImage;
