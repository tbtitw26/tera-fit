import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

const RESTRICTED_ISO3 = new Set([
    "RUS",
    "BLR",
    "IRN",
    "PRK",
    "SYR",
    "YEM",
    "AFG",
    "SDN",
    "SSD",
    "CUB",
    "VEN",
    "ZWE",
    "MMR",
    "MLI",
    "COD",
    "CAF",
    "SOM",
    "IRQ",
    "HTI",
]);

const RESTRICTED_REGION_TOKENS = ["crimea", "darfur"];

export type CountryOption = {
    name: string;
    alpha2: string;
    alpha3: string;
};

function hasAlpha3<T extends { alpha3?: string }>(
    c: T
): c is T & { alpha3: string } {
    return typeof c.alpha3 === "string";
}

export function getAllowedCountries(): CountryOption[] {
    const names = countries.getNames("en", {select: "official"});

    return Object.entries(names)
        .map(([alpha2, name]) => ({
            name,
            alpha2,
            alpha3: countries.alpha2ToAlpha3(alpha2),
        }))
        .filter(hasAlpha3)
        .filter((c) => !RESTRICTED_ISO3.has(c.alpha3))
        .sort((a, b) => a.name.localeCompare(b.name));
}

const allowedCountries = getAllowedCountries();

export function getAllowedCountryByValue(value: string) {
    const normalizedValue = value.trim().toLowerCase();

    if (!normalizedValue || isRestrictedRegion(normalizedValue)) {
        return null;
    }

    return (
        allowedCountries.find((country) => country.alpha2.toLowerCase() === normalizedValue) ||
        allowedCountries.find((country) => country.alpha3.toLowerCase() === normalizedValue) ||
        allowedCountries.find((country) => country.name.toLowerCase() === normalizedValue) ||
        null
    );
}

export function isAllowedCountryValue(value: string) {
    return Boolean(getAllowedCountryByValue(value));
}

function isRestrictedRegion(value: string) {
    return RESTRICTED_REGION_TOKENS.some((token) => value.includes(token));
}
