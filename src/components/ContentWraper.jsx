import React  from 'react'
import TopBar from "./TopBar"
import ContentRowTop from "./ContentRowTop";
import Footer from './Footer';
import Table from "./table/Table";


function ContentWraper (){
    return(
<>
<div id="content">
<TopBar/>

<ContentRowTop/>


<Table  />

<Footer/>
</div>



</>
)
}


export default ContentWraper