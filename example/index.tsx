import 'raf/polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../src/css/example.css';
import ReactCodesInput from '../src/js/Input/index';

const Component = () => {
  const $passwordWrapperRef = useRef(null);
  const $pinWrapperRef = useRef(null);
  const $activationWrapperRef = useRef(null);
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [activation, setActivation] = useState('');
  return (
    <div className={CSS['wrapper']}>
      <div id="activationSection" className={CSS['example-section']}>
        <div style={{ flex: '0 0 50%' }}>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h3>Input type "alphanumeric"</h3>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={true}
                  wrapperRef={$activationWrapperRef}
                  id="activation"
                  codeLength={6}
                  type="alphanumeric"
                  hide={false}
                  placeholder=""
                  disabled={false}
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
                      $activationWrapperRef.current.children[index] && $activationWrapperRef.current.children[index].click();
                      isComplete = false;
                      break;
                    }
                  }
                  if (!isComplete) {
                    return;
                  }
                  if (activation.length === 6) {
                    alert('activation success');
                  }
                }}
              />
            </div>
          </form>
        </div>
        <div style={{ flex: '0 0 50%' }}>
          <div style={{ fontSize: '12px' }}></div>
        </div>
      </div>
      <div id="passwordSection" className={CSS['example-section']}>
        <div style={{ flex: '0 0 50%' }}>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h3>Input type "alpha"</h3>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={false}
                  wrapperRef={$passwordWrapperRef}
                  id="password"
                  codeLength={6}
                  type="alpha"
                  hide={true}
                  placeholder=""
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
                      $passwordWrapperRef.current.children[index] && $passwordWrapperRef.current.children[index].click();
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
        <div style={{ flex: '0 0 50%' }}>
          <div style={{ fontSize: '12px' }}></div>
        </div>
      </div>
      <div id="pinSection" className={CSS['example-section']}>
        <div style={{ flex: '0 0 50%' }}>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h3>Input type "number" only</h3>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={false}
                  wrapperRef={$pinWrapperRef}
                  id="pin"
                  codeLength={4}
                  type="number"
                  hide={true}
                  placeholder=""
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
                  for (let index = 0; index < 4; index += 1) {
                    if (typeof pin[index] === 'undefined') {
                      $pinWrapperRef.current.children[index] && $pinWrapperRef.current.children[index].click();
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
        <div style={{ flex: '0 0 50%' }}>
          <div style={{ fontSize: '12px' }}></div>
        </div>
      </div>
    </div>
  );
};

// <Markdown source={markdownTextboxEmptyExample} renderers={{ CodeBlock }} />

ReactDOM.render(<Component />, document.getElementById('root'));