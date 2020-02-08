import React from "react";
import ReactDOMServerBrowser from "react-dom/server";
import { App } from "./App.tsx";

interface HTMLProps {
  title: string;
  message: string;
};

export const HTML = ({ title, ...props }: HTMLProps) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta char-set="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${title}</title>
    <style>body{font-family:helvetica,sans-serif;}</style>
  </head>
  <body>
    <div id="root">${ReactDOMServerBrowser.renderToStaticMarkup(<App {...props} />)}</div>
  </body>
</html>
`;
