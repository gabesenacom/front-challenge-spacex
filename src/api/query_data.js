const DEFAULT_IMAGE = 'https://i.imgur.com/6Cv9SoC.jpg'
const QUERY_API_URL = 'https://api.spacex.land/graphql/'
const LAUNCH_FIELDS = `
    id
    mission_name
    launch_date_local
    links {
      article_link
      video_link
      flickr_images
    }
    details
  `

async function fetchData (query) {
  let data = await fetch(QUERY_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query
    })
  })

  const json = await data.json()
  return json.data
}

async function getLaunches (limit) {
  if (limit <= 0) return []

  const query = `
  query {
    launchesPast(limit: ${limit}) {
      ${LAUNCH_FIELDS}
    }
  }
  `
  try {
    const launches = await fetchData(query)
    return translateLaunchesObject(launches.launchesPast)
  } catch (err) {
    return []
  }
}

async function getLaunch (id) {
  if (!id) return {}

  const query = `
    query {
      launch(id: ${id}) {
        ${LAUNCH_FIELDS}
    }
  }
  `
  try {
    const launch = await fetchData(query)
    return translateLaunchObject(launch.launch)
  } catch (err) {
    return {}
  }
}

function translateLaunchObject (launch) {
  let image = DEFAULT_IMAGE
  const ref_link = launch.links.article_link || launch.links.video_link
  const images = launch.links.flickr_images.filter(img => img)
  if (images.length > 0) {
    image = images.sort(() => 0.5 - Math.random())[0]
  }

  return {
    details: launch.details || 'no details yet',
    name: launch.mission_name,
    image,
    ref_link,
    date: new Date(launch.launch_date_local).toDateString(),
    id: launch.id
  }
}

function translateLaunchesObject (launches) {
  return launches.map(launch => translateLaunchObject(launch))
}

export { getLaunches, getLaunch }
