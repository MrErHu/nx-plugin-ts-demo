module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@nx'],
    rules: {
        "@nx/enforce-module-boundaries": [
            "error",
            {
                "allow": [],
                "depConstraints": [
                    {
                        "sourceTag": "packages:a",
                        "onlyDependOnLibsWithTags": ["packages:a"]
                    },
                    {
                        "sourceTag": "packages:b",
                        "onlyDependOnLibsWithTags": ["packages:b"]
                    }
                ]
            }
        ]
    }
};
