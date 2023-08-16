import mapPosts from "./mapPost"
import { mapSettings } from "./mapSettings"

export const mapResponse = (response = []) => {
  const { setting, posts } = response[0]
  return {
    setting: mapSettings(setting),
    posts: mapPosts(posts)
  }
}
