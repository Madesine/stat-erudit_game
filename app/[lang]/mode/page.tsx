import Link from "next/link";
import {getDictionary} from "@/app/lib/utils";
import { Locale } from "@/app/lib/defenitions";

type Props = { params: { lang: Locale }};


export default async function Page({params: { lang }} : Props) {
	const dict = await getDictionary(lang);

	return (<>
		<section className={"basis-1/2 self-stretch bg-slate-50/50 mx-4 ml-6 my-16 rounded"}>
			<Link href="/mode/training">
				{dict.mode.labelTrainingMode}
			</Link>
		</section>

		<section className={"basis-1/2 self-stretch bg-slate-50/50 mx-4 my-16 mr-6 rounded"}>
			<Link href="/mode/time">
				{dict.mode.labelTimeMode}
			</Link>
		</section>
	</>);
}