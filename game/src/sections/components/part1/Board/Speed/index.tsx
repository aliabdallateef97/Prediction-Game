import { Box, Slider, Stack } from "@mui/material";
import * as Icons from "@/core/config/import/icons";
import { CustomedTypography } from "@/core/components";
import { SpeedWrapper } from "./style";

const Speed = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack flexDirection={"row"} marginTop={"8px"}>
        <Icons.SpeedIcon />
        <CustomedTypography variant="h4" colorprops="white">
          Speed
        </CustomedTypography>
      </Stack>
      <SpeedWrapper>
        <Slider
          aria-label="Speed"
          defaultValue={2}
          //   valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          marks
          min={1}
          max={5}
        />
        <div className="x">
          <CustomedTypography variant="h6" colorprops="white">
            1x
          </CustomedTypography>
          <CustomedTypography variant="h6" colorprops="white">
            2x
          </CustomedTypography>
          <CustomedTypography variant="h6" colorprops="white">
            3x
          </CustomedTypography>
          <CustomedTypography variant="h6" colorprops="white">
            4x
          </CustomedTypography>
          <CustomedTypography variant="h6" colorprops="white">
            5x
          </CustomedTypography>
        </div>
      </SpeedWrapper>
    </Box>
  );
};

export default Speed;
