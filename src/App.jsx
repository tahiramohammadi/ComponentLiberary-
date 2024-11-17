import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import Testimonial from './components/Testimonial'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div className='flex-container'>
          <Badge
            edges={"pill"}
            firstColor="#208000"
            secondColor="#d9ffcc"
          >
            Frontend Developer
          </Badge>

          <Badge
            edges={'pill'}
            firstColor="#981C18"
            secondColor="#FEE2E1"
          >
           Frontend Developer
          </Badge>

          <Badge
            edges={'square'}
            firstColor="#002db3"
            secondColor="#b3c6ff"
          >
             Frontend Developer
          </Badge>

          <Badge
            edges={'square'}
            firstColor="#995c00"
            secondColor="#ffe0b3"
          >
           Frontend Developer
          </Badge>
        </div>
        <Banner
          type="error"
          title="Error ocurred!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#981C18"
          secondColor="#FEE2E1"
        />

        <Banner
          title="Successfully saved!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#208000"
          secondColor="#d9ffcc"
        />

        <Banner
          type="info"
          title="Updates available"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#002db3"
          secondColor="#cce0ff"
        />

        <Banner
          type="warning"
          title="Poor connection!"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas veniam expedita quia ipsam soluta."
          firstColor="#cca300"
          secondColor="#fff5cc"
        />
           <Card
          title="Rapid development"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptate ducimus inventore velit suscipit."
          icon={faRocket}
          firstColor="pink"
          secondColor="#1a1a19"
          textColor="#fdfdfd"
        />

        <Card
          title="Easy deployment"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptate ducimus inventore velit suscipit."
          icon={ faCloud}
          firstColor="pink"
          
        />

<Testimonial
          opnion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem voluptate quisquam voluptates. Quia, nisi."
          name="Tahira"
          job="Frontend Dev"
          img={"data:image/jpeg;base64,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"}
          backColor="#2545b8"
          textColor="#fdfdfd"
        />

        <Testimonial
          opnion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem voluptate quisquam voluptates. Quia, nisi."
          name="Tahira"
          job="Frontend Dev"
          img={"data:image/jpeg;base64,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"}
          backColor="white"
          textColor="black"
        />
           </main>
    </>

  )
}

export default App
