/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIsItFor from './components/WhoIsItFor';
import WheelOfLifeGame from './components/WheelOfLifeGame';
import CalBooking from './components/CalBooking';
import Contacts from './components/Contacts';

export default function App() {
  const [importedWheelData, setImportedWheelData] = useState<{ category: string; value: number }[] | undefined>(undefined);

  const handleApplyResults = (values: { category: string; value: number }[]) => {
    setImportedWheelData(values);
  };

  return (
    <div id="content-container" className="min-h-screen bg-femine-bg text-femine-text font-sans antialiased selection:bg-femine-coral/20">
      <Navbar />
      
      <main id="main-content">
        <Hero />
        
        <WhoIsItFor />
        
        <WheelOfLifeGame onApplyResults={handleApplyResults} />
        
        <CalBooking importedWheelData={importedWheelData} />
      </main>

      <Contacts />
    </div>
  );
}
