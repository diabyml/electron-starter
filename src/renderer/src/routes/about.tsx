import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/" className="cursor-pointer hover:underline text-sm hover:text-blue-400">
        Home
      </Link>
    </div>
  )
}
