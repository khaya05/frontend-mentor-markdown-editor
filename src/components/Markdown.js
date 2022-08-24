import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import hidePreview from '../assets/icon-hide-preview.svg';
import showPreview from '../assets/icon-show-preview.svg';
import content from '../data';
import Preview from './Preview';

import './Markdown.css';

const Markdown = () => {
  const [markdown, setMarkdown] = useState(content);
  const [isMarkdownVisible, setIsMarkdownVisible] = useState(true);

  const hideMarkdown = () => {
    setIsMarkdownVisible(false)
  }

  const showMarkdown = () => {
    setIsMarkdownVisible(true)
  }
  return (
    <section className='markdown-main'>
      {isMarkdownVisible && (
        <Preview
          icon={showPreview}
          label="markdown"
          togglePreview={hideMarkdown}
        />
      )}
      
      {isMarkdownVisible && <section className='input'>
        <textarea
          className="input__area"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>}
      {!isMarkdownVisible && (
        <Preview
          icon={hidePreview}
          label="preview"
          togglePreview={showMarkdown}
        />
      )}

      {!isMarkdownVisible && (
        <article className="output">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      )}
    </section>
  );
};

export default Markdown;
