import React from 'react';
import style from './ProductForm.css';
import repeat from 'lodash/string/repeat';

function ProductForm(props) {
    return (
        <div className={style.container}>
            <div className={style.title}>Продукт</div>
            <div className={style.line}>
                <div className={style.label}>Бренд</div>
                <input className={style.input} value={props.brand} />
            </div>
            <div className={style.line}>
                <div className={style.label}>Название</div>
                <input className={style.input} value={props.name} />
            </div>
            <div className={style.line}>
                <div className={style.label}>Изображение</div>
                <input className={style.input} value={props.image} type="file"  />
            </div>
            <div className={style.line}>
                <div className={style.label}>Описание</div>
                <textarea className={style.description} value={props.description} />
            </div>
            <div className={style.line}>
                <div className={style.label}></div>
                <button className={style.submit}>Отправить</button>
            </div>
        </div>
    );
}

ProductForm.propTypes = {
    id: React.PropTypes.number,
    rating: React.PropTypes.number,
    text: React.PropTypes.string
};

ProductForm.propDemos = {
    default: {
    }
};

export default ProductForm;
