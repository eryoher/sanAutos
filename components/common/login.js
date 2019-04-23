import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal , message} from 'antd';
import LoginForm from '../users/loginForm';
import CreateUser from '../users/createUser';

class Login extends Component {  

    constructor(props) {
        super(props)
        this.state={
            showCreateUser:false
        }
    }

    componentDidUpdate = ( prevProps ) => {
        if(this.props.token && !prevProps.token){
            message.success('EL usuario se logeo correctamente.');
            this.props.onCancelLogin()
        }
    }

    handleChangeModal = () => {
        this.props.onCancelLogin();
        this.setState({showCreateUser:true});
    }

    handleCancelForm = () => {
        this.setState({showCreateUser:false});
    }

    onChangeModal = () => {
        this.setState({showCreateUser:false});
        this.props.onShowLogin()
    }

    render(){       
        return(            
            <div>
                <Modal
                    visible={ this.props.showLogin }                
                    onCancel = { this.props.onCancelLogin }
                    footer={[]}
                >            
                    <LoginForm 
                        onChangeModal = { () => this.handleChangeModal() }
                        onCloseLogin = { this.props.onCancelLogin }
                        register
                    />
                </Modal>
                <Modal
                    visible={ this.state.showCreateUser }                
                    onCancel= { () => this.handleCancelForm() }
                    footer={[]}
                >     
                    {this.state.showCreateUser && <CreateUser 
                        handleChangeModal = { () => this.onChangeModal() }
                    />}
                </Modal>
            </div>            
        )
    }
}

const mapStateToProps = ({auth}) => {
    return { token:auth.token }  
};

export default connect(mapStateToProps)(Login);