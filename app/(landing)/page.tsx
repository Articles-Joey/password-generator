import siteName from "constants/siteName";
import PageContent from "./PageContent";

export const metadata = {
    title: `${siteName}`,
};

export default function Page() {
    return <PageContent />;
}