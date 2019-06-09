import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
 

const App = () =>{
    return( 
    <div className="ui container comments">
        <ApprovalCard>
            <div>
            Are sure you want to do this?
            </div>
            <CommentDetail 
             author= "Alex" 
             timeAgo="Today at 5:45PM" 
             content = "I like it!"
             avatar = {faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
             author= "Alex" 
             timeAgo="Today at 5:45PM" 
             content = "I like it!"
             avatar = {faker.image.avatar()}
            />
         </ApprovalCard>
         <ApprovalCard>
        <CommentDetail author= "Arthor" timeAgo="Today at 2:35PM" content = "Nice blog!"  avatar = {faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author= "Jane" timeAgo="Yesterday at 3:45PM" content = "Dam it!"  avatar = {faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));
