import {useWindowSize} from 'react-use';
import { useRef } from 'react';
import { createStarsState} from '../StarState.ts';
import { useStarField } from '../useStarField.ts'


    export default function StarFieldCanvas() {
    const { width, height } = useWindowSize();
    const count = 3000;
    const speed = 0.5;
    const starRatio = 356;
    const starSize = 1.4;
    const starStyle = '#fff';
    const starShape = 'round';
    const clear = true;
    const bgStyle = '#000';
    const noBackground = false;
    const canvasRef = useRef(null);
    const fps = 60;
    const stateReference = useRef(createStarsState({
      count,
      height,
      width,
    }))
  
    useStarField(canvasRef, {
      width,
      height,
      starStyle,
      bgStyle,
      count,
      fps,
      speed,
      starRatio,
      starShape,
      starSize,
      clear,
      noBackground,
    }, stateReference)

    return (

          <canvas id="myCanvas"  ref={canvasRef} style={{border:"1px",backgroundColor: "lightblue", position: "absolute", height: "100%", width: "100%"}}>
           </canvas>

  );
}