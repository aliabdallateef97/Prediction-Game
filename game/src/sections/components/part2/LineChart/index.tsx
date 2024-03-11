import { Box, styled } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useSelector } from "react-redux";
import * as selectors from "@/sections/redux/selectors";

const ChartContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "5px",
  border: `1px solid ${theme.palette.secondary.dark}`,
}));

const Chart = () => {
  const start = useSelector(selectors.start);
  return (
    <ChartContainer>
      <LineChart
        xAxis={[{ data: start ? [1, 3, 5, 7, 9, 10] : [] }]}
        series={[
          {
            data: start ? [0, 0, 1, 3, 7, 10] : [],
          },
        ]}
        // width={"100%"}
        height={300}
        
      />
    </ChartContainer>
  );
};

export default Chart;
