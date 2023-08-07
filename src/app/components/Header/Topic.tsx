import '@/app/globals.css'

export default function Topic({ text }: { text: string }) {
  return <li className="nav__li">{text}</li>
}
