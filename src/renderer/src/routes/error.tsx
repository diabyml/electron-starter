import { Link, useRouteError } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4 text-red-400 text-center md:text-6xl">Oops!</h1>
      <p className="text-center md:text-2xl text-red-400 mb-4 md:mb-8 ">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center md:text-2xl text-red-400 ">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="cursor-pointer hover:underline text-blue-400 text-sm hover:text-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  )
}
