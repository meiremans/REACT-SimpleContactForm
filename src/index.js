import React from 'react';
import $ from "jquery";

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class ContactForm extends React.Component {

    getInitialState:

    function () {
        return {
            send: false,
            email: '',
            content: '',
            subject: 'Mail Form From Website'
        };
    }

    updateEmail:

    function (evt) {
        this.setState({
            email: evt.target.value
        });
    }

    updateContent:

    function (evt) {
        this.setState({
            content: evt.target.value
        });
    }

    _handleSubmit(event) {
        var email = $("#email").val();
        if (validateEmail(email)) {
            event.preventDefault();
            $('#emailId').addClass('has-success');
            $('#emailContent').addClass('has-success');
            $('#success').removeClass('hiddenSuccess');
            $('#success').addClass('form-control-feedback');
            this.setState({send: true});
            var mailData = this.state;
            this.props.callbackParent(mailData);
        } else {
            event.preventDefault();
            $('#emailId').addClass('has-danger');
        }

    }

    render() {

        return (
            <div className="contactForm">
                <div><h1>{this.props.data.header}</h1></div>
                <div>
                    <div className="col s12">
                        <form>
                            <div id="emailId" className="form-group ">
                                <small className="form-text text-muted">{this.props.data.mailAddress}</small>
                                <input type="text" value={this.state.email} onChange={this.updateEmail}
                                       className="form-control form-control-success" id="inputSuccess1"/>
                            </div>
                            <div id="emailContent" className="input-field">
                                <small className="form-text text-muted">{this.props.data.message}</small>
                                <textarea className="form-control" value={this.state.content}
                                          onChange={this.updateContent}
                                          name="emailcontent" id="emailcontent" data-cip-id="emailcontent"/>
                                <div id="success" className="hiddenSuccess">{this.props.data.sendMessage}</div>
                            </div>
                            <button className="btn btn-primary"
                                    onClick={this._handleSubmit}>{this.props.data.sendButton}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
;

export default ContactForm;