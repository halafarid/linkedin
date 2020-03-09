import { UserComment } from './Comment';

export interface Posts
{
    id ?:number,
    userId?:number,
    bodr ? :string,
    likes?:number,
    ImageUrls?:string[],
    comments?:UserComment[]



     
}