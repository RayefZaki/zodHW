import {z,TypeOf} from 'zod'

export const parkSchema = z.object({
    body:z.object({
        id:z.string({required_error:"Id is required !"})
        .min(2,"ID must be at least 2 numbers"),

        name: z.string({required_error:"Name is required!"})
        .min(2,"Name must be at least 2 characters"),

        type:z.enum(["rollercoster","thriller","water"],{
            required_error:"Type is required and must be one of this array [`rollercoster`, `thriller`, `water`]",
         }),

         tickets:z.number({required_error:"Tickets is required!"}),
         
         price:z.number({required_error:"Price is required!"}),
}),
})
export type parkType = TypeOf<typeof parkSchema>["body"];