import { FC } from 'react';
import preloader from './Preloader.svg';

let Preloader: FC = () => {
  return (
    <div>
      <img src={preloader} alt="svg" />
    </div>
  );
};

export default Preloader;
