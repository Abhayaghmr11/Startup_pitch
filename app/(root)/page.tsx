import SearchForm from "@/components/SearchForm";
import StartupCard,{ StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";


 
export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {

  const query = (await searchParams).query;
  
  
  const posts = await client.fetch(STARTUP_QUERY);
  // console.log(posts);


  // const posts=[
  //   {
  //     _createdAt: "2021-09-01",
  //     views: 10,
  //     author: {authorid: "1", name: "John Doe"},
  //     _id: 1,
  //     description: "This is a description",
  //     image: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/vDU3EmbORlGMkoW2XUXr",
  //     category: "Technology",
  //     title: "Startup 1"
  //   }
  // ]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch your startup <br/>Connect with Entrepreneurs </h1>

      <p className="sub-hreading !max-w-3xl">Submit Ideas, Vote on pitches and Get Noticed in Virtual Competitions</p>
      <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for "${query}"` : "All Startups"}
      </p>

      <ul className="mt-7 card_grid">
          {posts?.length>0? (
            posts.map((post:StartupTypeCard)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):
            <p>No Startup found</p>
          }
      </ul>

    </section>
    </>
  );
}
