'use client'


import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Form } from './ui/form';
import {
    createAndEditJobSchema,
    CreateAndEditJobType
} from '@/utils/types';
import { CustomFormField, CustomFormSelect } from './FormComponents';




const CreateJobForm = () =>{
    // 1. define your form
    const form = useForm<CreateAndEditJobType>({
        resolver: zodResolver(createAndEditJobSchema),
        defaultValues: {
            position: '',
            company: '',
            location: '',
            status: 'pending',
            mode:'full-time'
        }
    })

    const onSubmit = (values: CreateAndEditJobType) => {
        console.log(values);
    };

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='bg-muted p-8 rounded'>
                <h2 className='capitalized font-semibold text-4xl mb-6'>Add Job</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
                    {/* Position */}
                    <CustomFormField name='position' control={form.control} />
                    {/* Company */}
                    <CustomFormField name='company' control={form.control} />
                    {/* location */}
                    <CustomFormField name='location' control={form.control} />
                    {/* Status */}
                    <CustomFormSelect 
                        name='status' 
                        control={form.control} 
                        labelText='job status'
                        items={['pending','interview','declined']}
                    />
                    {/* mode */}
                        <CustomFormSelect 
                        name='mode' 
                        control={form.control} 
                        labelText='job mode'
                        items={['full-time','part-time','internship']}
                    />
                    <Button type='submit' className='self-end capitalize'>
                        create job
                    </Button>
                </div>
            </form>
        </Form>

    );
}

export default CreateJobForm;

