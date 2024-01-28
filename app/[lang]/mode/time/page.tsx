import { Locale } from "@/app/lib/defenitions";

type Props = { params: { lang: Locale }};


export default async function Page({params: { lang }} : Props) {
	return <section>TIME MODE</section>
}