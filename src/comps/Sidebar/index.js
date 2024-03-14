import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import styles from "./sidebar.module.css";
import { BiUser, BiGlobe } from "react-icons/bi";
import { AiOutlineTeam, AiOutlineSetting } from "react-icons/ai";
import { HiOutlineMap } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between" flexDirection="column" className={styles.sidebar}>
        <Flex flexWrap="wrap" alignItems="center" flexDirection="column" width="100%">
          <Text className={styles.title}>
            MyDaily
          </Text>
          <Link className={styles.link} to={"/"}>
            <BiUser
              size={24}
              color={currentUrl === "/" ? "black" : "lightgray"}
            />
          </Link>
          <Link className={styles.link} to={"/company-view"}>
            <BiGlobe
              size={24}
              color={currentUrl === "/company-view" ? "black" : "lightgray"}
            />
          </Link>
          <Link className={styles.link} to={"/teams"}>
            <AiOutlineTeam
              size={24}
              color={currentUrl === "/teams" ? "black" : "lightgray"}
            />
          </Link>
          <Link className={styles.link} to={"/wellbeing-apps"}>
            <HiOutlineMap
              size={24}
              color={currentUrl === "/wellbeing-apps" ? "black" : "lightgray"}
            />
          </Link>
        </Flex>
        <Link to={"/settings"}>
          <AiOutlineSetting
            size={24}
            color={currentUrl === "/settings" ? "black" : "lightgray"}
          />
        </Link>
      </Flex>
    </>
  );
}

export default Sidebar;
