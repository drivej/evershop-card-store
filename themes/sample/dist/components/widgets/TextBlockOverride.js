import React from 'react';
export default function TextBlockOverride({ textWidget: { text, className } }) {
    // Render HTML content safely
    return /*#__PURE__*/ React.createElement("div", {
        className: `text-block-widget ${className || ''}`,
        dangerouslySetInnerHTML: {
            __html: text
        }
    });
}
export const query = `
  query Query($text: String, $className: String) {
    textWidget(text: $text, className: $className) {
      ...TextBlockWidget
    }
  }
`;
export const fragments = `
  fragment TextBlockWidget on TextBlockWidget {
    text
    className
  }
`;
export const variables = `{
  text: getWidgetSetting("text"),
  className: getWidgetSetting("className")
}`;
