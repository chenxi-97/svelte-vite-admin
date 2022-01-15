module.exports = {
  extends: ["stylelint-config-standard"],
  customSyntax: "postcss-less",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "media-feature-name-no-vendor-prefix": null,
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "max-line-length": null
  },
};