import ReactMarkdown from 'react-markdown';

import './MarkdownOutput.css'

function MarkdownOutput({markdown}) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownOutput