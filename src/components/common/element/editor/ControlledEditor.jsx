import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { unemojify } from "node-emoji";

export default class ControlledEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.props.onChange(
            draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        );
    }

    onEditorStateChange = editorState => {
        const { onChange, value } = this.props;

        const newValue = unemojify(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );

        if (value !== newValue) {
            onChange(newValue);
        }

        this.setState({
            editorState
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    localization={{
                        locale: 'ru',
                    }}
                />
            </div>
        );
    }
}
