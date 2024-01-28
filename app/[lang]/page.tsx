import { Locale } from "@/app/lib/defenitions";
import { getDictionary } from "@/app/lib/utils";
import { DEFAULT_STYLES } from "@/app/lib/constants";

import Link from "next/link";
import { Button } from "@/app/ui/button";

type Props = { params: { lang: Locale }};

export default async function Page({params: { lang }} : Props) {
	const dict = await getDictionary(lang);

	return (
		<nav className={"basis-1/4"} aria-label="Main Menu">
			<Link href="/mode">
				<Button className={DEFAULT_STYLES.menuButton}>{dict.button.labelPlay}</Button>
			</Link>

			<Link href="/setup">
				<Button className={DEFAULT_STYLES.menuButton}>{dict.button.labelSettings}</Button>
			</Link>
		</nav>
	);
}