import { useEffect, useState } from 'react'
import { database } from './db'
import { posts } from '../../db/schema'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [postList, setPosts] = useState([] as any[])

  useEffect(() => {
    database.query.posts.findMany().then((result) => {
      setPosts(result)
    })
  }, [])

  return (
    <div>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault()

            const formData = new FormData(e.target as HTMLFormElement)
            const title = formData.get('title') as string
            if (title) {
              await database.insert(posts).values({
                id: Math.floor(Math.random() * 1000),
                title
              })

              // refetch
              const result = await database.query.posts.findMany()
              setPosts(result)
            }
          }}
        >
          <Input name="title" type="text" placeholder="title" />
          <Button>add</Button>
        </form>
      </div>
      {postList.map((post) => {
        return (
          <div key={post.id} className="border px-2 py-3 underline font-bold">
            {post.title}
          </div>
        )
      })}
    </div>
  )
}

export default App
