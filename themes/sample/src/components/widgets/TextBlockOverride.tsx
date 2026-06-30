import React from 'react';

interface TextBlockProps {
  textWidget: {
    text: string;
    className?: string;
  };
}

export default function TextBlockOverride({ textWidget: { text, className } }: TextBlockProps) {
  // Render HTML content safely
  return (
    <div 
      className={`text-block-widget ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
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
