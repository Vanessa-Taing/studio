import React from 'react';

const MarkdownRenderer = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 my-4 pl-4 text-lg text-muted-foreground">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const flushCodeBlock = () => {
    if (codeLines.length > 0) {
      elements.push(
        <pre key={`pre-${elements.length}`} className="bg-gray-800 text-white p-4 rounded-md my-4 overflow-x-auto">
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      codeLines = [];
    }
  };
  
  lines.forEach((line, index) => {
    if (line.startsWith('```')) {
        if (inCodeBlock) {
            flushCodeBlock();
            inCodeBlock = false;
        } else {
            flushList();
            inCodeBlock = true;
        }
        return;
    }

    if (inCodeBlock) {
        codeLines.push(line);
        return;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={index} className="text-2xl font-semibold mt-8 mb-4 font-headline">{line.substring(4)}</h3>);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={index} className="text-3xl font-bold mt-10 mb-6 border-b pb-2 font-headline">{line.substring(3)}</h2>);
    } else if (line.startsWith('# ')) {
      flushList();
      elements.push(<h1 key={index} className="text-4xl font-extrabold mt-12 mb-8 border-b pb-4 font-headline">{line.substring(2)}</h1>);
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      listItems.push(line.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
    } else if (line.trim() === '') {
      flushList();
    } else {
      flushList();
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
      elements.push(<p key={index} className="text-lg leading-relaxed my-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: formattedLine }} />);
    }
  });

  flushList();
  flushCodeBlock();

  return <div className="prose prose-lg max-w-none dark:prose-invert">{elements}</div>;
};

export default MarkdownRenderer;
