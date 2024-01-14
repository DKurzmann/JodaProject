import {useWindowSize} from 'react-use';

    export default function StarFieldCanvas() {
    const { width, height } = useWindowSize();
    
    return (

          <canvas id="myCanvas"  style={{border:"1px",backgroundColor: "lightblue", position: "absolute", height: "100%", width: "100%"}}>
           </canvas>

  );
}