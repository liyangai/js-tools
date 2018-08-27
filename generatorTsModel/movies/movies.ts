import { movies_rating } from './movies_rating';
import { movies_cast } from './movies_cast';
import { movies_director } from './movies_director';
import { movies_images } from './movies_images';
export class movies{
    rating:movies_rating
    genres:string[]
    title:string
    casts:movies_cast[]
    collect_count:number
    original_title:string
    subtype:string
    directors:movies_director[]
    year:string
    images:movies_images
    alt:string
    id:string
}