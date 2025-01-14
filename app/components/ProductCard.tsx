import {Product} from '@prisma/client'
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps{
    product: Product;
}
export default function ProductCard({product}:ProductCardProps){
return(
<Link 
href={"/products/"+ product.id}
className="card w-full bg-base-100 hover:shadow-xl transition"
>
   { <figure>
        <Image 
        src={product.imageUrl}
        alt={product.name}
        width={800}
        height={400}
        className='h-48 object-cover'
        />
    </figure> }
    <div className='card-body'>
        <h2 className='card-title'>
            {product.name}
        </h2>
        <p>{product.description}</p>
        <p>{product.price} €</p>
    </div>
    </Link>
)
}