import '@/app/globals.css'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Topic({ name, id }: { name: string; id: string }) {
  return (
    <li className="nav__li">
      <Link
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        offset={-200}
        duration={800}
      >
        {name}
      </Link>
    </li>
  )
}
