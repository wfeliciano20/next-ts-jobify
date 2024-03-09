import * as z from 'zod';

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};

export enum JobStatus {
  Pending = 'pending',
  Interview = 'interview',
  Declined = 'declined',
}

export interface JobStatusI{
  status: 'pending' | 'interview' | 'declined'
};

export enum JobMode {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Internship = 'internship',
}

export interface JobModeI{
  mode: 'full-time' | 'part-time' | 'internship'
}
// Enums in TypeScript are a special type that allows you to define a set of named constants. They can be numeric or string-based.

export const createAndEditJobSchema = z.object({
  position:z.string().min(2,{
    message:'position must be at least 2 characters'
  }),
  company:z.string().min(2,{
    message:'company must be at least be 2 characters',
  }),
  location:z.string().min(2,{
    message:'loacation must be at least 2 characters'
  }),
  status:z.union([z.literal("pending"),z.literal("interview"),z.literal("declined")]),
  mode: z.union([z.literal("full-time"),z.literal("part-time"),z.literal('internship')])
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;