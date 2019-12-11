import React from 'react';
import GoHome from '../component/GoHome';
import { Link } from 'react-router-dom';

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            phone: ""
        }
    }
    
    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <GoHome />
                <div>유저프로필</div>
                <Link to="/Todo">투두</Link>        
                <div>사용자</div>
                <div>이메일</div>
                <div>모바일</div>
            </div>
        );
    }    
};

export default User;