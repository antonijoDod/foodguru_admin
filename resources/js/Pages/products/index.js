import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, Tbody, Td, Box } from "@chakra-ui/react";

const Products = (props) => {
    const { products } = props;
    console.log("🚀 ~ file: index.js ~ line 9 ~ Products ~ products", products);

    const handleDeleteProduct = (id) => {
        Inertia.delete(`/products/${id}`);
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <Link className="underline" href="/products/create">
                    Add new
                </Link>
            }
        >
            <Head title="Products" />

            <Link href="products/create">
                <Button colorScheme="teal" m={4}>
                    Add new
                </Button>
            </Link>

            <Box m={4} backgroundColor="white">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Product name</Th>
                            <Th>Product category</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product) => (
                            <Tr key={product.id}>
                                <Td>{product.name}</Td>
                                <Td>{product.category.name}</Td>
                                <Td isNumeric>
                                    <ButtonGroup>
                                        <Button
                                            onClick={() =>
                                                handleDeleteProduct(product.id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <Button>Edit</Button>
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Authenticated>
    );
};

export default Products;
