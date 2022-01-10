import { LoaderFunction, useLoaderData } from "remix"
import invariant from "tiny-invariant"
import { getPost, Post } from "~/post"

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug")
  return getPost(params.slug)
}

export default function postSlug() {
  const post = useLoaderData<Post>()

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
