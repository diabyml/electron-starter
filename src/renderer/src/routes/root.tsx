import App from '../App'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Root() {
  return (
    <div>
      <h1>Root</h1>
      <div className="flex space-x-2">
        <Link
          to="/about"
          className="cursor-pointer hover:underline text-blue-400 text-sm hover:text-blue-600"
        >
          about
        </Link>
        <Link
          to="/oops"
          className="cursor-pointer hover:underline text-blue-400 text-sm hover:text-blue-600"
        >
          oops
        </Link>
        <Link
          to={'/test/1'}
          className="cursor-pointer hover:underline text-blue-400 text-sm hover:text-blue-600"
        >
          Test 1
        </Link>
      </div>
      <div className="flex space-x-2 items-center px-6">
        <Link to={'/'}>sidebar</Link>
        <Link to={'/contacts'}>contacts</Link>
        <Link to={'/archives'}>archives</Link>
      </div>
      <div className="p-4 border bg-gray-200">
        <Outlet />
      </div>
      <div>
        <App />
      </div>
    </div>
  )
}
