import { useEffect } from "react";

const SITE_URL = "https://nambercay.id.vn";

export default function useCanonical(path = "") {
    useEffect(() => {
        let canonical = document.querySelector("link[rel='canonical']");

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        };

        canonical.href = `${SITE_URL}${path}`;
    }, [path]);
}
