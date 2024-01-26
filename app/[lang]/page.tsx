import { Locale } from "@/app/lib/defenitions";
import { getDictionary } from "@/app/lib/utils";

type Params = { params: { lang: Locale }};

export default async function Page({params: { lang }} : Params) {
	const dict = await getDictionary(lang);

	return <button>{dict.button.labelPlay}</button>
}