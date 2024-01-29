import { Box, Card, CardMedia, Stack } from "@mui/material";
import {
  IconButtonWithChart,
  IconButtonWithHeart,
} from "../../ui/Buttons/iconButton/IconButton";

const rating = [1,1,1,1,0]
const bat = [1,1,0,0,0]
const display = [...rating]


const SliderCard = () => {
  return (
    <Card
      className="c-card"
      sx={{
        maxWidth: 634,
        p: "20px",
        width: "100%",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <div>
          <p>Портативные колонки </p>
          <h4>Apple iPhone 13 Pro Max 256 ГБ серый</h4>
        </div>
        <Stack direction={"row"} spacing={"12px"}>
          <IconButtonWithHeart />
          <IconButtonWithChart />
        </Stack>
      </Stack>
      <Stack spacing={"20px"} direction={"row"}>
        <CardMedia
          sx={{
            width: "124px",
          }}
          component="img"
          src="https://ostore.kg/upload/resize_cache/iblock/fc2/500_500_1/fc2847340b633c93905ed88675cea084.png"
        />
        <Box>
          <p>Дизайн</p>
          <Stack direction={"row"} spacing={"2px"}>
            {rating.map(el => {
              return (
                <Box
                  component={"span"}
                  sx={{
                    height: "4px",
                    width: "88px",
                    bgcolor: el ? "red" : "black",
                    borderRadius: "2px",
                  }}
                />
              );
            })}
          </Stack>
          <p>Батарея</p>
          <p>Дисплей</p>
          <p>Камера</p>
          <Stack direction={"row"} spacing={"2px"}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <Box
                  component={"span"}
                  sx={{
                    height: "4px",
                    width: "88px",
                    bgcolor: "red",
                    borderRadius: "2px",
                  }}
                />
              );
            })}
          </Stack>
          <p>Ответ</p>
          <Stack direction={"row"} spacing={"2px"}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <Box
                  component={"span"}
                  sx={{
                    height: "4px",
                    width: "88px",
                    bgcolor: "red",
                    borderRadius: "2px",
                  }}
                />
              );
            })}
          </Stack>
          <p>Портативность</p>
        </Box>
      </Stack>
    </Card>
  );
};

export default SliderCard;
