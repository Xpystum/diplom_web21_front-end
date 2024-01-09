import React, { useEffect, useState } from 'react';
import Header from '../../UI/Header/Header';
import { request } from '../../Action/request';
import { useDispatch, useSelector } from "react-redux";
import { loaderSwitchWidgets, reloadWidgets } from "../../redux/dataState";


export default function TestPage(props){
    let dispatch = useDispatch();
    let widgets = useSelector(state => state.dataState.value.widgets);
    let [widget, setWidgets] = useState([]);


        useEffect(() => {
          if (widgets.loader) {
            request('post', 'widgets', (response) => {
              if (response.status === 200) {
                dispatch(loaderSwitchWidgets(false));
                dispatch(reloadWidgets(response.data));
              }
              }, {});
            }
          }, [dispatch, widgets.loader]);
        
          function handleUpdateWidgetPosition(id, newPosition){
            // Логика обновления позиции виджета
            console.log("Обновление виджета")
            const data = { position: newPosition };
            request('put', `widgets/${id}`, (response) => {
              if (response.status === 200) {
                const updatedWidget = response.data;
                setWidgets(prevWidgets =>
                  prevWidgets.map(widget => (widget.id === updatedWidget.id ? updatedWidget : widget))
                );
              }
        }, data);
      }; 
  return (
    <div>
        < Header/>
        <h1>Main Page</h1>
        <table>
          <thead>
            <tr>
              <td>Описание</td>
              <td>Название</td>
              <td>Позиция</td>
              <td>Действие</td>
            </tr>
          </thead>
          <tbody>
            {widgets.data.map(widget => (  
              <tr key={widget.id}>
                <td>{widget.specification}</td>
                <td>{widget.name}</td>
                <td>{widget.position}</td>
                <td>
                  <button onClick={() => handleUpdateWidgetPosition(widget.id, 'newPosition')}>
                    изменить позицию
                  </button>
                </td>
              </tr>
            ))}    
          </tbody>   
        
        </table>
    </div>
  );
};