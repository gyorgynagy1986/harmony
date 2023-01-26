import NewReviewModule from '../layouts/NewReviewModule'
import Reviews from '../layouts/Reviews'
import useMediaQuery from '@mui/material/useMediaQuery';


// {isMobile ? <Reviews  /> : <NewReviewModule />}


const ReviewPrefix = () => {
  
  const matches = useMediaQuery('(min-width:800px)');

  return (
    <div>
        <span>{!matches ? <Reviews  /> : <NewReviewModule />}</span>
    </div>
  )
}

export default ReviewPrefix