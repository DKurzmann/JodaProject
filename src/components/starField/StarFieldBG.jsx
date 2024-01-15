import {useWindowSize} from 'react-use';
import { StarField } from './StarField.tsx'

    export default function StarFieldBG() {
        const { width, height } = useWindowSize();
    return (
          <StarField width={width} height={height} />
  );
}