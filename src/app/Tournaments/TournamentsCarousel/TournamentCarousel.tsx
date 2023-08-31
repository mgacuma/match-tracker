/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Container, Heading, IconButton, Text } from '@chakra-ui/react';

import Slider, { LazyLoadTypes } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/styles.css';
import { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { TournamentsGrid } from './TournamentsGrid/TournamentsGrid';
import { getTournamentPageInfo } from './utils/getTournamentPageInfo';
import { SkeletonGrid } from './TournamentsGrid/SkeletonGrid/SkeletonGrid';

export function TournamentsCarousel(props: { coordinates: string, role: string }){
    
	const SLIDER_CONFIG = {
		customPaging: CustomPage,
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		focusOnSelect: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand' as LazyLoadTypes,
	};

	const [pages, setPages] = useState(0);
	const slider = useRef<Slider>(null);

	const { loading, data, heading } = getTournamentPageInfo(props.role, {page: 1, perPage: 9, coordinates: props.coordinates});

	useEffect(() => {
		if (data) {
			setPages(data.tournaments!.pageInfo!.totalPages!);
		}
	}, [data]);

	function CustomPage(index: number){
		return(
			<Box boxSize='20px' display='flex' justifyContent='center' textAlign='center' alignItems='center'>
				<Text _hover={{color: 'black'}} p={0} lineHeight='16px' fontSize={'16px'} color='gray.500'>{index + 1}</Text>
			</Box>
		);
	}

	return(
		<Container background='white' maxW='container.xl' mx={{sm: '20px', lg: '42px', xl: 'auto'}} borderRadius='20px' p='32px'>
			{ loading && <SkeletonGrid />}
			{ data && 
                <>
                	<Heading size='xl' color='black'>{heading}</Heading>
                	<Box style={{ position: 'relative', marginTop: '20px' }} >
                		<Slider ref={slider} {...SLIDER_CONFIG}  >
                			{ data && Array(pages).fill(0).map((e,i) => <TournamentsGrid key={i+1} {...props} perPage={9} page={i + 1} />) }
                		</Slider>
                		{ data.tournaments!.pageInfo!.totalPages! > 1 && 
                        <Box top='50%' transform='translateY(-50%)' pointerEvents='none' sx={{position: 'absolute', width: '100%'}}>
                        	<IconButton zIndex={99} pointerEvents='all' borderRadius='100%' icon={<FiChevronLeft color='black'/>} onClick={() => slider?.current?.slickPrev()} aria-label='' />
                        	<IconButton zIndex={99} pointerEvents='all' borderRadius='100%'  float='right' icon={<FiChevronRight color='black' />} onClick={() => slider?.current?.slickNext()} aria-label='' />
                        </Box> 
                		}
                	</Box>
                </>
			}
		</Container>
	);
}