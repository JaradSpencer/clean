



import Header from './components/Header'
import Footer from './components/Footer'
import Left from './components/LeftNav'
import Right from './components/Speech'


function App() {



  return (
    <body>
      <>
        <Header />
      </>

      <main className="main-content">
        <Left />

       


        <Right/>
      </main>
      <Footer />
    </body>

  );
}

export default App;
