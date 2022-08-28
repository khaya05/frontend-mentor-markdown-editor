import React, { useState } from 'react';
import hidePreview from '../assets/icon-hide-preview.svg';
import showPreview from '../assets/icon-show-preview.svg';
import content from '../data';
import Preview from './Preview';
import MarkdownInput from './MarkdownInput';

import './Markdown.css';
import MarkdownOutput from './MarkdownOutput';

const Markdown = () => {
  const [markdown, setMarkdown] = useState(content);
  const [isMarkdownVisible, setIsMarkdownVisible] = useState(!true);

  const tabletBreakPoint = 768
  const hideMarkdown = () => {
    setIsMarkdownVisible(false);
  };

  const showMarkdown = () => {
    setIsMarkdownVisible(true);

  };

  const togglePreview = () => {
    setIsMarkdownVisible(prevState => !prevState)
  }
  console.log(isMarkdownVisible);
  return (
    <section className="markdown-main">
      <div
        className={`markdown-main__input-container ${
          isMarkdownVisible && window.screen.width >= tabletBreakPoint ? '' : 'hide'
        }`}
      >
        <Preview
          icon={showPreview}
          label="markdown"
          togglePreview={togglePreview}
        />

        <section className="input">
          <MarkdownInput markdown={markdown} setMarkdown={setMarkdown} />
        </section>
      </div>

      <div
        className={`markdown-main__output-container ${
          isMarkdownVisible && window.screen.width >= tabletBreakPoint ? '' : 'show'
        }`}
      >
        <Preview
          icon={showPreview}
          label="preview"
          togglePreview={togglePreview}
        />

        {isMarkdownVisible && (
          <article
            className={`output ${
              isMarkdownVisible && window.screen.width >= tabletBreakPoint
                ? ''
                : 'show'
            }`}
          >
            <MarkdownOutput markdown={markdown} />
          </article>
        )}
      </div>
    </section>
  );
};

export default Markdown;
