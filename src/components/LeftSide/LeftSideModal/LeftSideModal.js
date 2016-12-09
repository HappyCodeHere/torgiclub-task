import React from 'react';

import './LeftSideModal.css';


const LeftSideModal = (props) => {
	return (
		<div className="leftside-modal">
		    <h2>Использование депозита</h2>
		    <h3>Депозит в размере <span>3000,-p</span> успешно использован</h3>
		    <p>Один депозит обеспечивает неограниченное количество предложений, но будет использован для оплаты 1,5% согласно правил системы ТоргиClub®.</p>
		    <p>Депозит можно вернуть, если ни одно из предложений не принято продавцом. <br/> Депозит не возвращается, если цена принята продавцом</p>
		    <button className="btn btn-primary" onClick={props.closeModal}>Закрыть</button>
		</div>
	)
}

export default LeftSideModal;