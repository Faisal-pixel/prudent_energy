import React, { useState } from 'react';
import { HtmlEditor, Toolbar, Item, TableContextMenu, TableResizing, MediaResizing } from "devextreme-react/html-editor";
import { LiaEllipsisVSolid } from "react-icons/lia";

const markup = `
    <div>
        <h2>
            <img src="HtmlEditor.svg" alt="HtmlEditor"/>
            Rich Text Editor (HTML Editor)
        </h2>
        <br>
        <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>
        <p>Supported features:</p>
        <ul>
            <li>Inline formats:
                <ul>
                    <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>
                    <li>Typeface, font size, text color changes (HTML only)</li>
                </ul>
            </li>
            <li>Block formats:
                <ul>
                    <li>Headers</li>
                    <li>Lists (ordered and unordered)</li>
                    <li>Code blocks</li>
                    <li>Quotes</li>
                </ul>
            </li>
            <li>Built-in format customization</li>
            <li>HTML and Markdown support</li>
            <li>Mail Merge</li>
            <li>Adaptive toolbar for working with images, links, and color formats</li>
            <li>Copy-paste rich content (the control strips unsupported formats)</li>
            <li>Embedded images specified as a link to an image file or as base64-encoded binary data</li>
            <li>Mention (for example, @person)</li>
            <li>Tables</li>
        </ul>
        <br>
        <p>The editor supports the following frameworks and libraries:</p>
        <table>
            <tr>
                <td><strong>jQuery</strong></td>
                <td>v2.1 - v2.2 and v3.x</td>
            </tr>
            <tr>
                <td><strong>Angular</strong></td>
                <td>v7.0.x - v11.0.x</td>
            </tr>
            <tr>
                <td><strong>React</strong></td>
                <td>v16.2+</td>
            </tr>
            <tr>
                <td><strong>Vue</strong></td>
                <td>v2.6.3+</td>
            </tr>
        </table>
    </div>
`;
const sizeValues = [ "8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt" ];
const fontValues = [ "Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana" ];
const headerValues = [ false, 1, 2, 3, 4, 5 ];

const HtmlEditorComponent = () => {
    const [showReaminingTools, setShowRemainingTools] = useState(false);
  return <>
    <HtmlEditor className="h-60" defaultValue={markup} onValueChanged={(e) => console.log(e.value)} valueType="html">
                            <Toolbar multiline={true} container={"#toolbar-container"}>
                                <Item name="undo" />
                                <Item name="redo" />
                                <Item name="separator" />
                                <Item name="size" acceptedValues={sizeValues} />
                                <Item name="font" acceptedValues={fontValues} />
                                <Item name="separator" />
                                <Item name="bold" />
                                <Item name="italic" />
                                <Item name="strike" />
                                <Item name="underline" />
                                <Item name="separator" />
                                <Item name="alignLeft" />
                                <Item name="alignCenter" />
                                <Item name="alignRight" />
                                <Item name="alignJustify" />
                                <Item name="separator" />
                                <Item name="orderedList" />
                                <Item name="bulletList" />
                                <Item name="separator" />
                                
                                <Item name="separator" />
                                <Item name="color" />
                                <Item name="background" />
                                <Item name="separator" />
                                <Item name="link" />
                                
                                <Item name="image" />
                                <Item name="separator" />
                                <Item name="clear" />
                                <Item name="codeBlock" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="blockquote" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="separator" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="insertTable" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="deleteTable" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="insertRowAbove" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="insertRowBelow" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="deleteRow" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="insertColumnLeft" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="insertColumnRight" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="deleteColumn" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="cellProperties" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="tableProperties" cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                                <Item name="header" acceptedValues={headerValues} cssClass={`${showReaminingTools ? "show-overflowing-toolbars-items" : "hide-overflowing-toolbars-items"}`}/>
                            </Toolbar>
                            <MediaResizing enabled={true} />
                            <TableResizing enabled={true} />
                            <TableContextMenu enabled={true} />
                        </HtmlEditor>
                        <div className="absolute right-0 top-[1.8rem] py-[0.25rem] pl-[0.2rem] border-l border-b border-[#ddd] cursor-pointer" onClick={() => setShowRemainingTools(!showReaminingTools)}>
                            <LiaEllipsisVSolid className="h-7 w-7"/>
                        </div>
  </>
}

export default HtmlEditorComponent;