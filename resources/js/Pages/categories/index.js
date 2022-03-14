import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";

const Categories = (props) => {
    const { categories } = props;

    const handleDeleteCategory = (id) => {
        Inertia.delete(`/products/${id}`);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <Link className="underline" href="/categories/create">
                    Add new category
                </Link>
            }
        >
            <Head title="Categories" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {categories.map((category) => (
                                <ul key={category.id} className="py-2 border-b">
                                    <li className="py-4 flex justify-between items-center">
                                        {category.name} /{" "}
                                        <button
                                            onClick={() =>
                                                handleDeleteCategory(
                                                    category.id
                                                )
                                            }
                                            className="px-4 py-2 bg-blue-500 text-white border-0 rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Categories;
