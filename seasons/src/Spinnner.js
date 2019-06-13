import React from 'react';

const spinner = (props)=>{
    return (
<div class="ui segment">
  <div class="ui active dimmer">
    <div class="ui text loader">{props.message}</div>
  </div>
  <p></p>
</div>
    );
};

spinner.defualtProps = {
    messsage: 'Loading.....'   
}

export default spinner;