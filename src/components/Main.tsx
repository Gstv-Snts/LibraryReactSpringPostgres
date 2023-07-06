import React from 'react';

function Main(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <main className="w-full border-second border-24 table h-[calc(100%-108px)]">
      {children}
    </main>
  );
}

export default Main;