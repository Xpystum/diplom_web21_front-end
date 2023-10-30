import style from './Button.module.sass';

export default function Button(props) {
    let name_content = props.name ?? 'there should be a name here';
    let type_button = props.type ?? 'button'; 
    let method = props.method ?? null;
    // let styleName = props.name_class ?? 'defaultButton';
    let styleName = 'relevance';
    // className={style.}

    return (
      <button onClick={()=>{
        // method();
      }} type={type_button} className={style[styleName]}>
        <div className={style[styleName + '_content']}>
            {name_content}
        </div>
      </button>
    )
  };
  