import React  from 'react'
import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop";
import Footer from './Footer';
import Table from "./table/Table";
import  '../assets/css/contenWrapper.css'

function ContentWraper ({userInfo,productInfo}){

   return(
<>
<div id="content">
<TopBar/>

<ContentRowTop categories={Object.keys(productInfo.countByCategory)} userInfo={userInfo} productInfo={productInfo}
         />


<Table  data={productInfo.products}
              header={["id", "name", "description", "detail", "category"]}  />

<Table  data={userInfo.users}
              header={["id", "name", "email", "detail"]}/>
<Footer/>
</div>



</>
)
}


export default ContentWraper