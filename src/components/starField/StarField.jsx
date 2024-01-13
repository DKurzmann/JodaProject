import {useWindowSize} from 'react-use';

    export default function StarField() {
    const { width, height } = useWindowSize();
    
    return (

          <canvas id="myCanvas" width="200" height="100" style={{border:"1px",backgroundColor: "lightblue"}}>
           </canvas>

  );
}