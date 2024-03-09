import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { Control, useForm } from 'react-hook-form';
import { Button } from './ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type CustomFormFieldProps = {
    name: string;
    control: Control<any>
};

export const CustomFormField = ({name, control}: CustomFormFieldProps) => {
    return  <FormField
                control={control}
                name={name}
                render={({field}) => (
                    <FormItem>
                        <FormLabel className='capitalize'>{name}</FormLabel>
                        <FormControl>
                            <Input className='block' {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
};

type CustomFormSelectProps = {
    name: string;
    control: Control<any>;
    items: string[];
    labelText?: string;
}

export const CustomFormSelect = ({name, control, items, labelText}:CustomFormSelectProps) => {
    return (
        <FormField control={control} name={name} render={({field})=>{
            return <FormItem>
                <FormLabel className='capitalize'>{labelText || name}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue /> 
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {items.map((item)=>{
                                return (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                )
                            })}
                        </SelectContent>
                    </Select>  
                    <FormMessage />
            </FormItem>
        }} />
    );
};