import siteName from "constants/siteName";
import Link from "next/link";

const d = new Date();
let year = d.getFullYear();

export default function SiteFooter() {
    return (
        <footer>

            <div className="container d-flex justify-content-between">

                <div>©{year} - {siteName} - by ArticlesJoey from Articles Media</div>

                <div>
                    <Link
                        prefetch={false}
                        className="highlight px-1"
                        href="/privacy"
                    >
                        Privacy
                    </Link>
                </div>

            </div>

        </footer>
    )
}