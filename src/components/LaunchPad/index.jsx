import Pad from '../Pad'
import data from '../../database/dataPad.json'
import { LaunchPadStyled, GranBox, TopTitle } from './Styles';

export default function Launchpad() {
  return (
    <>
      <GranBox>

          <TopTitle>LaunchPad</TopTitle>
        <LaunchPadStyled>
          {
            data.map((element, index) => <Pad message={element.message} src={index} key={index} />)
          }
        </LaunchPadStyled>
      </GranBox>
    </>
  );
}

