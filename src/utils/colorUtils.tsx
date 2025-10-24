export const colorScheme = {
    /* ---------------- BACKGROUNDS ---------------- */
    base100: "oklch(100% 0.02 275)", // --color-base-100
    base200: "oklch(80% 0.03 275)", // --color-base-200
    base300: "oklch(60% 0.03 275)", // --color-base-300
    baseContent: "oklch(24% 0.04 270)", // --color-base-content

    /* ---------------- BRAND COLORS ---------------- */
    primary: "oklch(62% 0.27 330)", // --color-primary
    primaryContent: "oklch(100% 0 0)", // --color-primary-content

    secondary: "oklch(58% 0.25 280)", // --color-secondary
    secondaryContent: "oklch(73.851% 0.13962 287.613)", // --color-secondary-content

    accent: "oklch(70% 0.25 70)", // --color-accent
    accentContent: "oklch(77.211% 0.17258 64.119)", // --color-accent-content

    /* ---------------- NEUTRALS ---------------- */
    neutral: "oklch(30% 0.03 270)", // --color-neutral
    neutralContent: "oklch(98% 0.02 275)", // --color-neutral-content

    /* ---------------- SYSTEM FEEDBACK ---------------- */
    info: "oklch(68% 0.18 250)", // --color-info
    infoContent: "oklch(100% 0 0)", // --color-info-content

    success: "oklch(70% 0.18 160)", // --color-success
    successContent: "oklch(100% 0 0)", // --color-success-content

    warning: "oklch(80% 0.2 80)", // --color-warning
    warningContent: "oklch(20% 0.03 270)", // --color-warning-content

    error: "oklch(63% 0.22 25)", // --color-error
    errorContent: "oklch(100% 0 0)", // --color-error-content

    /* ---------------- SHAPE + ELEVATION ---------------- */
    radiusSelector: "0.25rem", // --radius-selector
    radiusField: "0.25rem", // --radius-field
    radiusBox: "0.5rem", // --radius-box
    sizeSelector: "0.25rem", // --size-selector
    sizeField: "0.25rem", // --size-field
    border: "1px", // --border
    depth: "0", // --depth
    noise: "0", // --noise
};

export function customiseColor(value: string, state: "idle" | "active") {
    if (value === "category") {
        if (state === "idle") return colorScheme.secondary;
        return colorScheme.secondaryContent;
    }
    return state === "idle" ? colorScheme.accent : colorScheme.accentContent;
}
