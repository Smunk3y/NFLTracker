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
        font-size: 36px;

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
        height: 45%;
        width: 45%;
        text-align: center;
        float: right;
      }

      .imgthingright{
        height: 45%;
        width: 45%;
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
                        <a href="AFC/North/Pit.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/pit.png" alt="Pittsburgh"></li></a>
                        <a href="AFC/North/Cle.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/cle.png" alt="Cleveland" ></li></a>
                        <a href="AFC/North/Bal.html"><li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/bal.png" alt="Baltimore" ></li></a>
                        <a href="AFC/North/Cin.html"><li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/cin.png" alt="Cincinatti" ></li></a>
                   </ul>
               </span>
          <span class="navbardivider">|</span>
          <span class="dropdown">
                     <a class="dropdown-toggle navbarbutton " data-toggle="dropdown" href="">
                         AFC East ▼
                     </a>
                     <ul class="dropdown-menu backgroundblur">
                         <li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/pit.png" alt="Pittsburgh" href="AFC/North/pit.html"></li>
                         <li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/cle.png" alt="Cleveland" href="AFC/North/cle.html"></li>
                         <li><img class="imgthingleft" src="https://a.espncdn.com/i/teamlogos/nfl/500/bal.png" alt="Baltimore" href="AFC/North/bal.html"></li>
                         <li><img class="imgthingright" src="https://a.espncdn.com/i/teamlogos/nfl/500/cin.png" alt="Cincinatti" href="AFC/North/cin.html"></li>
                     </ul>
                 </span>

        </div>
        </nav>

      </header>
    `;
  }
}

customElements.define('header-component', Header);
