import Ping from '@/components/Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEW_QUERY } from '@/sanity/lib/queries'

const View = async ({id}:{id:string}) => {
  const {views:totalViews} = await client
    .withConfig({useCdn:false})
    .fetch(STARTUP_VIEW_QUERY,{id})
  console.log(`Total views: ${totalViews} ` )
  return (
    <div className="view-container ">
        <div className="absolute -top-2 -right-2">
            <Ping/>
        </div>

        <p className='view-text'>
            <span className='font-black'>{totalViews} views</span>
        </p>
    </div>
  )
}

export default View