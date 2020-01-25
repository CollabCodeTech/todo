import React, { useState, useRef, useEffect } from 'react';

import iconEdit from '../../img/icon_edit.svg';
import iconDelete from "../../img/icon_delete.svg";
import { Label, Checkbox, Icon, Content } from './styles';

function MainTask ({id, content}) {
  const [isEditable, setIsEditable] = useState(false);
  const componentContent = useRef(null);

  function editable() {
    setIsEditable(old => !old);
  }

  function selectText(event) {
    console.log('ENTROU AQUI AGORA!')
    console.log(event.target);

    event.target.select();
  }


  useEffect(() => {
    isEditable && componentContent.current.focus();
  });

  return (
    <>
      <Checkbox id={id}/>
      <Label htmlFor={id}>
        <Content contentEditable={isEditable} suppressContentEditableWarning={true}>
          {content}
        </Content>

        <input ref={componentContent} onFocus={selectText} type="text" value="EITA MDN" />

        <Icon src={iconEdit} onClick={editable} />
        <Icon src={iconDelete} />
      </Label>
    </>
  )
};



export default MainTask;