import { UserComment } from "./UserComment";
import { User } from 'src/app/Models/User';


export interface Posts
{
    id ?: number;
    userId?: number;
    body ? :string,
    likes?:number;
    replies?: number;
    imageUrls?:string[],
    comments?:UserComment[],
     
}