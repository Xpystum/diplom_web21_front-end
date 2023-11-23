import Select, { components } from 'react-select'
import style from './CustomDataListImg.module.sass';
import './CustomDataListImg.css';
import images from './patrik.png';

export default function CustomDataListImg(props) {
    let placeholder = props.placeholder;

  

    const testImage = images;

    //картинка + название
    const options = [
        { value: 'chocolate1', label: 
            <div className={style.generation_card}>
                <div className={style.wrapp_images}>
                    <img src={testImage} height="180px" width="200px"/>
                </div>
                <div className={style.wrapp_info}>
                    <div className={style.title}>
                        BMW X10 PATRIK BANE
                    </div>

                    <div className={style.generation}>
                        поколение мужчин
                    </div>
                </div>
            </div> 
        },

        { value: 'chocolate2', label: 
            <div className={style.generation_card}>
                <div className={style.wrapp_images}>
                    <img src={testImage} height="180px" width="200px"/>
                </div>
                <div className={style.wrapp_info}>
                    <div className={style.title}>
                        BMW X10 PATRIK BANE
                    </div>

                    <div className={style.generation}>
                        поколение мужчин
                    </div>
                </div>
            </div> 
        },

        { value: 'chocolate3', label: 
            <div className={style.generation_card}>
                <div className={style.wrapp_images}>
                    <img src={testImage} height="180px" width="200px"/>
                </div>
                <div className={style.wrapp_info}>
                    <div className={style.title}>
                        BMW X10 PATRIK BANE
                    </div>

                    <div className={style.generation}>
                        поколение мужчин
                    </div>
                </div>
            </div> 
        },

        { value: 'chocolate4', label: 
            <div className={style.generation_card}>
                <div className={style.wrapp_images}>
                    <img src={testImage} height="180px" width="200px"/>
                </div>
                <div className={style.wrapp_info}>
                    <div className={style.title}>
                        BMW X10 PATRIK BANE
                    </div>

                    <div className={style.generation}>
                        поколение мужчин
                    </div>
                </div>
            </div> 
        },
    ]


    //изменение логики input (библиотека)
    const ValueContainer = ({ children, getValue, ...props  }) =>{
        let values = getValue();
        let placeholder = props.selectProps.placeholder;

        let divPocolenue = '';
        let divInfo = '';
        let divGeneral = '';

        if(values.length != 0){

            // console.log(values[0].label.props.children[1].props.children); //получаем массив 2 div (где информация на картинке)
            let divValue = values[0].label.props.children[1].props.children;

            divValue.forEach((element, index) => {
                if(index == 0){
                    divInfo += element.props.children;
                }
                else{
                    divPocolenue += element.props.children;
                }
            });

            divGeneral = divPocolenue + ", " + divInfo;
        }

        

            return (
                <components.ValueContainer {...props}>
                    {
                        (divGeneral == '') ? 
                        <div>{placeholder}</div>
                        :
                        <div>{divGeneral}</div>
                    }
                </components.ValueContainer>
            )
    };

    return (
        <>
            <Select  

            placeholder={placeholder} 
            options={options}
            isSearchable={false}
            className='react_select_container'
            components={{ ValueContainer: ValueContainer }}
            classNamePrefix='react_select'
            Clearable
            // menuIsOpen={true}
            />
        </>
    )
}


    
   
