import React from 'react';

class WritePost extends React.Component {
    constructor(props) {
        super(props);
        updateFunction = () => {this.props.update};
    }
    cur_date() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = mm+'-'+dd+'-'+yyyy;
        return today;
    };
    render() {
        return (
            <div>
            <form>
                <label style = {{marginRight: "20px"}}>
                    <input type="text" placeholder="Create a Post" />
                </label>
            </form>
            </div>
        );
    }};

export default WritePost;

