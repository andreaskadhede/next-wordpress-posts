import Link from "next/link";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

export default async function posts() {
   const response = await fetch(
      "https://headless.cederdorff.dk/wp-json/wp/v2/posts?acf_format=standard"
   );
   const posts = await response.json();
   console.log(posts);

   return (
      <div className="page">
         <main className="main">
            <Navbar />

            <header>
               <h1>Posts</h1>
            </header>

            <div className="grid">
               {posts.map((post) => {
                  return (
                     <>
                        <PostCard key={post.id} post={post}></PostCard>
                     </>
                  );
               })}
            </div>
         </main>
      </div>
   );
}
