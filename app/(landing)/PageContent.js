"use client"

import useStore from "@/components/useStore";

import Password from "./components/Password";
import Bcrypt from "./components/Bcrypt";
import PGP from "./components/PGP";

export default function PageContent() {

    const page = useStore(state => state.page);

    return (
        <div className="page page-front-page">

            {/* <div className="background"></div> */}

            {page == "Password" &&
                <Password />
            }

            {page == "Bcrypt" &&
                <Bcrypt />
            }

            {page == "PGP" &&
                <PGP />
            }

        </div>
    )

}