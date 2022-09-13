import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';

export function lightTheme(themeColor: string) {
    return createTheme({
        theme: 'light',
        settings: {
            background: themeColor,
            foreground: '#000',
            caret: '#000',
            selection: '#d7d4f0',
            selectionMatch: '#d7d4f0',
            gutterBackground: '#f7f7f7',
            gutterForeground: '#999',
            lineHighlight: '#e8f2ff'
        },
        styles: [
            {
                tag: [t.comment],
                color: '#3F7F5F'
            },
            {
                tag: [t.documentMeta],
                color: '#FF1717'
            },
            {
                tag: t.keyword,
                color: '#7F0055',
                fontWeight: 'bold'
            },
            { tag: t.atom, color: '#00f' },
            { tag: t.number, color: '#164' },
            {
                tag: t.propertyName,
                color: '#164'
            },
            {
                tag: [t.variableName, t.definition(t.variableName)],
                color: '#0000C0'
            },
            {
                tag: t.function(t.variableName),
                color: '#0000C0'
            },
            {
                tag: t.string,
                color: '#2A00FF'
            },
            {
                tag: t.operator,
                color: '#b36b00'
            },
            { tag: t.tagName, color: '#170' },
            {
                tag: t.attributeName,
                color: '#00c'
            },
            { tag: t.link, color: '#219' }
        ]
    });
}

export function darkTheme(themeColor: string) {
    return createTheme({
        theme: 'dark',
        settings: {
            background: themeColor,
            foreground: '#f8f8f2',
            caret: '#f8f8f0',
            selection: 'rgba(255, 255, 255, 0.1)',
            selectionMatch: 'rgba(255, 255, 255, 0.2)',
            gutterBackground: '#282a36',
            gutterForeground: '#6D8A88',
            lineHighlight: 'rgba(255, 255, 255, 0.1)'
        },
        styles: [
            {
                tag: t.comment,
                color: '#6272a4'
            },
            {
                tag: t.string,
                color: '#f1fa8c'
            },
            { tag: t.atom, color: '#bd93f9' },
            { tag: t.meta, color: '#f8f8f2' },
            {
                tag: t.number,
                color: '#944dff'
            },
            {
                tag: [t.keyword, t.tagName],
                color: '#ff79c6'
            },
            {
                tag: t.operator,
                color: '#ff9900'
            },
            {
                tag: [t.function(t.propertyName), t.propertyName],
                color: '#66d9ef'
            },
            {
                tag: [t.definition(t.variableName), t.function(t.variableName), t.className, t.attributeName],
                color: '#50fa7b'
            },
            { tag: t.atom, color: '#bd93f9' }
        ]
    });
}
