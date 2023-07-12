import './header.css'
import img from './img5.jpg'
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
       <span className="headerTitlesm">React</span>
       <span className='headerTitlelg'>Blog</span>
      </div>
      <img className='headerImg' src={img} alt="bg" />
    </div>
  )
}
