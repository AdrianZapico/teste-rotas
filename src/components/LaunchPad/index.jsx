import Pad from '../Pad'
import data from '../../database/dataPad.json'
import { LaunchPadStyled } from './Styles';

export default function Launchpad() {
  return (
    <>
        <LaunchPadStyled>
            {
              data.map((element,index) => <Pad data={element} src={index} key={index} />)
            }
        </LaunchPadStyled>
    </>
  );
}

