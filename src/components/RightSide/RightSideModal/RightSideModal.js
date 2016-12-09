import React from 'react';

import './RightSideModal.css';


const RightSideModal = (props) => {
	return (
		<div className="rightside-modal congratulation-box">
		    <p>«Поздравляем! Вы успешно продали 19 тонн "{props.name}" за {props.price * 19} руб. С вами свяжется логист для обсуждения деталей отгрузки.»</p>
		</div>
	)
}

export default RightSideModal;