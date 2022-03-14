import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    SimpleGrid,
    Textarea,
    Select,
} from "@chakra-ui/react";

export default function AttributesCreate(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => Inertia.post("/attributes/create", data);

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Create attribute" />

            <Box m={4} p="8" backgroundColor="white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <FormLabel htmlFor="name">Product name</FormLabel>
                        <Input {...register("name")} id="name" />
                        <FormHelperText>
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>

                    <input
                        type="submit"
                        className="bg-blue-500 py-2 px-4 mt-4 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                    />
                </form>
            </Box>
        </Authenticated>
    );
}
