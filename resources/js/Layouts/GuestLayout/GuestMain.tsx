import React from 'react'
import { PropsWithChildren } from 'react';

function GuestMain({children}: PropsWithChildren) {
  return (
      <main className="flex items-center w-full flex-col justify-center min-h-full">
          <div className="w-full flex flex-col justify-center h-full  items-center  mt-10 lg:mt-32">
              {children}
          </div>
      </main>
  );
}

export default GuestMain
