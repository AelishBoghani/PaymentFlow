import { useState } from 'react';
import './App.css';
import EmiOptionsCard from './components/EmiOptionsCard';
import LenderCard from './components/LenderCard';
import Modal from './components/Modal';



function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      {/* <LenderCard/> */}
      <EmiOptionsCard/>
      
      {/* <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
     
    </div>
  );
}

export default App;
