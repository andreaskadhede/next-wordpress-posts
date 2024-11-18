import Image from "next/image";
export default async function PostDetail() {
   return (
      <div className="page">
         <h1>{post.title.rendered}</h1>
         <Image src={post.acf.image} alt={post.slug} width="100" height="100" />
      </div>
   );
}
