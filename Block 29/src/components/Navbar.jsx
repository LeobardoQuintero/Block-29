import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='links'>
      <Link className='move' to={"/"}>Home</Link>
      <Link to={"/newplayerform"}>Create Player</Link>
    </div>
  )
}

export default Navbar