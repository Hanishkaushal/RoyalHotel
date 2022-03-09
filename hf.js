class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div style="position: sticky;
                top:0;">
        <div style="background-color:rgb(27, 17, 17);
                    color:white;
                    font-family: Ebrima;">
            <a href="c19.html" style="text-decoration:none;
                                                color:white;
                                                margin-left:50px;">
                                                
                                            COVID19 Update      </a>
            <a href="Immunity.html" style="text-decoration:none;
                                                position: absolute; 
                                                right: 3%;
                                                color:white;">
                                                
                                            Strong Immunity     </a>
        
        </div>
        <div style=" background-color:#fff;
                height:37px;
                box-shadow: 1px 1px 5px black;"> 
            <a href = 'index.html' style = "color:black; 
                                    font-family:Franklin Gothic Book; 
                                    font-size:20px;
                                    margin-left:50px;">
                                    
                                Home        </a>
            <a href = 'aboutus.html' style = "color:black; 
                                    font-family:Franklin Gothic Book; 
                                    font-size:20px;
                                    margin-left:25px;">
                                    
                                About us    </a>
            <a href = 'restaurant.html' style = "color:black; 
                                    font-family:Franklin Gothic Book; 
                                    font-size:20px;
                                    margin-left:25px;">

                                Restaurant    </a>
            <a href = 'contactus.html' style = "color:black; 
                                    font-family:Franklin Gothic Book; 
                                    font-size:20px;
                                    margin-left:25px;">
                                    
                                Contact us  </a>
            <a href = 'magazine.html' style = "color:black; 
                                    font-family:Franklin Gothic Book; 
                                    font-size:20px;
                                    margin-left:25px;">
                                    
                                Magazine    </a>
        </div>
        </div>
        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML=`
        
        <div style="height: 200px;
                    background-color:rgb(27, 17, 17);
                    padding:25px;">
                    
            <div style="display: flex;
                    width: 90%;
                    margin:auto;">

                <div style="margin-left:12%;"> 
                    <h4 style="color:white;">About US |</h4>
                    <ul>
                        <li style="color:white;">
                            <a href = "aboutus.html" style="color:white;">Our Story</a>
                        </li>
                        <li style="color:white;">
                            <a href = "Awards.html" style="color:white;">Awards</a>
                        </li>
                        <li style="color:white;">
                            <a href = "contactus.html" style="color:white;">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div style="margin-left:12%;">
                    <h4 style="color:white;">News |</h4>
                    <ul>
                        <li style="color:white;">
                            <a href = "pressrelece.html" style="color:white;">Press Room</a>
                        </li>
                        <li style="color:white;">
                            <a href = "news.html" style="color:white;">News/Media</a>
                        </li>
                        <li style="color:white;">
                            <a href = "magazine.html" style="color:white;">The Magazine</a>
                        </li>
                    </ul>
                </div>
                <div style="margin-left:12%;">
                    <h4 style="color:white;">More |</h4>
                    <ul>
                        <li style="color:white;">
                            <a href = "direct.html" style="color:white;">Book Direct</a>
                        </li>
                    </ul>
                </div>
                <div style="margin-left:12%;">
                    <h4 style="color:white;">Connect |</h4>
                    <ul>
                        <li style="color:white;">
                            <a href = "https://www.facebook.com/"><img src="images/facebook.png" width="30px"></a>
                        </li>
                        <li style="color:white;">
                            <a href = "https://www.youtube.com/"><img src="images/youtube.png" width="30px"></a>
                        </li>
                        <li style="color:white;">
                            <a href = "https://twitter.com/home"><img src="images/twitter.png" width="30px"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        `  
    }
}
customElements.define(`my-footer`,MyFooter)