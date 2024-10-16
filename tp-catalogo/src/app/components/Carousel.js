import Carousel from 'react-bootstrap/Carousel';
import RandomImages from './RandomImages';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" style={{padding: '62px'}}>
      <Carousel.Item>
        <RandomImages/>
      </Carousel.Item>
      <Carousel.Item>
        <RandomImages/>
      </Carousel.Item>
      <Carousel.Item>
        <RandomImages/>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;