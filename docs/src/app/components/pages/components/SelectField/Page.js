import React from 'react';
import Title from 'react-title-component';

import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';

import selectFieldReadmeText from './README';
import SelectFieldExampleSimple from './ExampleSimple';
import selectFieldExampleSimpleCode from '!raw!./ExampleSimple';
import SelectFieldLongMenuExample from './ExampleLongMenu';
import selectFieldLongMenuExampleCode from '!raw!./ExampleLongMenu';
import SelectFieldExampleCustomLabel from './ExampleCustomLabel';
import selectFieldExampleCustomLabelCode from '!raw!./ExampleCustomLabel';
import SelectFieldExampleFloatingLabel from './ExampleFloatingLabel';
import selectFieldExampleFloatingLabelCode from '!raw!./ExampleFloatingLabel';
import SelectFieldExampleError from './ExampleError';
import selectFieldExampleErrorCode from '!raw!./ExampleError';
import selectFieldCode from '!raw!material-ui/SelectField/SelectField';
import SelectFieldExampleMultiple from './ExampleMultiple';
import selectFieldExampleMultipleCode from '!raw!./ExampleMultiple';

const SelectFieldPage = () => (
  <div>
    <Title render={(previousTitle) => `Select Field - ${previousTitle}`} />
    <MarkdownElement text={selectFieldReadmeText} />
    <CodeExample
      title="Simple examples"
      code={selectFieldExampleSimpleCode}
    >
      <SelectFieldExampleSimple />
    </CodeExample>
    <CodeExample
      title="Long example"
      code={selectFieldLongMenuExampleCode}
    >
      <SelectFieldLongMenuExample />
    </CodeExample>
    <CodeExample
      title="Label example"
      code={selectFieldExampleCustomLabelCode}
    >
      <SelectFieldExampleCustomLabel />
    </CodeExample>
    <CodeExample
      title="Floating label example"
      code={selectFieldExampleFloatingLabelCode}
    >
      <SelectFieldExampleFloatingLabel />
    </CodeExample>
    <CodeExample
      title="ErrorText example"
      code={selectFieldExampleErrorCode}
    >
      <SelectFieldExampleError />
    </CodeExample>
    <CodeExample
      title="Multiple example"
      description={descriptions.multiple}
      code={selectFieldExampleMultipleCode}
    >
      <SelectFieldExampleMultiple />
    </CodeExample>
    <PropTypeDescription code={selectFieldCode} />
  </div>
);

export default SelectFieldPage;
