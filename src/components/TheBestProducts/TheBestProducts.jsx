import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TheBestCard from "./TheBestCard/TheBestCard";
import Button from "../ui/Buttons/Button/Button";
//icons
import CloseIcon from '@mui/icons-material/Close';
import Carousel from "../Carousel/Carousel";


const url = "https://65268fd1917d673fd76c8856.mockapi.io/api/category";

// const buttons = [
//   "Дизайн",
//   "Портативность",
//   "Камера",
//   "Ответ",
//   "Дисплей",
//   "Батарея",
// ];
const buttons = [
    {
        name: 'Дизайн',
        choice: false
    },
    {
        name: 'Портативность',
        choice: false
    },
    {
        name: 'Камера',
        choice: false
    },
    {
        name: 'Ответ',
        choice: false
    },
    {
        name: 'Дисплей',
        choice: false
    },
    {
        name: 'Батарея',
        choice: false
    }
]

const TheBestProducts = () => {
  const [data, setData] = useState([]);

  const fetchCategory = async () => {
    const { data } = await axios.get(url);
    console.log(data, "---------");
    setData(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (data.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="the__best">
      <div className="the__best_bg"></div>

      <div className="container">
        <h2 className="section__title">Лучший выбор</h2>
        <Box
          className="best__products"
          sx={{ 
            display: "flex", 
            gap: "18px", 
            pb: "32px" }}
        >
          {data.map((el) => (
            <TheBestCard key={el.id} imgUrl={el.categoryImage} name={el.name} />
          ))}
        </Box>
        <Box 
        className="container2"
          sx={{
            display: "flex",
            gap: "16px",
            mb: "20px "
          }}
        >
          {buttons.map((btn) => (
            <Button 
            key={btn.name}
            bgColor={"#FDFDFD"}
            textColor={btn.choice ? "#FF4D4D" : "#7e8794"}
            icon={btn.choice && <CloseIcon />}
            >{btn.name}</Button>
          ))}
        </Box>
        <Carousel/>
      </div>
    </section>
  );
};

export default TheBestProducts;
