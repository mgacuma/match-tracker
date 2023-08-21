import { Box, Container, Heading, IconButton, Text } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import { SkeletonGrid } from './TournamentsGrid/SkeletonGrid/SkeletonGrid';
import { DevGrid } from './devGrid';
import { getTournamentsByRole } from './TournamentsGrid/utils/getTournamentsByRole';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getTournamentPageInfo } from './TournamentsGrid/utils/getTournamentPageInfo';

export function TournamentCarousel(props: { coordinates: string, role: string }){

    const [pages, setPages] = useState(0);

    const { loading, data, heading } = getTournamentsByRole(props.role, {page: 1, perPage: 9, coordinates: props.coordinates});

    const slider = useRef(null);

    useEffect(() => {
        if (data) {
          setPages(data.tournaments?.pageInfo?.totalPages);
        }
        console.log(data)
      }, [data]);

    const settings = {
        customPaging: CustomPage,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
    };
    
    function CustomPage(index: number){
        return(
            <Box boxSize='20px' display='flex' justifyContent='center' textAlign='center' alignItems='center'>
                <Text _hover={{color: 'black'}} p={0} lineHeight='16px' fontSize={'16px'} color='gray.500'>{index + 1}</Text>
            </Box>
        )
    }

    return(
        <Container background='white' maxW='container.xl' mx={{sm: '20px', lg: '42px', xl: 'auto'}} borderRadius='20px' p='30px' pb='48px'>
            { loading && <SkeletonGrid />}
            { data && 
                <>
                    <Heading size='xl' color='black'>{heading}</Heading>
                    <Box style={{ position: "relative", marginTop: "20px" }} >
                        <Slider ref={slider} {...settings}  >
                            { data && Array(pages).fill(0).map((e,i) => <DevGrid {...props} perPage={9} page={i + 1} />) }
                        </Slider>
                        { data.tournaments?.pageInfo?.totalPages > 1 && 
                            <Box top='50%' transform='translateY(-50%)' pointerEvents='none' sx={{position: 'absolute', width: '100%'}}>
                                <IconButton zIndex={99} pointerEvents='all' borderRadius='100%' icon={<FiChevronLeft color='black'/>} onClick={() => slider?.current?.slickPrev()} aria-label='' />
                                <IconButton zIndex={99} pointerEvents='all' borderRadius='100%'  float='right' icon={<FiChevronRight color='black' />} onClick={() => slider?.current?.slickNext()} aria-label='' />
                            </Box> 
                        }
                    </Box>
                </>
            }
        </Container>
    )
}