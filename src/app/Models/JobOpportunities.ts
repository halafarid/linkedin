import { JobTypes } from './JobTypes';

export interface JobOpportunities 
{
    id ? : number , 
    title ? :string[],
    jobLocation ?: string[],
    jobTypes ? :JobTypes[]


}