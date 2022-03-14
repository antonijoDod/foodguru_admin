import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Table, Thead, Tr, Th, Tbody, Td, Box } from "@chakra-ui/react";

const AttributesIndexPage = (props) => {
    const { attributes } = props;
    console.log(
        "🚀 ~ file: index.js ~ line 11 ~ AttributesIndexPage ~ attributes",
        attributes
    );

    const handleDeleteAttribute = (id) => {
        Inertia.delete(`/attributes/${id}`);
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Attributes" />

            <Link href="attributes/create">
                <Button colorScheme="teal" m={4}>
                    Add new
                </Button>
            </Link>

            <Box m={4} backgroundColor="white">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Attribute name</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {attributes.map((attribute) => (
                            <Tr key={attribute.id}>
                                <Td>{attribute.name}</Td>
                                <Td isNumeric>
                                    <ButtonGroup>
                                        <Button
                                            onClick={() =>
                                                handleDeleteAttribute(
                                                    attribute.id
                                                )
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

export default AttributesIndexPage;
