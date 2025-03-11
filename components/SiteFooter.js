import siteName from "constants/siteName";
import Link from "next/link";

const d = new Date();
let year = d.getFullYear();

export default function SiteFooter() {
    return (
        <footer>

            <div className="container d-flex justify-content-between flex-column flex-lg-row">

                <div className="d-flex flex-column flex-lg-row">
                    <span>©{year} - {siteName}</span>
                    <span className="d-none d-lg-inline-block"> - </span>
                    <span>by ArticlesJoey from <a target="_blank" href="https://articles.media">Articles Media</a></span>
                </div>

                <div>
                    <Link
                        prefetch={false}
                        className=""
                        href="/privacy"
                    >
                        Privacy
                    </Link>
                </div>

            </div>

        </footer>
    )
}