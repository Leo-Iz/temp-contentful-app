import { createClient } from "contentful"
import { useEffect } from "react"
import { useState } from "react"
const client = createClient({
  space: "wc11y5c89lwo",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
})

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" })
      // console.log("Response:", response.items)
      setLoading(false)
      const projects = response.items.map((item) => {
        const { title, url, img } = item?.fields
        const image = img?.fields?.file?.url
        const id = item.sys.id
        return { title, url, image, id }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { loading, projects }
}
export default useFetchProjects
