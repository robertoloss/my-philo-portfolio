import { dataset, apiVersion, projectId } from './env';
import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
})

export async function getCvEntry() {
  return client.fetch(
    groq`*[_type == "cv_entry"]{
      order,
      title,
      content,
    } | order(order asc)`,
  )
}

export async function getPapers() {
  return client.fetch(
    groq`*[_type == "paper"]{
      order,
      title,
      content,
      journal,
      year,
      issueAndPages,
      abstract,
      "cover":  cover -> image.asset -> url,
      draftAvailable,
      published,
      openAccess,
      link,
    } | order(order desc)`,
  )
}

export async function getHero() {
  return client.fetch(
    groq`*[_type == "picture" && name == "Hero"]{
       "image": image.asset -> url,
    }`,
  )
}

export async function getTitle() {
  return client.fetch(
    groq`*[_type == "page" && name == "Home"]{
      title,
      subtitle,
    }`,
  )
}

export async function getHome() {
  return client.fetch(
    groq`*[_type == "page" && name == "Home"]{
      presentation,
      bio,
      contact,
      highlightedPapers[]->{
        order,
        title,
        content,
        journal,
        year,
        issueAndPages,
        abstract,
        "cover":  cover -> image.asset -> url,
        draftAvailable,
        published,
        openAccess,
        link,
      },
      "myPicture": myPicture -> image.asset -> url,
    }`,
  )
}
