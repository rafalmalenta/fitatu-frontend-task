<template>
    <nav class="navbar">  
  
    <ul class="menu" v-bind:class="{'mobile':isMobile, 'colapsed':isColapsed}" >
        <li class="menu__item"><router-link to="fakeview1">fakeview1</router-link></li>
        <li class="menu__item"><router-link to="fakeview2">fakeview2</router-link></li>
        <li class="menu__item"><router-link to="fakeview3">fakeview3</router-link></li>    
        <li >
            <div class="hamburger" v-on:click="toggleColapse()" >
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </div>    
        </li>
  </ul> 
</nav>
</template>
<script>


export default {
    
    name: "Menu",
    data(){
        return {
            isMobile : true,
            isColapsed: true,
            hamburger: null,
            
        }
    },
    methods:{          
        toggleColapse(){
            this.isColapsed = !this.isColapsed;
            console.log()
            document.getElementsByClassName("hamburger")[0].classList.toggle("change");

        }, 
          
        detectmob() { 
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
        this.isMobile = true;
        }
        else {
            this.isMobile = false;
        }
        },
        
    },
    created(){
        //this.detectmob();         
    },   
    
}
</script>
<style lang="scss" scoped>
a{
    transition-duration: 0.8s;    
}
li{
    display: inline;
}
.colapsed a{
    height: 0px !important;
    overflow: hidden;
}
.mobile a{
    display: block;
    width: 100%;  
    text-align: center;
    position: relative;
    overflow: hidden;
    height: 2em ;
}

.mobile .hamburger{
    display: block;
    cursor: pointer;    
    margin-left:auto; 
    margin-right: 2%;    
    width: 40px;   
   
}
.hamburger{
    display: none;
}
#bar1, #bar2, #bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
  
}


.mobile li{
   display:block;
   width: 100%;

}
.menu {
    box-sizing: border-box;    
    width: 100%;      
    transition-duration: 1s;
    font-size: 22px;
    overflow: hidden;   
}
.menu a{
    text-decoration: none;
    color: inherit;
    position: relative;
    margin-right: 44px; 
}
.change #bar1 {    
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change #bar2 {opacity: 0;}

.change #bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

</style>
