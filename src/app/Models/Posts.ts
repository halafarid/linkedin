import { UserComment } from "./UserComment";


export interface Posts
{
    id ?:number,
    // userId?:number,
    body ? :string,
    likes?:number,
    ImageUrls?:string[],
    comments?:UserComment[]



     
}