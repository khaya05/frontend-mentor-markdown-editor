import './MarkdownInput.css'

const MarkdownInput = ({markdown, setMarkdown}) => {
  return (
      <textarea
        className="input__area"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
  );
}

export default MarkdownInput