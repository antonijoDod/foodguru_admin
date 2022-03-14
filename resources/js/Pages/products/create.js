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

export default function ProductsCreate(props) {
    const { categories } = props;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => Inertia.post("/products/create", data);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create product
                </h2>
            }
        >
            <Head title="Create" />

            <Box m={4} p="8" backgroundColor="white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <SimpleGrid columns={2} gap="8">
                        <FormControl>
                            <FormLabel htmlFor="name">Product name</FormLabel>
                            <Input {...register("name")} id="name" />
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="price">Product price</FormLabel>
                            <Input {...register("price")} id="price" />
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="short_description">
                                Product description
                            </FormLabel>
                            <Textarea
                                {...register("short_description")}
                                id="short_description"
                            />
                            <FormHelperText>
                                We'll never share your email.
                            </FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor="category_id">
                                Product category
                            </FormLabel>
                            <Select
                                {...register("category_id")}
                                className="bg-slate-50 block p-2"
                            >
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </SimpleGrid>

                    <input
                        type="submit"
                        className="bg-blue-500 py-2 px-4 mt-4 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                    />
                </form>
            </Box>
        </Authenticated>
    );
}
