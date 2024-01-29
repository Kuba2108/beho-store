import { ReactComponent as HeartIcon } from "../../../../assets/svg/fav-icon.svg";
import { ReactComponent as ChartIcon } from "../../../../assets/svg/statistic-icon.svg";

import { IconButton } from "@mui/material";

export const IconButtonWithHeart = () => {
  return (
    <IconButton size="large"
    sx={{
        border: "1px solid #F2F5F9"
    }}
    >
      <HeartIcon />
    </IconButton>
  );
};
export const IconButtonWithChart = () => {
  return (
    <IconButton size="large">
      <ChartIcon />
    </IconButton>
  );
};
