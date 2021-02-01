import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./style.css"
class Document extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        console.log(e.target.getContent());
    }

    render() {
        return (
            <div className="doccmain">
                <Editor
                    apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                    initialValue="<p>This is a document</p>"
                    init={{
                        selector: 'textarea#export',
                        plugins: 'export pagebreak code emoticons image table paste lists advlist checklist link hr charmap directionality',
                        toolbar: 'export pagebreak | formatselect fontselect fontsizeselect bold italic underline strikethrough forecolor backcolor subscript superscript | alignleft aligncenter alignright alignjustify indent outdent rtl ltr | bullist numlist checklist | emoticons image table link hr charmap',
                        height: 500,
                        toolbar_mode: 'sliding',
                        images_upload_handler: function (blobInfo, success, failure) { },
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onChange={(e) => this.onChange(e)}
                />
            </div>
        ); 
    }
}
export default Document;
