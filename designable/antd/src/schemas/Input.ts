import { ISchema } from '@formily/react'

export const Input: ISchema = {
  type: 'object',
  properties: {
    addonBefore: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    addonAfter: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    prefix: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    suffix: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    allowClear: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    maxLength: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    placeholder: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    size: {
      type: 'string',
      enum: ['large', 'small', 'middle'],
      'x-decorator': 'FormItem',
      'x-component': 'Radio.Group',
      'x-component-props': {
        defaultValue: 'middle',
        optionType: 'button',
      },
    },
  },
}

Input.TextArea = {
  type: 'object',
  properties: {
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
    maxLength: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
    },
    placeholder: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    autoSize: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
    showCount: {
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
