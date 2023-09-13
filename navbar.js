class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>


      /* Removes Scrollbar */
      ::-webkit-scrollbar {
        width: 0px;
      }

      #pageheader{

      }

      #pageheadertxt{
        font-family: monospace;
        font-size: 60px;
        text-align: center;
      }




      .font1{
        font-family: monospace;
      }

      .font2{
        font-family: "Lucida Console", Courier, monospace;
      }

      .font3{
        font-family: 'Times New Roman', serif;
      }

      .smlwhitebdr{
        border-style: dashed;
        border-radius: 12px;
      }

      .backgroundblur{
          -webkit-backdrop-filter: blur(7px);
          backdrop-filter: blur(7px);
      }


      .longtrklist{
       font-size: 18px;
      }

      .shorttrklist{
       font-size: 24px;
      }


      .fontsz1{
       font-size: 18px;
      }


      .fontsz2{
       font-size: 34px;
      }

      .fontsz3{
       font-size: 24px;
      }

      .fontsz4{
       font-size: 27px;
      }

      .fontsz5{
       font-size: 33px;
      }

      .fontsz6{
       font-size: 30px;
      }

      .fontsz7{
       font-size: 532px;
      }

      .fontsz8{
       font-size: 22px;
      }


      .fontsz11{
       font-size: 25px;
      }

      .artistpropic{
        width: 170px !important;
        height: 170px !important;
      }

      .albumcover{
        width: 225px !important;
        height: 225px !important;
      }

      .bigalbumcover{
         /* width: 390px !important;
         height: 390px !important; */
         width: 100%;
         height: 100%;
      }

      .aas{
        text-align: center !important;
      }

      .dropdown-menu {
        background-color: transparent;
       }

      .dropdowntext{
        color: white !important;
        font-family: monospace !important;
      }

      .dropdowntext:hover{
       background-color:rgba(255, 255, 255, 0.25) !important;
      }

      .color1{
        color:#BA1200;
      }

      .color2{
        color:#031927;
      }

      .color3{
        color:#9DD1F1;
      }

      .color4{
        color:#508AA8;
      }

      .color5{
        color:#C8E0F4;
      }

      .color6{
        color:white;
      }

      .centerit{
        text-align: center;
      }

      .vinylimg{
        width: 475px;
      }

      a{
        color:white !important;
      }

      .color1background{
        backgrond-color:#BA1200;
      }

      .color2background{
        background-color:#031927;
      }

      .color3background{
        background-color:#9DD1F1;
      }

      .color4background{
        background-color:#508AA8;
      }

      .color5background{
        background-color:#C8E0F4;
      }

      .phototoo{
        width: 660px !important;
        height: 500px !important;
        text-align: center !important;
      }



      .activenavbutton{
        color:#FAF9F6 !important;
        pointer-events: none !important;
        text-decoration: dashed underline;
      }

      .navbarbutton:hover{
        <!-- background-color:rgba(255, 255, 255, .2) !important; -->
        text-decoration: underline !important;
      }

      .sickorange;
        color:#cc5500 !important;
      }


      @font-face {
        font-family: NavBar;
        src:url(Koulen.ttf);
      }


      .navbarbutton{
        font-family: 'NavBar', sans-serif !important;
        font-size: 26px;

        color:white !important;
      }

      .smallerfont{
        font-size:18px !important;
          text-decoration-style: solid;
      }

      .navbardivider{
        margin-right:5px;
        margin-left:5px;
        font-size: 30px;
        color:white !important;
      }

      .imgthingleft{
        height: 50%;
        width: 50%;
        text-align: center;
        float: right;
      }

      .imgthingright{
        height: 50%;
        width: 50%;
        text-align: center;
        float: right;
      }


      </style>
      <header>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md text-center">
        <span class="dropdown">
                   <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                       AFC North ▼
                   </a>
                   <ul class="dropdown-menu backgroundblur">
                        <a href="../../AFC/North/pit.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/pit.png" alt="Pittsburgh"></li></a>
                        <a href="../../AFC/North/cle.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/cle.png" alt="Cleveland" ></li></a>
                        <a href="../../AFC/North/bal.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/bal.png" alt="Baltimore" ></li></a>
                        <a href="../../AFC/North/cin.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/cin.png" alt="Cincinatti" ></li></a>
                   </ul>
               </span>
          <span class="navbardivider">|</span>
          <span class="dropdown">
                     <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                         AFC East ▼
                     </a>
                     <ul class="dropdown-menu backgroundblur">
                     <a href="../../AFC/East/buf.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/buf.png" alt="Buffalo"></li></a>
                     <a href="../../AFC/East/nyj.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png" alt="New-York-Jets" ></li></a>
                     <a href="../../AFC/East/ne.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" alt="Patriots" ></li></a>
                     <a href="../../AFC/East/mia.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/mia.png" alt="Miami" ></li></a>
                     </ul>
                 </span>
                 <span class="navbardivider">|</span>
                 <span class="dropdown">
                            <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                AFC South ▼
                            </a>
                            <ul class="dropdown-menu backgroundblur">
                                 <a href="../../AFC/South/hou.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/hou.png" alt="Houston"></li></a>
                                 <a href="../../AFC/South/jax.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/jax.png" alt="Jaxonville" ></li></a>
                                 <a href="../../AFC/South/ind.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/ind.png" alt="Indianapolis" ></li></a>
                                 <a href="../../AFC/South/ten.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/ten.png" alt="Tenessee" ></li></a>
                            </ul>
                        </span>
                   <span class="navbardivider">|</span>
                   <span class="dropdown">
                              <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                  AFC West ▼
                              </a>
                              <ul class="dropdown-menu backgroundblur">
                              <a href="../../AFC/West/kc.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/kc.png" alt="Kansas City"></li></a>
                              <a href="../../AFC/West/lv.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/lv.png" alt="Las Vegas" ></li></a>
                              <a href="../../AFC/West/den.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/den.png" alt="Denver" ></li></a>
                              <a href="../../AFC/West/lac.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/lac.png" alt="LA Chargers" ></li></a>
                              </ul>
                          </span>


                          <span class="navbardivider">|</span>
                          <span class="dropdown">
                                     <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                         NFC North ▼
                                     </a>
                                     <ul class="dropdown-menu backgroundblur">
                                          <a href="../../NFC/North/det.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/det.png" alt="dettsburgh"></li></a>
                                          <a href="../../NFC/North/gb.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" alt="Cleveland" ></li></a>
                                          <a href="../../NFC/North/chi.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" alt="Baltimore" ></li></a>
                                          <a href="../../NFC/North/min.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/min.png" alt="Cincinatti" ></li></a>
                                     </ul>
                                 </span>
                            <span class="navbardivider">|</span>
                            <span class="dropdown">
                                       <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                           NFC East ▼
                                       </a>
                                       <ul class="dropdown-menu backgroundblur">
                                       <a href="../../NFC/East/phi.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/phi.png" alt="Philly"></li></a>
                                       <a href="../../NFC/East/dal.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/dal.png" alt="Dalas" ></li></a>
                                       <a href="../../NFC/East/nyg.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png" alt="NYG" ></li></a>
                                       <a href="../../NFC/East/wsh.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png" alt="Washington" ></li></a>
                                       </ul>
                                   </span>
                                   <span class="navbardivider">|</span>
                                   <span class="dropdown">
                                              <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                                  NFC South ▼
                                              </a>
                                              <ul class="dropdown-menu backgroundblur">
                                                   <a href="../../NFC/South/no.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/no.png" alt="New Orleans"></li></a>
                                                   <a href="../../NFC/South/tb.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/tb.png" alt="Tampa" ></li></a>
                                                   <a href="../../NFC/South/atl.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/atl.png" alt="Atlanta" ></li></a>
                                                   <a href="../../NFC/South/car.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/car.png" alt="Carolina" ></li></a>
                                              </ul>
                                          </span>
                                     <span class="navbardivider">|</span>
                                     <span class="dropdown">
                                                <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                                                    NFC West ▼
                                                </a>
                                                <ul class="dropdown-menu backgroundblur">
                                                <a href="../../NFC/West/sea.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/sea.png" alt="Seatle"></li></a>
                                                <a href="../../NFC/West/sf.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/sf.png" alt="San Fran" ></li></a>
                                                <a href="../../NFC/West/ari.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" alt="Arizona" ></li></a>
                                                <a href="../../NFC/West/lar.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/lar.png" alt="LA Rams" ></li></a>
                                                </ul>
                                            </span>


        </div>
        </nav>

      </header>
    `;
  }
}

customElements.define('header-component', Header);
