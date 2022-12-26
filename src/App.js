
import './App.css';


function App() {
  return (
    <div className="App">
       <div className='container'>
          <h3>Noha Hotel.</h3>
        <div className="links">
          <a className='active' href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Get Started</a>

        </div>


       </div>

       <div className='container-for-hero'>
          <div className='hero'>

              <div className='disc'>
                  <h3>Our Price</h3>
                  <div className='tiny-info'>
                      <p>Monthly</p>

                     <p>Yearly</p> 
                     <p className='discount'>15% discount</p>                     


                  </div>

              </div>
            
           
          </div>
        

       </div>

       <div className='were-part'>

         <div className="were-real the-first-one">
             <h2>Basic</h2>
             <p className='price'>9K</p>
             <p className='price-name'>ETB</p>
          
           <div  className='were-btn'>
             <a href='#'>Get started</a>
           </div>
           <h3>Includes</h3>
          
          
           <div className='includes'>
        <p>Room: Single</p>
     <p>Stay for: 3 days</p>
     <p>Meal: 1</p>
        </div>
         </div>
         <div className="were-real the-second-one">
             <h2 style={{marginBottom:"80px" , marginTop:"10px" , fontSize:"40px"}}>Pro</h2>
              <div className='pricing'>
              <p className='price' style={{fontSize:"100px"}}>25K</p>
             <p className='price-name' style={{fontSize:"30px"}}>ETB</p>
          
              </div>
           <div  className='were-btn'>
             <a href='#'className='the-second'>Get started</a>
           </div>
           <h3>Includes</h3>
          
          
        <div className='includes'>
        <p>Room: Single</p>
     <p>Stay for: 3 days</p>
     <p>Meal: 1</p>
        </div>
         </div>
         <div className="were-real the-third-one">
             <h2>Basic</h2>
             <p className='price'>9K</p>
             <p className='price-name'>ETB</p>
          
           <div  className='were-btn'>
             <a href='#' className='the-second'>Get started</a>
           </div>
           <h3>Includes</h3>
          
          
           <div className='includes'>
        <p>Room: Single</p>
     <p>Stay for: 3 days</p>
     <p>Meal: 1</p>
        </div>
         </div>

       </div>
    </div>
  );
}

export default App;