import Link from "next/link"
import siteName from "constants/siteName"

export const metadata = {
    title: `Privacy | ${siteName}`,
}

export default async function Page() {

    return (
        <div className="page page-privacy py-5">

            <div className="container">

                <div className="card">
                    <div className="card-body">
                        <h2>Privacy</h2>

                        <p>
                            {`This privacy notice for ${siteName} describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:`}
                        </p>

                        <ul>
                            <li>Visit our website</li>
                            {/* <li>Contact us via our form</li> */}
                        </ul>

                        <p>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with {siteName} and the Services, the choices you make, and the products and features you use.</p>

                        <ul>
                            <li>Usage Data - We collect metrics about how long you spend on each page and our site in general. This is done automatically by the analytic service we use, which is Google Analytics.</li>
                            <li>IP Address - When visiting our site we track your IP address. This is done automatically by the analytic service we use, which is Google Analytics.</li>
                            <li>Device Data - When visiting our site we read your User-Agent request headers. This is done automatically by the analytic service we use, which is Google Analytics.</li>
                            <li>Location Data - We collect imprecise location data based on your IP address. This is done automatically by the analytic service we use, which is Google Analytics. Location data is never collected via GPS.</li>
                        </ul>

                        <p>Nowhere in this app do we collect data about the generated passwords, provable via the open source code. Website builds are powered by Vercel that are built directly from the repo commits.</p>

                    </div>
                </div>

            </div>

        </div>
    )

}