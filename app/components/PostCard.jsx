import Image from "next/image";
import Link from "next/link";

export default async function PostCard({ post }) {
   return (
      <div className="grid-item">
         <h1>{post.title.rendered}</h1>
         <Image src={post.acf.image} alt={post.slug} width="100" height="100" />
      </div>
   );
}
