import React from "react";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass } from "react-icons/fi";
import { IconType } from "react-icons";
import NavItem from "@/Components/NavItem";

const LinkItems = [
    { name: "Dashboard", icon: FiHome, linkPath: "/dashboard" },
    { name: "Products", icon: FiTrendingUp, linkPath: "/products" },
    { name: "Categories", icon: FiCompass, linkPath: "/categories" },
    { name: "Attributes", icon: FiCompass, linkPath: "/attributes" },
];

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                {/* <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                /> */}
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    key={link.name}
                    icon={link.icon}
                    linkPath={link.linkPath}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;
