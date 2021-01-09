import React from "react";
import {useRouter} from "next/router";

const Page = () => {
    const router = useRouter();
    const {params} = router.query;
    console.log("== params", params);
    return (
        <div>Note: params length = {params.length}</div>
    );
};

export default Page;
