import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CarouselContainer = styled.div`
  margin: 2rem 0;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const BrandItem = styled.div`
  text-align: center;
  padding: 1rem;
`;

const BrandLogo = styled.img`
  width: 100px; 
  height: 100px; 
  object-fit: contain; 
  margin: 0 auto 0.5rem auto;
`;



const BrandName = styled.div`
  font-weight: bold;
  color: #333;
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const brands = [
    { name: "Ferrari", logo: "https://th.bing.com/th/id/OIP.3jYY_RY70kv4zsiNQBMgLgAAAA?rs=1&pid=ImgDetMain" },
    { name: "Lamborghini", logo: "https://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png" },
    { name: "Porsche", logo: "https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" },
    { name: "Maserati", logo: "https://logos-world.net/wp-content/uploads/2021/04/Maserati-Logo.png" },
    { name: "Bugatti", logo: "https://th.bing.com/th/id/OIP.VlDOu9MluTDTyvQIffqVuAAAAA?rs=1&pid=ImgDetMain" },
    { name: "McLaren", logo: "https://static.vecteezy.com/system/resources/previews/020/500/584/original/mclaren-brand-symbol-logo-black-design-british-car-automobile-illustration-with-orange-background-free-vector.jpg" },
    { name: "Aston Martin", logo: "https://seeklogo.com/images/A/Aston_Martin-logo-E850023998-seeklogo.com.png" },
    { name: "Bentley", logo: "https://pluspng.com/img-png/bentley-logo-png-img-bentley-logo-in-svg-vector-or-png-file-format-logo-wine-3000x2000.png" },
    { name: "Rolls Royce", logo: "https://brandlogos.net/wp-content/uploads/2021/12/rolls-royce_cars-brandlogo.net_.png" },
    { name: "Koenigsegg", logo: "https://th.bing.com/th/id/OIP.axQBvri4OzneWn7Xb9yytwHaEK?pid=ImgDet&w=474&h=266&rs=1" },
];

const CarBrandCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      swipe: true,
      touchMove: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <CarouselContainer>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <BrandItem key={index}>
              <BrandLogo src={brand.logo} alt={brand.name} />
              <BrandName>{brand.name}</BrandName>
            </BrandItem>
          ))}
        </Slider>
      </CarouselContainer>
    );
  };
  
  export default CarBrandCarousel;