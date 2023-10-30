import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { Text } from '@chakra-ui/react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    size:"4xl"

}
const Home = ()=>{
    return(
        <Box>

            <MyCarousel />
            <Container maxW={"container.lg"} minH={"100vh"} p={"16"}>
                <Heading
                py={"2"}
                borderBottom={"2px solid"}
                w={"fit-content"}
                m={"auto"}
                >
                    Services
                </Heading>

                <Stack h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column","row"]}
                >

                    <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>

                    <Text p={["4","16"]} letterSpacing={"widest"} lineHeight={"170%"}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Unde placeat nobis voluptatem possimus laborum similique et
                        facere optio. Molestias amet ab eligendi necessitatibus
                        recusandae, culpa eum nam in dignissimos quasi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Unde placeat nobis voluptatem possimus laborum similique et
                        facere optio. Molestias amet ab eligendi necessitatibus
                        recusandae, culpa eum nam in dignissimos quasi!
                    </Text>

                </Stack>

            </Container>
        </Box>
    );
};

const MyCarousel = ()=>{
    return(
        <Carousel
        autoPlay
        infiniteLoop
        interval={"1000"}
        showStatus={false}
        showThumbs={false}
        showArrows = {false}
        
        >

            <Box w={"full"} h={"100vh"} >

            <Image src={img1} />

            <Heading
            bgColor={"blackAlpha.600"}
            color={"white"}
            {...headingOptions}
            >
                Watch the Future
            </Heading>

            </Box>

            <Box w={"full"} h={"100vh"} >

                <Image src={img2} />

                <Heading
                bgColor={"whiteAlpha.400"}
                color={"black"}
                {...headingOptions}
                >
                    Future is Gaming
                </Heading>

            </Box>

            <Box w={"full"} h={"100vh"} >

    <Image src={img3} />

    <Heading
    bgColor={"whiteAlpha.400"}
    color={"black"}
    {...headingOptions}
    >
       Gaming on Console
    </Heading>

    </Box>

    <Box w={"full"} h={"100vh"} >

    <Image src={img4} />

    <Heading
    bgColor={"whiteAlpha.400"}
    color={"black"}
    {...headingOptions}
    >
        Night Life is Cool
    </Heading>

    </Box>


        </Carousel>
    );
}

export default Home;