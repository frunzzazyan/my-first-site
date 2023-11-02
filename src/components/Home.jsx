
import { obj } from '../DATA/home'
import './Home.css'
import Sliders from './Sliders/Sliders'

const Home = () => {
  return (
    
    <main>
      <Sliders/>
       <div className="items-info">
        <div className="text">
          <h1>lorem ipsum dolor sit amet</h1>
          
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aperiam autem necessitatibus minima enim nobis quisquam ducimus ex recusandae. Harum voluptatem quia nesciunt tempora vel dolor cumque. Labore illum in velit animi itaque et explicabo inventore quas, ratione saepe necessitatibus esse consectetur reiciendis? Voluptate, voluptatibus ipsam quia similique corrupti ab, sit provident reiciendis, repudiandae dolorem nesciunt quasi amet enim distinctio.</p>
        </div>
        <div className="img">
          <img src="./src/img/Pngtree_web_development_illustration_modern_4461019-removebg-preview-removebg-preview-removebg-preview-300x300.png" alt="" />
        </div>
       </div>

       <div className="div-2">
          {obj.map((elem,idx)=>{
            return <div key={elem.id} className="item-info">
                <h2>{elem.text}</h2>
                <p>{(elem.p.length <= 150? elem.p : 'str>150' )}</p>
            </div>
          })}
       </div>
    </main>
  )
}

export default Home