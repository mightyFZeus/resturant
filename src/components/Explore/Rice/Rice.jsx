import "./Styles.css";
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import hot from './hot.jpg'
import test from './test.jpg'
import test2 from './test2.jpg'
import town from './town.jpg'
const slideImages = [
  hot,
  test,test2,
  town
];


export default function Rice() {
    const properties = {
        duration: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        indicators: true,
      };
  return (
    <div className="App">
       <Slide {...properties}>
          <div className="each-slide">
            <div >
             <img   className='img-test' alt='img-slides' src={slideImages[0]} />
            </div>
          </div>
          <div className="each-slide">
            <div >
              <img  className='img-test' alt='img-slides' src={slideImages[1]} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img className='img-test' alt='img-slides' src={slideImages[2]} />
            </div>
          </div>
          <div className="each-slide">
            <div >
              <img  className='img-test' alt='img-slides' src={slideImages[1]} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img className='img-test' alt='img-slides' src={slideImages[2]} />
            </div>
          </div>
          <div className="each-slide">
            <div >
             <img   className='img-test' alt='img-slides' src={slideImages[0]} />
            </div>
          </div>
        </Slide>
    </div>
  );
}
