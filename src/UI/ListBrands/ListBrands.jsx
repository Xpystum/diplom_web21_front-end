import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ListBrands.sass"
import BrandColumnWidget from "../../widgets/BrandColumnWidget/BrandColumnWidget";



export default function ListBrands(props){
    let brands = props.brands
    return(
        <div>
            <Tabs className="container"> 
                <TabList className="tabs__menu"> 
                    <Tab className="tabs__menu__item">Легковые авто</Tab> 
                    <Tab className="tabs__menu__item">Грузовики</Tab> 
                </TabList>
                <TabPanel className="tabs__content">
                        <BrandColumnWidget brands={brands} itemColumn={42} noPopular={null}/>
                </TabPanel> 
                <TabPanel className="tabs__content"> 
                    В разработке
                    <BrandColumnWidget brands={brands} itemColumn={1}/>
                </TabPanel > 
            </Tabs>
        </div>
    );
}