import './ReviewTabsImportant.sass';//переопределение стилей
import style from './ReviewTabs.module.sass'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReviewFilterCard from '../ReviewFilterCard/ReviewFilterCard';
import { useSelector } from 'react-redux';
import PreloaderSmall from '../PreloaderSmall/PreloaderSmall';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ReviewTabs(props){
    let select_review = props.select_review

    let tab_review = []
    
    
    let [tabReview, setTabReview] = useState({})
    // tabReview = []
    // let tab_review = []
    let loading = false
    // let tabReview = tab_review
    if(tab_review.length == 0){
        tab_review = select_review
        // setTabReview(tab_review)
        // if(tabReview.length == 0){
        //     tabReview = tab_review
        // }
        // else{
        //     tab_review = tabReview
        // }
        
    }


    function onFilterCheck(evt){
        let idFilter = evt.target.id
        tab_review = []
        switch(idFilter){
            case 'all':  
                tab_review = select_review
                
                setTabReview(tab_review)
                break;
            case 'new':  
                tab_review = select_review.slice(-3)
                 
                setTabReview(tab_review)
                break;
        }

        console.log(tabReview)
        console.log(idFilter)
        console.log(tab_review)
    }
    
    // tab_review = tabReview
    return(
        
        <div className={style.Review_tabs_wrap}>
            <div className={style.Review_tabs_conteiner}>
                <Tabs>
                    <TabList>
                            <Tab>
                                <div 
                                    id='all'
                                    onClick={(evt)=>{onFilterCheck(evt)}}
                                >
                                    Все отзывы
                                </div>
                            </Tab>
                            <Tab>
                                <div 
                                    id='new'
                                    onClick={(evt)=>{onFilterCheck(evt)}}
                                >
                                    Только новые
                                </div>
                            </Tab>
                            <Tab>
                                <div 
                                    id='myReviews'
                                    onClick={(evt)=>{onFilterCheck(evt)}}
                                >
                                    Мои отзывы
                                </div>
                            </Tab>
                    </TabList>
                    
                    <TabPanel>
                        {(tab_review.length != 0 )?
                        
                        <div className={style.Tab_panel_wrap}
                        >   
                            <div className={style.Add_review_wrap}>
                                <Link className={style.Add_review} to='add-review'>
                                    <button className={style.Add_review}>
                                            <span>Добавить отзыв </span>
                                    </button>
                                </Link>
                                <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                            </div>
                                {tab_review.map((tab_review)=>
                                    (loading)?
                                        <PreloaderSmall />
                                        :
                                        <ReviewFilterCard
                                            tab_review={tab_review}
                                            key={tab_review.id}
                                        />
                            )}
                            </div>
                            :
                            <div className={style.Tab_panel_wrap}>
                                <div className={style.Add_review_wrap}>
                                        <Link className={style.Add_review} to='add-review'>
                                            <button className={style.Add_review}>
                                                    <span>Добавить отзыв </span>
                                            </button>
                                        </Link>
                                    <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                                </div>
                                <div>123</div>
                            </div>
                            }                        
                    </TabPanel>
                    <TabPanel>
                    {(tab_review.length != 0 )?
                        <div className={style.Tab_panel_wrap}
                        >   
                            <div className={style.Add_review_wrap}>
                                <Link className={style.Add_review} to='add-review'>
                                    <button className={style.Add_review}>
                                            <span>Добавить отзыв </span>
                                    </button>
                                </Link>
                                <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                            </div>
                                {tab_review.map((tab_review)=>
                                    (loading)?
                                        <PreloaderSmall />
                                        :
                                        <ReviewFilterCard
                                            tab_review={tab_review}
                                            key={tab_review.id}
                                        />
                            )}
                            </div>
                            :
                            <div className={style.Tab_panel_wrap}>
                                <div className={style.Add_review_wrap}>
                                        <Link className={style.Add_review} to='add-review'>
                                            <button className={style.Add_review}>
                                                    <span>Добавить отзыв </span>
                                            </button>
                                        </Link>
                                    <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                                </div>
                            </div>
                            }
                    </TabPanel>
                    <TabPanel>
                    {(tab_review.length != 0 )?
                        <div className={style.Tab_panel_wrap}
                        >   
                            <div className={style.Add_review_wrap}>
                                <Link className={style.Add_review} to='add-review'>
                                    <button className={style.Add_review}>
                                            <span>Добавить отзыв </span>
                                    </button>
                                </Link>
                                <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                            </div>
                                {tab_review.map((tab_review)=>
                                    (loading)?
                                        <PreloaderSmall />
                                        :
                                        <ReviewFilterCard
                                            tab_review={tab_review}
                                            key={tab_review.id}
                                        />
                            )}
                            </div>
                            :
                            <div className={style.Tab_panel_wrap}>
                                <div className={style.Add_review_wrap}>
                                        <Link className={style.Add_review} to='add-review'>
                                            <button className={style.Add_review}>
                                                    <span>Добавить отзыв </span>
                                            </button>
                                        </Link>
                                    <span>Помогите читателям выбрать авто — оставьте отзыв о своей машине</span>
                                </div>
                            </div>
                            }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}