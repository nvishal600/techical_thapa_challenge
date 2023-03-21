import React from 'react';
import TopNetFlix from './Components/TopNetFlix';
import CurrentDateTime from './Components/CurrentDateTime';
import ImageGallery from './Components/ImageGallery';
import Greeting, {Myname} from './Components/Greeting';
import Calculator from './Components/Calculator';
import TopNetFlixShow from './Components/TopNetFlixShow';
import SlotMachineGame from './Components/SlotMachineGame';
import IncrementDecrement from './Components/IncrementDecrement';
import TimerWithNPM from './Components/TimerWithNPM'

function App() {
  const f_name = "Vishal";
  const l_name = "Bhardwaj";
  const imagesObj = [{img:"https://picsum.photos/286/180"}, {img:"https://picsum.photos/id/237/286/180"}, {img:"https://picsum.photos/seed/picsum/286/180"}, {img: "https://picsum.photos/286/180?grayscale"}, {img: 'https://picsum.photos/286/180/?blur'}, {img: 'https://picsum.photos/id/870/286/180?grayscale&blur=2'}];  //array in object is called as map
 
    return(
      <>
        {/* <TopNetFlix f_name={f_name} l_name={l_name}></TopNetFlix> */}
        {/* <CurrentDateTime  f_name={f_name} l_name={l_name} ></CurrentDateTime> */}
        {/* <Myname></Myname> */}
        {/* <IncrementDecrement /> */}
        {/* <ImageGallery imagesObj={imagesObj} f_name={f_name} l_name={l_name}></ImageGallery> */}
        {/* <Greeting></Greeting> */}
        {/* <Calculator></Calculator> */}
        {/* <TopNetFlixShow></TopNetFlixShow> */}
        {/* <SlotMachineGame></SlotMachineGame> */}
        <TimerWithNPM />
      </>
    );
}

export default App;
