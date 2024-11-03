// lib/markdown.js
import { marked } from 'marked';


marked.setOptions({
  breaks: true,
});


export function parseMarkdown(content) {
  return marked(content);
}
