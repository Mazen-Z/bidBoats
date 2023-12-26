import '@styles/globals.css';

export const metadata = {
    title: "BidBoats",
    description: "BidBoats is a marketplace for buying and selling boats."
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
        
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            {children}
          </main>
        
      </body>
    </html>
  );

export default RootLayout