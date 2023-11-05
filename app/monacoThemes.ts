export function monacoDarkTheme() {
    return {
        base: 'vs-dark',
        inherit: true,
        rules: [
          {
            token: "identifier",
            foreground: "9CDCFE"
          },
          {
            token: "identifier.function",
            foreground: "DCDCAA"
          },
          {
            token: "type",
            foreground: "1AAFB0"
          },
          {
            token: 'if',
            foreground: 'ff79c6',
          },
        ],
        colors: {
            'editor.background': "#000000",
        }
    };
}
