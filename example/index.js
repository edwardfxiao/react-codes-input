import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'babel-polyfill';
import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';
import prefixAll from 'inline-style-prefix-all';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import CSS from '../src/css/example.css';
import ReactCodesInput from '../src/js/Input/index.js';

const markdownTextboxEmptyExample = `
\`\`\`javascript
import ReactCodesInput from 'react-codes-input';
import 'react-codes-input/lib/react-codes-input.min.css';

...
const [password, setPassword] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const $wrapperRef = useRef(null);
const submit = useCallback(
  () => {
    if (password.length === 6) {
      alert('success');
    }
  },
  [password],
);
return
  (
    <form
      onSubmit={e => {
        e.preventDefault();
        submit();
      }}
      style={{ maxWidth: '300px', margin: '0 auto' }}
    >

      <ReactCodesInput
        wrapperRef={$wrapperRef}
        id="password"
        codeLength={6}
        type="number"
        hide={true}
        value={password}
        onChange={res => {
          setPassword(res);
        }}
      />

      <input
        type="submit"
        className="submit-btn"
        onClick={() => {
          let isComplete = true;
          for (let index = 0; index < 6; index += 1) {
            if (typeof password[index] === 'undefined') {
              $wrapperRef.current.children[index].click();
              isComplete = false;
              break;
            }
          }
          if (!isComplete) {
            return;
          }
          submit();
        }}
      />
    </form>
  );
\`\`\`
`;

const CodeBlock = ({ literal, language }) => {
  var html = Prism.highlight(literal, Prism.languages[language]);
  var cls = 'language-' + language;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
};

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
};

const Component = () => {
  const $passwordWrapperRef = useRef(null);
  const $pinWrapperRef = useRef(null);
  const $activationWrapperRef = useRef(null);
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [activation, setActivation] = useState('');
  const submit = useCallback(
    () => {
      if (password.length === 6) {
        alert('success');
      }
    },
    [password],
  );
  return (
    <div className={CSS['wrapper']}>
      <div className={CSS['nav']}>
        <div>
          <h2>
            <a href="#passwordSection">Example of password (type="alpha")</a>
          </h2>
        </div>
        <div>
          <h2>
            <a href="#pinSection">Example of pin (type="number")</a>
          </h2>
        </div>
        <div>
          <h2>
            <a href="#pinSection">Example of activation code (type="alphanumeric")</a>
          </h2>
        </div>
      </div>
      <div id="passwordSection" className={CSS['example-section']}>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (password.length === 6) {
                alert('password success');
              }
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h2>password (type="alpha")</h2>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={true}
                  wrapperRef={$passwordWrapperRef}
                  id="password"
                  codeLength={6}
                  type="alpha"
                  hide={true}
                  value={password}
                  onChange={res => {
                    setPassword(res);
                  }}
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input
                type="submit"
                className="submit-btn"
                onClick={() => {
                  let isComplete = true;
                  for (let index = 0; index < 6; index += 1) {
                    if (typeof password[index] === 'undefined') {
                      $passwordWrapperRef.current.children[index].click();
                      isComplete = false;
                      break;
                    }
                  }
                  if (!isComplete) {
                    return;
                  }
                  if (password.length === 6) {
                    alert('password success');
                  }
                }}
              />
            </div>
          </form>
        </div>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <Markdown
            source={`\`\`\`javascript
<ReactCodesInput
  initialFocus={true}
  wrapperRef={$passwordWrapperRef}
  id="password"
  codeLength={6}
  type="alpha" // ['alphanumeric', 'alpha', 'number']
  hide={true}
  value={password}
  onChange={res => {
    setPassword(res);
  }}
  customStyleComponent={{
    maxWidth: '300px',
    margin: '0 auto'
  }}
/>
 \`\`\``}
            renderers={{ CodeBlock }}
          />
        </div>
      </div>
      <div id="pinSection" className={CSS['example-section']}>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (pin.length === 4) {
                alert('pin success');
              }
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h2>pin (type="number")</h2>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={false}
                  wrapperRef={$pinWrapperRef}
                  id="pin"
                  codeLength={4}
                  type="number"
                  hide={false}
                  value={pin}
                  onChange={res => {
                    setPin(res);
                  }}
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input
                type="submit"
                className="submit-btn"
                onClick={() => {
                  let isComplete = true;
                  for (let index = 0; index < 6; index += 1) {
                    if (typeof pin[index] === 'undefined') {
                      $pinWrapperRef.current.children[index].click();
                      isComplete = false;
                      break;
                    }
                  }
                  if (!isComplete) {
                    return;
                  }
                  if (pin.length === 4) {
                    alert('pin success');
                  }
                }}
              />
            </div>
          </form>
        </div>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <Markdown
            source={`\`\`\`javascript
<ReactCodesInput
  initialFocus={false}
  wrapperRef={$pinWrapperRef}
  id="pin"
  codeLength={4}
  type="number" // ['alphanumeric', 'alpha', 'number']
  hide={false}
  value={pin}
  onChange={res => {
    setPin(res);
  }}
  customStyleComponent={{
    maxWidth: '300px',
    margin: '0 auto'
  }}
/>
 \`\`\``}
            renderers={{ CodeBlock }}
          />
        </div>
      </div>
      <div id="activationSection" className={CSS['example-section']}>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (activation.length === 4) {
                alert('activation success');
              }
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h2>activation (type="alphanumeric")</h2>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={false}
                  wrapperRef={$activationWrapperRef}
                  id="activation"
                  codeLength={10}
                  type="alphanumeric"
                  hide={false}
                  disabled={true}
                  value={activation}
                  onChange={res => {
                    setActivation(res);
                  }}
                  letterCase="upper"
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input
                type="submit"
                className="submit-btn"
                onClick={() => {
                  let isComplete = true;
                  for (let index = 0; index < 6; index += 1) {
                    if (typeof activation[index] === 'undefined') {
                      $activationWrapperRef.current.children[index].click();
                      isComplete = false;
                      break;
                    }
                  }
                  if (!isComplete) {
                    return;
                  }
                  if (activation.length === 4) {
                    alert('activation success');
                  }
                }}
              />
            </div>
          </form>
        </div>
        <div style={prefixAll({ flex: '0 0 50%' })}>
          <Markdown
            source={`\`\`\`javascript
<ReactCodesInput
  initialFocus={false}
  wrapperRef={$activationWrapperRef}
  id="activation"
  codeLength={10}
  type="alphanumeric" // ['alphanumeric', 'alpha', 'number']
  hide={false}
  value={activation}
  onChange={res => {
    setActivation(res);
  }}
  letterCase="upper"
  customStyleComponent={{
    maxWidth: '300px',
    margin: '0 auto'
  }}
/>
 \`\`\``}
            renderers={{ CodeBlock }}
          />
        </div>
      </div>
    </div>
  );
};

// <Markdown source={markdownTextboxEmptyExample} renderers={{ CodeBlock }} />

ReactDOM.render(<Component />, document.getElementById('root'));
