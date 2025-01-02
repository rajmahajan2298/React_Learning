import { useState, useEffect } from "react";
import {MENU_API, MENU_API_SUFFIX} from "./constants";

const useRestroMenu =(resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect (() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(MENU_API + resId + MENU_API_SUFFIX);
        const json = await data.json();

        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestroMenu;