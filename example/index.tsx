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
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  const [activation, setActivation] = useState('');
  return (
    <div className={CSS['wrapper']}>
      <div id="activationSection" className={CSS['example-section']}>
        <div style={{ flex: '0 0 50%' }}>
          <form
            onSubmit={e => {
              alert('submit alphanumeric');
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
                  codeLength={6}
                  type="alphanumeric"
                  hide={false}
                  placeholder=""
                  disabled={false}
                  value={activation}
                  onChange={(res: any) => {
                    console.log(res);
                    setActivation(res);
                  }}
                  letterCase="upper"
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input type="submit" className="submit-btn" />
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
              alert('submit alpha');
              // const input = document.getElementById('22') as HTMLInputElement | null;
              // if (input != null) {
              //   // ⛔️ Error: Property 'value' does not exist on type 'HTMLElement'.ts(2339)
              //   const value = input.value;
              //   console.log(value);
              // }
              e.preventDefault();
            }}
          >
            <div>
              <div style={{ maxWidth: '300px', margin: '10px auto' }}>
                <h3>Input type "alpha" hide: true</h3>
              </div>
              <div>
                <ReactCodesInput
                  initialFocus={false}
                  codeLength={6}
                  type="alpha"
                  hide={true}
                  placeholder=""
                  value={password}
                  onChange={(res: any) => {
                    console.log(res);
                    setPassword(res);
                  }}
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input type="submit" className="submit-btn" />
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
              alert('submit number');
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
                  codeLength={4}
                  type="number"
                  hide={true}
                  placeholder=""
                  value={pin}
                  onChange={(res: any) => {
                    console.log(res);
                    setPin(res);
                  }}
                  customStyleComponent={{ maxWidth: '300px', margin: '0 auto' }}
                />
              </div>
            </div>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input type="submit" className="submit-btn" />
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
