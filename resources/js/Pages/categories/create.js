import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "react-hook-form";

export default function CategoryCreate(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => Inertia.post("/categories/create", data);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create category
                </h2>
            }
        >
            <Head title="Create" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="w-full">
                                    <label className="block">
                                        Enter category name
                                    </label>
                                    <input
                                        defaultValue="test"
                                        {...register("name")}
                                        className="bg-slate-50 block p-2"
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="bg-blue-500 py-2 px-4 mt-4 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
