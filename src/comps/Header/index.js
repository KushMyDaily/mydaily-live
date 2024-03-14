import { Avatar, Flex, InputGroup, InputLeftElement, Input, AvatarBadge } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <Flex flexWrap="wrap" alignItems="flex-start" justifyContent="space-between" gap="2" marginBottom="20px" >
      <InputGroup className={styles.searchWrap} >
        <InputLeftElement pointerEvents='none' className={styles.searchIconWrap}>
          <BiSearch className={styles.searchIcon} />
        </InputLeftElement>
        <Input type='search' placeholder='Search' className={styles.searchInput} border="0"  />
      </InputGroup>
      <Link to={"/settings"}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" width="44px" height="44px">
          <AvatarBadge boxSize='12px' bg='#05C168' border="0" left="0" transform="unset" />
        </Avatar>
      </Link>
    </Flex>
  );
}

export default Header;
